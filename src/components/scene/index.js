import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import glsl from "glslify";
import { ACESFilmicToneMapping, Color, Vector3 } from "three";
import React, { useRef } from "react";

const vert = glsl`
  #define S smoothstep
  #define RADIUS 1.0

  uniform float uTime;
  uniform vec3 uColor[5];
  uniform vec3 uMouse;

  varying vec3 vColor;

  #pragma glslify: snoise = require(glsl-noise/simplex/3d);
  #pragma glslify: cnoise = require(glsl-noise/classic/3d);

  void main() {
    vec3 pos = position;

    vec2 st = uv * vec2(4.0, 6.0);

    float noise = snoise(vec3(st, uTime * 0.035));

    // add concavity to wrap around cam, displace plane
    float incline = abs(uv.x - 0.5) * 2.0;
    float tilt = -0.8 * uv.y;
    pos.z += tilt + incline + incline * mix(-0.25, 0.25, uv.y);
    pos.z += noise * 0.75;

    vec4 modelPos = modelMatrix * vec4(pos, 1.0);
    
    float d = max(0.0, RADIUS - distance(modelPos.xyz, uMouse));

    modelPos.y -= d;

    // calculate color
    st = modelPos.xz * vec2(0.25, 0.3);
    vec3 color = uColor[0];

    for (int i = 0; i < 5; i++) {
      float speed = 5.0 + float(i) * 0.3;
      float flow = 3.0 + float(i) * 0.3;

      noise = cnoise(
        vec3 (
          st.x + uTime * 0.025 * flow,
          st.y + uTime * 0.01 * flow,
          uTime * 0.025 * speed
        )
      ) + 0.25;
      
      color = mix(color, uColor[i], S(0.0, 1.0, noise));
    }

    gl_Position = projectionMatrix * viewMatrix * modelPos;
    vColor = color;
  }
`;

const frag = glsl`
  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4(vColor, 1.0);

    gl_FragColor.xyz = toneMapping(gl_FragColor.xyz);

    // #include <encodings_fragment>
  }
`;

const colors = ["#FFA69E", "#726DA8", "#5DB7DE", "#381D2A", "#C30000"].map(
  color => new Color(color)
);

const WavesMaterial = shaderMaterial(
  { uTime: 0, uColor: colors, uMouse: new Vector3() },
  vert,
  frag,
  m => {
    // m.transparent = true;
    m.depthTest = false;
    m.toneMapped = true;
  }
);

extend({ WavesMaterial });

const Waves = () => {
  const ref = useRef();
  const camera = useThree(s => s.camera);

  useFrame(({ clock }) => {
    ref.current.material.uTime = clock.elapsedTime + 100.0;
  });

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 3, 0, 0]}
      onClick={() => console.log(camera.position, camera.rotation)}
    >
      <planeGeometry args={[10, 10, 95, 95]} />
      <wavesMaterial />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <div
        className="shade"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          touchAction: "none",
          zIndex: 1,
          background:
            "linear-gradient(0deg, rgba(34,28,28,1) 0%, rgba(34,28,28,0) 100%)",
        }}
      ></div>
      <Canvas
        style={{
          position: "absolute",
          inset: 0,
        }}
        gl={{ toneMapping: ACESFilmicToneMapping }}
        onCreated={({ events }) => {
          let el = document.querySelector(".canvasWrapper");
          events.connect(el);
        }}
        camera={{
          fov: 30,
          position: [0.07769, 1.25757, 3.16454],
          rotation: [
            -0.37825802449688795, 0.022810747065275208, 0.0090638254083712,
          ],
        }}
      >
        <Waves />
        {/* <OrbitControls position={[0.07769, 1.25757, 3.16454]} /> */}
      </Canvas>
    </>
  );
};

export default Scene;

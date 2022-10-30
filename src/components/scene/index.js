import { shaderMaterial } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import glsl from "glslify";
import { Color } from "three";
import React, { useRef } from "react";

const vert = glsl`
  #define S smoothstep

  uniform float uTime;
  uniform vec3 uColor[5];

  varying vec3 vColor;

  #pragma glslify: snoise = require(glsl-noise/simplex/3d);
  #pragma glslify: cnoise = require(glsl-noise/classic/3d);

  void main() {
    vec3 pos = position;

    vec2 st = uv * vec2(4.0, 6.0 - uTime * 0.25);

    float noise = snoise(vec3(st, uTime * 0.025));

    // add concavity to wrap around cam, displace plane
    float incline = abs(uv.x - 0.5) * 2.0;
    float tilt = -0.8 * uv.y;
    pos.z += tilt + incline + incline * mix(-0.25, 0.25, uv.y);
    pos.z += noise * 0.75;

    vec4 modelPos = modelMatrix * vec4(pos, 1.0);

    // calculate color
    st = uv * vec2(0.75, 1.0);
    float colorNoise = abs(cnoise(vec3(st * 2.0, uTime * 0.015))) * 4.;
    vec3 color = uColor[0];

    color = mix(color, uColor[1], S(0.0, 1.0, colorNoise));
    color = mix(color, uColor[2], S(1.0, 2.0, colorNoise));
    color = mix(color, uColor[3], S(2.0, 3.0, colorNoise));
    color = mix(color, uColor[4], S(3.0, 4.0, colorNoise));

    if (colorNoise > 4.0) {
      color = vec3(0.0);
    }

    gl_Position = projectionMatrix * viewMatrix * modelPos;
    vColor = color;
  }
`;

const frag = glsl`
  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4(vColor, 1.0);

    // #include <encodings_fragment>
  }
`;

const colors = ["#c30000", "#9c4377", "#cf7171", "#565656", "#a84242"].map(
  color => new Color(color)
);

const WavesMaterial = shaderMaterial(
  { uTime: 0, uColor: colors },
  vert,
  frag,
  m => {
    // m.transparent = true;
    m.depthTest = false;
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
      <planeGeometry args={[10, 10, 75, 75]} />
      <wavesMaterial />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
      }}
      camera={{
        fov: 30,
        position: [0.07769, 1.25757, 3.16454],
        rotation: [-0.55067, 0.02305, 0.00843],
      }}
    >
      <Waves />
    </Canvas>
  );
};

export default Scene;

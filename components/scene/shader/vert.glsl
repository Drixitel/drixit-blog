#define S smoothstep
#define RADIUS 1.0
#define COLOR_COUNT 4

uniform float uTime;
uniform vec3 uColor[COLOR_COUNT];
uniform vec3 uMouse;
uniform vec2 uResolution;

varying vec3 vColor;

#pragma glslify: snoise = require(glsl-noise/simplex/3d);
#pragma glslify: cnoise = require(glsl-noise/classic/3d);

vec2 transformUvs(vec2 uvs) {
  vec2 st = uvs * vec2(4.0, 6.0);
  st -= uTime * 0.1;

  return st;
}

void main() {
  vec3 pos = position;
  vec2 st = transformUvs(uv);
  float displacement = snoise(vec3(st, uTime * 0.035));

  // add concavity to wrap around cam, displace plane
  float inclineX = abs(uv.x - 0.5);
  float inclineY = abs(uv.y - 0.5);
  float incline = pow(max(inclineX , inclineY), 2.0) * 5.0;

  float tilt = -0.8 * uv.y;
  pos.z += tilt + incline + incline;
  pos.z += displacement * 0.75;

  vec4 modelPos = modelMatrix * vec4(pos, 1.0);
  

  // calculate color
  st = modelPos.xz * vec2(0.25, 0.3);
  vec3 color = uColor[0];

  for (int i = 0; i < COLOR_COUNT; i++) {
    float speed = 5.0 + float(i) * 0.3;
    float flow = 3.0 + float(i) * 0.3;

    float noise = cnoise(
      vec3 (
        st.x + uTime * 0.025 * flow,
        st.y + uTime * 0.01 * flow,
        uTime * 0.025 * speed
      )
    ) + 0.25;
    
    color = mix(color, uColor[i], S(0.0, 1.0, noise));
  }

  color += max(displacement, 0.0) * color;

  gl_Position = projectionMatrix * viewMatrix * modelPos;
  vColor = color;
}

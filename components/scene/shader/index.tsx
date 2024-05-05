import { shaderMaterial } from "@react-three/drei";
import vert from "./vert.glsl";
import frag from "./frag.glsl";
import { Color, ShaderMaterial, Vector2, Vector3 } from "three";
import { MaterialNode, extend } from "@react-three/fiber";

type Uniforms = {
  uTime: number;
  uColor: Color[];
  uMouse: Vector3;
  uResolution: Vector2 | [number, number];
};

const colors = ["#FFA69E", "#726DA8", "#5DB7DE", "#C30000"].map(
  (color) => new Color(color)
);

const uniforms: Uniforms = {
  uTime: 0,
  uColor: colors,
  uMouse: new Vector3(),
  uResolution: new Vector2(),
};

const WavesMaterialImpl = shaderMaterial(
  uniforms,
  vert,
  frag,
  (m?: ShaderMaterial) => {
    if (m === undefined) return;

    m.toneMapped = true;
    m.defines.USE_TANGENT = 1;
  }
);

export type WavesMaterialProps = ShaderMaterial & Uniforms;

extend({ WavesMaterial: WavesMaterialImpl });

declare module "@react-three/fiber" {
  interface ThreeElements {
    wavesMaterial: MaterialNode<WavesMaterialProps, typeof WavesMaterialImpl>;
  }
}

export function WavesMaterial(props?: Partial<Uniforms>) {
  return <wavesMaterial key={WavesMaterialImpl.key} {...props} />;
}

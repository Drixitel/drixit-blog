"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ACESFilmicToneMapping, BufferGeometry, Mesh } from "three";
import React, { ComponentProps, useEffect, useRef } from "react";
import { WavesMaterial, WavesMaterialProps } from "./shader";
import { View } from "@react-three/drei";
import { cn } from "@/lib/utils";

const resolution: [number, number] = [250, 250];

export const Waves = () => {
  const ref = useRef<Mesh<BufferGeometry, WavesMaterialProps>>(null);
  const camera = useThree((s) => s.camera);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.geometry.computeTangents();
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.material.uTime = clock.elapsedTime + 100.0;
  });

  return (
    <mesh
      ref={ref}
      renderOrder={1}
      rotation={[-Math.PI / 3, 0, 0]}
      onClick={() => console.log(camera.position, camera.rotation)}
    >
      <planeGeometry args={[10, 10, ...resolution]} />
      <WavesMaterial uResolution={resolution} />
    </mesh>
  );
};

const camParams = {
  position: [0.08464713455772757, -0.20843829879717551, 2.5512489625340002] as [
    number,
    number,
    number,
  ],
  rotation: [
    0.23658555048734717, -0.021166952999425986, 0.005102943547335665,
  ] as [number, number, number],
};

export default function Scene(props: Partial<ComponentProps<typeof Canvas>>) {
  const { children, className, ...rest } = props;

  const classes = cn("rounded-md", className);

  return (
    <div className={classes}>
      <Canvas
        gl={{ toneMapping: ACESFilmicToneMapping }}
        camera={{
          fov: 30,
          ...camParams,
        }}
        {...rest}
      >
        <View.Port />
        {/* <OrbitControls {...camParams} /> */}
        {children}
      </Canvas>
    </div>
  );
}

export function SceneView(props: ComponentProps<typeof View>) {
  const { children, className, ...rest } = props;

  const classes = cn("overflow-hidden", className);

  return (
    <View {...rest} className={classes}>
      {children}
    </View>
  );
}

export function WavesView(props: ComponentProps<typeof View>) {
  const { children, className, ...rest } = props;

  const classes = cn("overflow-hidden", className);

  return (
    <View {...rest} className={classes} frames={1}>
      {children}
      <Waves />
    </View>
  );
}

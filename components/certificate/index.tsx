"use client";

import {
  Environment,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  View,
  useTexture,
} from "@react-three/drei";
import { CertificatePaper } from "./Paper";
import { ComponentProps, Suspense, useRef } from "react";
import { cn } from "@/lib/utils";
import { Group, Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { damp } from "three/src/math/MathUtils.js";
import dynamic from "next/dynamic";
import controllerImg from "./controller.png";
import starsImg from "./stars.png";

type Props = {
  name: string;
};

const Text = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Text),
  { ssr: false }
);

export default function Certificate(props: Props) {
  const certificate = useRef<Group>(null);
  const controller = useRef<Mesh>(null);
  const stars = useRef<Mesh>(null);

  const controllerTexture = useTexture(controllerImg.src, (t) => {
    t.flipY = true;
  });

  const starsTexture = useTexture(starsImg.src, (t) => {
    t.flipY = true;
  });

  useFrame(({ pointer, clock }, dt) => {
    if (certificate.current) {
      const { x, y } = certificate.current.rotation;
      certificate.current.rotation.y = damp(y, pointer.x * 0.25, 1.5, dt);
      certificate.current.rotation.x = damp(x, pointer.y * -0.25, 1.5, dt);
    }

    if (controller.current) {
      controller.current.position.y =
        -0.75 + Math.sin(clock.elapsedTime) * 0.05;
    }

    if (stars.current) {
      stars.current.scale.x = 1 + Math.sin(clock.elapsedTime) * 0.05;
      stars.current.scale.y = 1 + Math.sin(clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={certificate} onPointerDown={() => console.log(certificate)}>
      <Environment frames={1}>
        <Lightformer
          position={[0, -5, 30]}
          scale={[50, 10, 1]}
          color={"#ffccdd"}
          target={[0, 0, 0]}
        />
        <Lightformer
          position={[0, 15, 30]}
          scale={[50, 10, 1]}
          color={"#aaccff"}
          target={[0, 0, 0]}
        />

        <Lightformer
          position={[10, 0, 15]}
          scale={[50, 5, 1]}
          color={"#ccaaff"}
          target={[0, 0, 0]}
        />
        <Lightformer
          position={[-10, 0, 15]}
          scale={[50, 5, 1]}
          color={"#ffccaa"}
          target={[0, 0, 0]}
        />
      </Environment>

      <Text
        characters={props.name}
        fontSize={0.35}
        fontWeight={"bold"}
        anchorX="left"
        position={[-2, 0.35, -0.08]}
      >
        {props.name.toUpperCase()}
        <meshStandardMaterial color={"gold"} metalness={1} roughness={0.15} />
      </Text>

      <CertificatePaper rotation-x={Math.PI / 2} />

      <mesh ref={controller} scale={1.5} position={[-2.5, -0.75, 0]}>
        <planeGeometry args={[1.3, 1]} />
        <meshStandardMaterial transparent map={controllerTexture} />
      </mesh>

      <mesh ref={stars} scale={1} position={[2.5, 0.95, 0]}>
        <planeGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          transparent
          map={starsTexture}
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      <mesh position={[2.01, -0.634, -0.095]}>
        <circleGeometry args={[0.2125, 64]} />
        <meshStandardMaterial color={"gold"} metalness={1} roughness={0.15} />
      </mesh>
      <OrbitControls />
    </group>
  );
}

export function CertificateView(props: ComponentProps<typeof View> & Props) {
  const { children, className, ...rest } = props;

  const classes = cn(
    "overflow-hidden touch-none pointer-events-none",
    className
  );

  return (
    <View {...rest} className={classes} frames={1}>
      {children}
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <Suspense fallback={null}>
        <Certificate name={props.name} />
      </Suspense>
    </View>
  );
}

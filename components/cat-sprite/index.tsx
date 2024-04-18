"use client";

import {
  OrthographicCamera,
  SpriteAnimator,
  View,
  useSpriteLoader,
} from "@react-three/drei";
import spriteSheet from "./SideWalk_Orange.png";
import spriteData from "./data.json?url";
import { ComponentProps, Suspense, useRef } from "react";
import { cn } from "@/lib/utils";
import { useFrame, useThree } from "@react-three/fiber";
import { Group } from "three";

export function CatSprite() {
  const ref = useRef<Group>(null);
  const { spriteObj } = useSpriteLoader(spriteSheet.src, null, null, 6);
  const { size } = useThree();

  useFrame((_, dt) => {
    if (!ref.current) return;

    ref.current.position.x += dt * 30;

    if (ref.current.position.x > size.width / 2 + 50) {
      ref.current.position.x = -size.width / 2 - 50;
    }
  });

  return (
    <SpriteAnimator
      ref={ref}
      renderOrder={2}
      position-y={-size.height / 2 + 25}
      scale={100}
      alphaTest={0.01}
      frameName="walk"
      spriteDataset={spriteObj}
      fps={15}
      autoPlay
      loop
    />
  );
}

export function CatView(props: ComponentProps<typeof View>) {
  const { children, className, ...rest } = props;

  const classes = cn(
    "overflow-hidden pointer-events-none touch-none",
    className
  );

  return (
    <View {...rest} className={classes} frames={1}>
      {children}
      <OrthographicCamera makeDefault position={[0, 0, 1]} bottom={0} top={1} />

      <Suspense fallback={null}>
        <CatSprite />
      </Suspense>
    </View>
  );
}

import React, { useRef } from "react";

import wantedBold from "@/assets/font/Wanted Sans ExtraBold_Regular.json";
import { FontLoader } from "three/examples/jsm/Addons.js";
import { TextGeometry } from "three/examples/jsm/Addons.js";
import { Object3DNode, extend, useFrame, useThree } from "@react-three/fiber";
import { SpotLight, Vector3 } from "three";

extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

const ThreeText = () => {
  const viewport = useThree((state) => state.viewport);
  const font = new FontLoader().parse(wantedBold);
  const lightRef = useRef<SpotLight | null>(null);
  const vec = new Vector3();

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.lerp(
        vec.set(-(state.mouse.x * viewport.width) / 6, 1, 0.1),
        1
      );

      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        color="#fff"
        position={[0, 0, 0]}
        penumbra={0.2}
        distance={10}
        angle={0.5}
        intensity={9}
      />
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[2000, 2000]} />
        <meshPhongMaterial attach="material" color={"gray"} />
        <hemisphereLight intensity={1} color={"purple"} />
      </mesh>
      <mesh position={[-0.31, 0.2, 0]} castShadow>
        <textGeometry args={["Mind-Set", { font, size: 0.1, height: 0 }]} />
        <meshStandardMaterial
          attach={"material"}
          metalness={1}
          roughness={2}
          color={"white"}
        />
      </mesh>
    </>
  );
};

export default ThreeText;

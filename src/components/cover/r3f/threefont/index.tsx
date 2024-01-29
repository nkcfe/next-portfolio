import React, { useEffect, useRef } from "react";

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

interface CoverThreeProps {
  children: React.ReactNode;
}

const ThreeText = () => {
  const viewport = useThree((state) => state.viewport);
  const font = new FontLoader().parse(wantedBold);
  const lightRef = useRef<SpotLight | null>(null);
  const vec = new Vector3();

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.lerp(
        vec.set(
          -(state.mouse.x * viewport.width) / 6,
          -(state.mouse.y * viewport.height) / 6,
          1
        ),
        0.1
      );

      lightRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        color="#fff"
        position={[1, 0, 5]}
        penumbra={0.5}
        distance={3}
        angle={0.45}
        intensity={6}
      />
      <mesh position={[0, 0, -1]} receiveShadow>
        <planeGeometry args={[2000, 2000]} />
        <meshPhongMaterial attach="material" color={"purple"} />
        <ambientLight intensity={0.1} />
      </mesh>
      <mesh position={[-0.27, 0, 0]} castShadow>
        <textGeometry args={["I'm Chul", { font, size: 0.11, height: 0.02 }]} />
        <meshPhongMaterial attach="material" color={"white"} />
      </mesh>

      <mesh position={[-0.27, -0.1, 0]} castShadow>
        <textGeometry
          args={[
            "프론트엔드 개발자를 꿈꾸는 남궁철입니다.",
            { font, size: 0.025, height: 0.001 },
          ]}
        />

        <meshPhongMaterial attach="material" color={"white"} />
      </mesh>
      <mesh position={[-0.29, -0.17, 0]} castShadow>
        <textGeometry
          args={[
            "도전 정신, 성장, 협업을 중요하게 생각합니다.",
            { font, size: 0.025, height: 0.001 },
          ]}
        />

        <meshPhongMaterial attach="material" color={"white"} />
      </mesh>
      <mesh position={[-0.35, -0.24, 0]} castShadow>
        <textGeometry
          args={[
            "기초부터 탄탄한 개발자가 되기 위해 노력하고 있습니다.",
            { font, size: 0.025, height: 0.001 },
          ]}
        />

        <meshPhongMaterial attach="material" color={"white"} />
      </mesh>
    </>
  );
};

export default ThreeText;

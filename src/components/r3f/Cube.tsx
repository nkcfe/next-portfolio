import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef } from "react";
import { Vector3 } from "three";

const Controls = () => {
  const { camera } = useThree();
  useEffect(() => {}, []);
  return useFrame(() => {
    camera.lookAt(0, 0, 0);
  });
};

const CubeGeometry = () => {
  const myCube = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (myCube.current) {
      myCube.current.rotation.x = clock.getElapsedTime() * 0.5;
      myCube.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={myCube}>
      <icosahedronGeometry args={[1]} />
      <meshStandardMaterial
        color={0x00ffff}
        emissive={"purple"}
        metalness={0.5}
        roughness={0.7}
      />
    </mesh>
  );
};

const SkeletonGeometry = () => {
  const myCube = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (myCube.current) {
      myCube.current.rotation.x = clock.getElapsedTime() * 0.5;
      myCube.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <mesh ref={myCube}>
      <icosahedronGeometry args={[1]} />
      <meshBasicMaterial
        wireframe={true}
        transparent={true}
        opacity={0.2}
        color={0xaaaaaa}
      />
    </mesh>
  );
};

const Cube = () => {
  return (
    <Canvas
      aria-setsize={(window.innerWidth, window.innerHeight)}
      camera={{
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 1,
        far: 500,
        position: [0, 0, 5],
      }}
    >
      <directionalLight color={0xffffff} intensity={1} position={[1, 1, 0.5]} />

      <CubeGeometry />
      <SkeletonGeometry />
      <Controls />
    </Canvas>
  );
};

export default Cube;

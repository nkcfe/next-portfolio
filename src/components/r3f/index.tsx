import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import CubeGeometry from "./cube";
import SkeletonGeometry from "./skeleton";
import Stars from "./stars";

const Controls = () => {
  const { camera } = useThree();
  useEffect(() => {}, []);
  return useFrame(() => {
    camera.lookAt(0, 0, 0);
  });
};

const CoverThree = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 1,
        far: 500,
        position: [0, 0, 2],
      }}
    >
      <Stars />
      <directionalLight color={0xfeacff} intensity={1} position={[2, 2, 3]} />
      <CubeGeometry />
      <SkeletonGeometry />
      {/* <TriangleGeometry /> */}
      <Controls />
    </Canvas>
  );
};

export default CoverThree;

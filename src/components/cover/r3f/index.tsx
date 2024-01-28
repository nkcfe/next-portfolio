import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import CubeGeometry from "./cube";
import SkeletonGeometry from "./skeleton";
import Stars from "./stars";
import { HemisphereLight } from "three";

// const Controls = () => {
//   const { camera } = useThree();
//   useEffect(() => {}, []);
//   return useFrame(() => {
//     camera.lookAt(0, 0, 0);
//   });
// };

const CoverThree = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
      {/* <Controls /> */}
    </Canvas>
  );
};

export default CoverThree;

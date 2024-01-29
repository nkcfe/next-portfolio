import { useThree } from "@react-three/fiber";
import React from "react";

const Shadows = (props) => {
  const { viewport } = useThree();
  return (
    <mesh receiveShadow scale={[viewport.width, viewport.height, 1]} {...props}>
      <planeGeometry />
      <shadowMaterial transparent opacity={0.5} />
    </mesh>
  );
};

export default Shadows;

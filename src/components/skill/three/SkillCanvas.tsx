import React from "react";
import { Canvas, MeshProps, useFrame, useThree } from "@react-three/fiber";

interface Props {
  children: React.ReactNode;
  ref: React.MutableRefObject<HTMLElement>;
}

const SkillCanvas: React.FC<Props> = ({ children, ref }) => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ position: [0, 0, 5] }}
      eventSource={ref}
    >
      {children}
    </Canvas>
  );
};

export default SkillCanvas;

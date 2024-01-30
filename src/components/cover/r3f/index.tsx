import { Canvas, useFrame, useThree } from "@react-three/fiber";

interface CoverThreeProps {
  children: React.ReactNode;
  position?: [number, number, number];
}

const CoverThree: React.FC<CoverThreeProps> = ({ children, position }) => {
  return (
    <Canvas camera={{ position: (position = [0, 0, 1]) }} shadows>
      {children}
    </Canvas>
  );
};

export default CoverThree;

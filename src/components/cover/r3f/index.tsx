import { Canvas, useFrame, useThree } from "@react-three/fiber";

interface CoverThreeProps {
  children: React.ReactNode;
}

const CoverThree: React.FC<CoverThreeProps> = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} shadows>
      {children}
    </Canvas>
  );
};

export default CoverThree;

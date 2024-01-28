import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SkeletonGeometry = () => {
  const myCube = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (myCube.current) {
      myCube.current.rotation.x = clock.getElapsedTime() * 0.06;
      myCube.current.rotation.y = clock.getElapsedTime() * 0.06;
    }
  });
  return (
    <mesh ref={myCube}>
      <icosahedronGeometry args={[0.3]} />
      <meshStandardMaterial
        wireframe={true}
        transparent={true}
        opacity={0.4}
        color={0x000000}
      />
    </mesh>
  );
};

export default SkeletonGeometry;

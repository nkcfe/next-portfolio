import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CubeGeometry = () => {
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
        color={0xffffff}
        roughness={0.9}
        metalness={0.1}
        emissive={"purple"}
        emissiveIntensity={1}
      />
    </mesh>
  );
};

export default CubeGeometry;

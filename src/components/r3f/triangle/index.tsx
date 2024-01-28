import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const TriangleGeometry = () => {
  const triangleRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (triangleRef.current) {
      triangleRef.current.rotation.x = clock.getElapsedTime() * 0.006;
      triangleRef.current.rotation.y = clock.getElapsedTime() * 0.006;
    }
  });

  return (
    <mesh ref={triangleRef}>
      <tetrahedronGeometry args={[0.55]} />
      <meshBasicMaterial
        wireframe={true}
        transparent={true}
        opacity={0.8}
        color={"purple"}
      />
    </mesh>
  );
};

export default TriangleGeometry;

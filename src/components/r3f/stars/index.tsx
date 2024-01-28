import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef, useState } from "react";

const Stars = (props: any) => {
  const ref = useRef<THREE.Group>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(700), { radius: 1.8 })
  );
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 1]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#FEACFF"
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;

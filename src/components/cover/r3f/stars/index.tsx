import { PointMaterial, Points } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { random } from "maath";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

const Stars = (props: any) => {
  const ref = useRef<THREE.Group>(null);
  const { camera } = useThree();

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useEffect(() => {
    gsap.to(camera.position, {
      z: 0.1,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1, // Adjust scrub value as needed
      },
    });
  }, [camera]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import Stars from "./stars";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Controls = () => {
  const { scene, camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      y: 15,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Adjust scrub value as needed
      },
    });
  }, [scene, camera]);

  return null; // You can also use useFrame here if needed
};

const CoverThree = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
      {/* <Controls /> */}
    </Canvas>
  );
};

export default CoverThree;

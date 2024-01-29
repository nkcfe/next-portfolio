import { RoundedBox } from "@react-three/drei";
import React, { useRef, useState } from "react";

interface Props {
  position: number[];
}

const Box = (props: Props) => {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  return (
    <mesh
      {...props}
      castShadow
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <RoundedBox args={[1, 1, 1]} castShadow>
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </RoundedBox>
    </mesh>
  );
};

export default Box;

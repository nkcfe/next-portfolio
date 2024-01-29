import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import CoverThree from "./r3f";
import Overlay from "./Overlay";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Stars from "./r3f/stars";

const Cover = () => {
  return (
    <Base>
      <CoverThree>
        <Stars />
      </CoverThree>
      <Overlay />
    </Base>
  );
};

export default Cover;

const Base = styled.div`
  width: 100%;
  height: 200vh;

  background-color: var(--coverBg-color);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  position: relative;
`;

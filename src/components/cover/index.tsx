import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import CoverThree from "./r3f";
import Overlay from "./Overlay";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Cover = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pageRef = useIntersectionObserver(ref, {});
  const isPageEnd = !!pageRef?.isIntersecting;

  return (
    <Base>
      <CoverThree />
      <Overlay isPageEnd={isPageEnd} />
      <IntersectionContainer ref={ref} />
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

const IntersectionContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  height: 50vh;
`;

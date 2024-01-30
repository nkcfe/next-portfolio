import React, { useRef } from "react";
import styled from "styled-components";
import CardGrid from "./CardGrid";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Skill = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pageRef = useIntersectionObserver(ref, {});
  const isPageInit = !!pageRef?.isIntersecting;
  return (
    <Base>
      <Title>My Skill</Title>
      <CardGrid isPageInit={isPageInit} />
      <ObserverDiv ref={ref} />
    </Base>
  );
};

export default Skill;

const Base = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--skillBg-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Title = styled.div`
  margin-top: 100px;
  color: var(--yellow);
  font-size: 4rem;
  font-weight: 800;
`;

const ObserverDiv = styled.div`
  width: 100%;
  height: 200px;

  position: absolute;
  bottom: 0;
`;

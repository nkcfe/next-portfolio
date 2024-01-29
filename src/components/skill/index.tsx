import React from "react";
import styled from "styled-components";
import CardGrid from "./CardGrid";

const Skill = () => {
  return (
    <Base>
      <CardGrid />
      <Title>My Skill</Title>
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
  justify-content: start;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 100px;
  color: var(--yellow);
  font-size: 4rem;
  font-weight: 800;
`;

import React from "react";
import styled, { keyframes } from "styled-components";
import CoverThree from "../cover/r3f";
import ThreeText from "../cover/r3f/threefont";

const About = () => {
  return (
    <Base>
      <TextContainer>
        <CoverThree>
          <ThreeText />
        </CoverThree>
      </TextContainer>
    </Base>
  );
};

export default About;

const Base = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--aboutBg-color);

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  font-size: 7rem;
  font-weight: 800;
  color: var(--white);
`;

const DescriptionContainer = styled.div`
  text-align: center;
  margin-top: 25px;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--white);
`;

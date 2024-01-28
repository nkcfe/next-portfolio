import React from "react";
import styled, { keyframes } from "styled-components";

const About = () => {
  return (
    <Base>
      <Wrapper>
        <Title>I&apos;m Chul.</Title>
      </Wrapper>
    </Base>
  );
};

export default About;

const gradientAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: 50% 0;
  }
  50% {
    background-position: 90% 0;
  }
  60% {
    background-position: 60%;
  }
  75% {
    background-position: 40%;
  }
  100% {
    background-position: 0 0;
  }
`;

const Base = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--coverBg-color);
  /* 
  align-items: center;
  background-image: linear-gradient(to right, var(--coverBg-color), #00a7cf);
  background-size: 600%;
  background-position: 0 0;
  box-shadow: inset 0 0 5em rgba(0, 0, 0, 0.5);
  animation: ${gradientAnimation} 60s infinite; */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  /* background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px); */
`;

const Title = styled.h1`
  padding-top: 100px;
  width: 100%;
  text-align: center;
`;

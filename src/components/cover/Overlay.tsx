import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Overlay = () => {
  return (
    <Base>
      <TitleContainer>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hi. I&apos;m Chul. <br />
          <span>Frontend Developer.</span>
        </Title>
      </TitleContainer>
    </Base>
  );
};

export default Overlay;

const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const Title = styled(motion.h1)`
  margin: 0;
  padding: 0;
  font-size: 7rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.05em;
  background: linear-gradient(30deg, #c850c0, #ffcc70);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  span {
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: -0.05em;
    background: linear-gradient(30deg, #c850c0, #ffcc70);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

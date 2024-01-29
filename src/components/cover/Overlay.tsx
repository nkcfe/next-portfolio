import { motion, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  isPageEnd: boolean;
}

const Overlay: React.FC<Props> = ({ isPageEnd }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".cover",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
  }, [textRef]);

  return (
    <Base ref={textRef}>
      <TitleContainer>
        <Title
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hi. I&apos;m Chul. <br />
        </Title>
        <SubTitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Frontend Developer.
        </SubTitle>
      </TitleContainer>
    </Base>
  );
};

export default Overlay;

const Base = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const TitleContainer = styled(motion.div)`
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
`;

const SubTitle = styled(motion.h2)`
  margin-top: 1rem;
  font-size: 5rem;
  text-align: center;
  font-weight: 800;
  letter-spacing: -0.05em;
  background: linear-gradient(30deg, #c850c0, #ffcc70);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

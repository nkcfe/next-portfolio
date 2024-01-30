import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import CoverThree from "../cover/r3f";
import ThreeText from "../cover/r3f/threefont";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface Props {
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
}

const About: React.FC<Props> = ({ aboutRef }) => {
  const ref = useRef<HTMLDivElement>(null);
  const pageRef = useIntersectionObserver(ref, {});
  const isPageInit = !!pageRef?.isIntersecting;

  return (
    <Base id="About" ref={aboutRef}>
      <TextContainer>
        <CoverThree position={[0, 0, 0]}>
          <ThreeText />
        </CoverThree>
        <Text>
          <AnimatePresence>
            {isPageInit && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  꾸준한.
                </motion.div>
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  전력을 다하는.
                </motion.div>
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  도전 정신 강한.
                </motion.div>
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  긍정적인 기운의
                </motion.div>
                <motion.div
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  exit={{ opacity: 0 }}
                >
                  개발자가 되겠습니다.
                </motion.div>
                <IconContainer>
                  <LinkContainer
                    href="https://laser-wheel-ad9.notion.site/1e90f8b30e854df4a8daf1733275df5e?pvs=4"
                    target="_blank"
                  >
                    <MotionButton initial={false} whileHover={{ scale: 1.1 }}>
                      Notion
                    </MotionButton>
                  </LinkContainer>
                  <LinkContainer
                    href="https://github.com/nkcfe"
                    target="_blank"
                  >
                    <MotionButton>Github</MotionButton>
                  </LinkContainer>
                </IconContainer>
              </>
            )}
          </AnimatePresence>
        </Text>
      </TextContainer>
      <ObserverDiv ref={ref} />
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

const Text = styled.div`
  position: absolute;
  top: 70%;
  transform: translateY(-60%);
  font-size: 2rem;
  font-weight: 800;
  color: #cdcdcd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const IconContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MotionButton = styled(motion.button)`
  border: none;
  cursor: pointer;
  background-color: gray;
  color: #fff;
  border-radius: 60px;
  outline: none;
  margin: 0;
  padding: 12px 25px;
  font-size: 1.2rem;
  font-weight: 700;

  text-align: center;
  display: inline-flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ObserverDiv = styled.div`
  width: 100%;
  height: 300px;

  position: absolute;
  bottom: 0;
  z-index: -1;
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
`;

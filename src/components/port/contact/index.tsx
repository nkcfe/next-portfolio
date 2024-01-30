import useModal from "@/hooks/useModal";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { PiRobotFill } from "react-icons/pi";

import styled from "styled-components";
import Chat from "./Chat";

const Contact = () => {
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Base
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <PiRobotFill />
      </Base>
      {isHover && <HoverText>Chul Bot을 사용해보세요.</HoverText>}
      {isOpen && <Chat />}
    </>
  );
};

export default Contact;

const Base = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  color: var(--white);
  font-size: 40px;
  border-radius: 100%;

  cursor: pointer;
  background-color: #887be3;
  border: 3px solid transparent;
  &:hover {
    border: 3px solid #cc5eff;
    box-shadow: rgba(232, 117, 255, 0.56) 0px 5px 10px 1px;
  }
`;

const HoverText = styled.div`
  position: absolute;
  right: 70px;

  background: #2f3142;
  border-radius: 5px;

  padding: 10px;

  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  width: 140px;
`;

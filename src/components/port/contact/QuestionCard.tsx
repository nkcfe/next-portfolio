import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  text: string;
  onClick: (text: string, type: "question" | "answer") => void;
  variants: {
    hidden: {
      opacity: number;
      y: number;
    };
    visible: {
      opacity: number;
      y: number;
    };
  };
}

const QuestionCard: React.FC<Props> = ({ text, onClick, variants }) => {
  return (
    <Base variants={variants} onClick={() => onClick(text, "answer")}>
      {text}
    </Base>
  );
};

export default QuestionCard;

const Base = styled(motion.div)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  width: auto;
  min-height: 45px;
  height: auto;

  border-radius: 20px;
  border: 2px solid #887be3;

  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  line-height: 1.5;

  cursor: pointer;
  &:hover {
    background-color: #887be3;
  }
  transition: all 0.3s ease;
`;

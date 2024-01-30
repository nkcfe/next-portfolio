import { motion } from "framer-motion";
import Link from "next/link";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  children: ReactNode;
  type: "question" | "answer" | "blog" | "github" | "resume" | "contact";
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

const ChatCard: React.FC<Props> = ({ children, type, variants }) => {
  return (
    <>
      {type !== "question" && type !== "answer" && type !== "contact" ? (
        <Base $type={type} variants={variants} $isClicked>
          <Link
            href={
              type === "blog"
                ? "https://www.notion.so/1e90f8b30e854df4a8daf1733275df5e?pvs=4"
                : type === "github"
                ? "https://github.com/nkcfe"
                : type === "resume"
                ? "https://laser-wheel-ad9.notion.site/2024-01-19-db40554451194e8e97b4104876a63a62?pvs=4"
                : ""
            }
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            {children}
          </Link>
        </Base>
      ) : type === "contact" ? (
        <CopyToClipboard text={"01028919394"}>
          <Base $type={type} variants={variants} $isClicked>
            {children}
          </Base>
        </CopyToClipboard>
      ) : (
        <Base $type={type} variants={variants}>
          {children}
        </Base>
      )}
    </>
  );
};

export default ChatCard;

const Base = styled(motion.div)<{
  $type: "question" | "answer" | "blog" | "github" | "resume" | "contact";
  $isClicked?: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  width: auto;
  min-height: 45px;
  height: auto;

  border-radius: 15px;

  background-color: #3f4152;

  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  line-height: 1.5;

  ${({ $type }) =>
    $type === "answer" &&
    css`
      margin-left: auto;

      background-color: #7064b9;
    `}

  ${({ $type }) =>
    $type !== "answer" &&
    $type !== "question" &&
    css`
      background-color: #465982;
    `}

  ${({ $isClicked }) =>
    $isClicked &&
    css`
      cursor: pointer;
      &:hover {
        background-color: #627aaf;
      }
    `}
`;

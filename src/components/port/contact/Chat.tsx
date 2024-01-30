import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import chul from "@/assets/chul.png";
import ChatCard from "./ChatCard";
import QuestionCard from "./QuestionCard";
import { useAnimate, stagger } from "framer-motion";

interface Chat {
  text: string;
  type: "question" | "answer" | "blog" | "github" | "resume" | "contact";
}

const Chat = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChat = (text: string, type: "question" | "answer") => {
    if (type === "answer") {
      setIsLoading(true);
      setChats((prev) => [...prev, { text, type }]);
      if (text === "안녕") {
        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            { text: "안녕하세요👋", type: "question" },
          ]);
        }, 500);

        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            { text: "방문해주셔서 감사합니다!", type: "question" },
          ]);
        }, 1000);
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } else if (text === "개인 블로그를 보고싶어.") {
        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            {
              text: "제 블로그에 관심을 가져주셔서 감사합니다 🥹",
              type: "question",
            },
          ]);
        }, 500);

        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            { text: "말풍선을 눌러 블로그로 이동.", type: "blog" },
          ]);
        }, 1000);

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } else if (text === "깃허브를 보고싶어.") {
        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            {
              text: "제 깃허브 관심을 가져주셔서 감사합니다 🥹",
              type: "question",
            },
          ]);
        }, 500);

        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            { text: "말풍선을 눌러 깃허브로 이동.", type: "github" },
          ]);
        }, 1000);

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } else if (text === "이력서를 보고싶어.") {
        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            {
              text: "제 이력서에 관심을 가져주셔서 감사합니다 🥹",
              type: "question",
            },
          ]);
        }, 500);

        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            { text: "말풍선을 눌러 이력서로 이동.", type: "resume" },
          ]);
        }, 1000);

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } else if (text === "철에게 연락하고싶어.") {
        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            {
              text: "오! 저에게 연락하고 싶으시다니 감사합니다 🥹",
              type: "question",
            },
          ]);
        }, 500);

        setTimeout(() => {
          setChats((prev) => [
            ...prev,
            { text: "010-2891-9394 복사하기", type: "contact" },
          ]);
        }, 1000);

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    }
  };

  return (
    <Base
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -80 }}
      exit={{ opacity: 0, y: 0 }}
    >
      <Header>
        <Profile src={chul} alt="철" />
        <TextContainer>
          <h1>Chul Bot</h1>
          <span>Ask me a question</span>
        </TextContainer>
      </Header>
      <Body ref={chatContainerRef}>
        <QuestionContainer
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <ChatCard variants={variants} type="question">
            안녕하세요
          </ChatCard>
          <ChatCard variants={variants} type="question">
            저는 철 봇이에요. 무엇이든 질문해주세요.
          </ChatCard>
          <ChatCard variants={variants} type="question">
            무엇을 도와드릴까요?
          </ChatCard>

          {chats.map((chat) => (
            <ChatCard key={chat.text} variants={variants} type={chat.type}>
              {chat.text}
            </ChatCard>
          ))}
        </QuestionContainer>
        {!isLoading && (
          <QuestionContainer
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <QuestionCard
              variants={variants}
              onClick={handleChat}
              text="안녕"
            />
            <QuestionCard
              variants={variants}
              onClick={handleChat}
              text="개인 블로그를 보고싶어."
            />
            <QuestionCard
              variants={variants}
              onClick={handleChat}
              text="깃허브를 보고싶어."
            />
            <QuestionCard
              variants={variants}
              onClick={handleChat}
              text="이력서를 보고싶어."
            />
            <QuestionCard
              variants={variants}
              onClick={handleChat}
              text="철에게 연락하고싶어."
            />
          </QuestionContainer>
        )}
      </Body>
    </Base>
  );
};

export default Chat;

const Base = styled(motion.div)`
  box-sizing: border-box;
  position: fixed;
  bottom: 20px;
  right: 10px;

  width: 350px;
  height: 600px;

  background-color: rgba(44, 44, 44, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 15px;
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;

  padding: 0 15px;

  background: #2f3142;
  height: 70px;

  border-radius: 15px 15px 0 0;
`;

const Profile = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;

const TextContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  h1 {
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
  }
  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
  }
`;

const Body = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  gap: 5px;

  width: 100%;
  height: calc(100% - 70px);

  overflow-y: scroll;
  padding: 10px;
`;

const QuestionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 5px;

  width: 100%;
`;

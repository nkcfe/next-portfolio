import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { IoClose } from "react-icons/io5";
import shareBlogImage from "@/assets/share_blog.png";

interface Props {
  handleClose: () => void;
}

const ShareBlogModal: React.FC<Props> = ({ handleClose }) => {
  return (
    <>
      <Base>
        <Title>Share Blog</Title>
        <Date>2023.11 ~ 2023.11 (1주)</Date>
        <ImageContainer src={shareBlogImage} alt="nextMap" />

        <BodyContainer>
          <SubTitle>프로젝트 간단 설명</SubTitle>
          <Text>JWT 토큰과 인증 학습용 토이프로젝트</Text>
        </BodyContainer>

        <BodyContainer>
          <SubTitle>기술 선정</SubTitle>
          <Text>Redux-toolkit : Redux대비 보일러코드 감소, 빠른 구현 가능</Text>
          <Text>
            styled-components : CSS in Js 학습용으로 선택, 재사용성 향상
          </Text>

          <BodyContainer>
            <SubTitle>역할 (참여도 100%)</SubTitle>
            <Text>JSON Server와 JWT 토큰을 활용한 인증 세션 구현</Text>
            <Text>Styled-components를 활용한 스타일링</Text>
            <Text>Redux-toolkit을 이용한 미들웨어 활용</Text>
            <Text>Axios를 활용한 api통신</Text>
            <Text>정규식을 이용한 유효성 검사</Text>
          </BodyContainer>
        </BodyContainer>
        <Footer
          siteLink="https://bulletin-board-gules.vercel.app/login"
          blogLink="https://laser-wheel-ad9.notion.site/Share-Blog-lv4-lv5-0ff5812b35f8494d9ca78b9dad546c32?pvs=4"
          githubLink="https://github.com/nkcfe/share_blog.git"
        />
      </Base>
      <CloseBtn onClick={handleClose}>
        <IoClose />
      </CloseBtn>
    </>
  );
};

export default ShareBlogModal;

const Base = styled.div`
  box-sizing: border-box;
  padding: 60px 0;
  width: 1200px;
  max-height: 80vh;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #e5beff;
`;

const Date = styled.div`
  margin-top: 30px;
  font-size: 1rem;
  font-weight: 600;
  color: #e5beff;
`;

const ImageContainer = styled(Image)`
  margin-top: 20px;
  border-radius: 15px;
  width: 600px;
  height: 400px;
  object-fit: cover;
`;

const BodyContainer = styled.div`
  margin-top: 40px;
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const SubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #e5beff;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #fff1f1;
  margin-bottom: 10px;
`;

const CloseBtn = styled.div`
  position: fixed;
  top: 110px;
  right: 110px;

  width: 35px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  svg {
    font-size: 2rem;
    color: #bc58ff;
  }

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);

  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  transition: all 0.3s ease-in-out;
`;

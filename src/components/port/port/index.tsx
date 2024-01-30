import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import port from "@/assets/port_image.png";
import Footer from "../Footer";
import { IoClose } from "react-icons/io5";

interface Props {
  handleClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const PortModal: React.FC<Props> = ({ handleClose }) => {
  return (
    <>
      <Base>
        <Title>포트폴리오 웹사이트</Title>
        <Date>2023.01.27 ~ 진행중</Date>
        <ImageContainer src={port} alt="omo" />

        <BodyContainer>
          <SubTitle>프로젝트 간단 설명</SubTitle>
          <Text>포트폴리오용 웹사이트</Text>
          <Text>현재 보고 계신 웹사이트입니다!</Text>
          <Text>개발 진행중인 웹사이트입니다.</Text>
        </BodyContainer>

        <BodyContainer>
          <SubTitle>기술 선정</SubTitle>
          <Text>Next.js</Text>
          <Text>Three.js</Text>
          <Text>Framer Motion</Text>

          <BodyContainer>
            <SubTitle>주요 구현</SubTitle>
            <Text>Next.js를 활용한 사이트 구현</Text>
            <Text>Three.js를 활용한 3D 모델링 구현</Text>
            <Text>gsap을 활용한 스크롤 애니메이션 구현</Text>
            <Text>Framer motion을 활용한 애니메이션 구현</Text>
            <Text>챗봇 엔터테인먼트 요소 추가</Text>
          </BodyContainer>
        </BodyContainer>
        <Footer
          siteLink="https://chul-portfolio.vercel.app/"
          blogLink="https://laser-wheel-ad9.notion.site/8a480f8ef3794841813267a17df7b73c?pvs=4"
          githubLink="https://github.com/nkcfe/next-portfolio.git"
        />
        <CloseBtn onClick={handleClose}>
          <IoClose />
        </CloseBtn>
      </Base>
    </>
  );
};

export default PortModal;

const Base = styled.div`
  box-sizing: border-box;
  padding: 60px 0;
  width: 1100px;
  max-height: 80vh;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  overflow-y: scroll;

  position: relative;
  @media only screen and (max-width: 600px) {
    width: 400px;
  }

  @media only screen and (min-width: 600px) {
    width: 500px;
  }

  @media only screen and (min-width: 768px) {
    width: 650px;
  }

  @media only screen and (min-width: 1200px) {
    width: 1100px;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 900;
  color: #becdff;
`;

const Date = styled.div`
  margin-top: 30px;
  font-size: 1rem;
  font-weight: 600;
  color: #a5baff;
`;

const ImageContainer = styled(Image)`
  margin-top: 20px;
  border-radius: 15px;
  width: 600px;
  height: 400px;
  object-fit: cover;
  @media only screen and (max-width: 600px) {
    width: 350px;
    height: 150px;
  }

  @media only screen and (min-width: 600px) {
    width: 450px;
    height: 200px;
  }

  @media only screen and (min-width: 768px) {
    width: 600px;
    height: 300px;
  }
`;

const BodyContainer = styled.div`
  margin-top: 40px;
  width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media only screen and (max-width: 600px) {
    width: 350px;
  }

  @media only screen and (min-width: 600px) {
    width: 450px;
  }

  @media only screen and (min-width: 768px) {
    width: 600px;
  }
`;

const SubTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: #becdff;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #fff1f1;
  margin-bottom: 10px;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 35px;
  height: 35px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  svg {
    font-size: 2rem;
    color: #577eff;
  }

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);

  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
  transition: all 0.3s ease-in-out;
`;

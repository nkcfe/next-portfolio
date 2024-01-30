import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import omo from "@/assets/omo_image.png";
import Footer from "../Footer";
import { IoClose } from "react-icons/io5";

interface Props {
  handleClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const OmoModal: React.FC<Props> = ({ handleClose }) => {
  return (
    <>
      <Base>
        <Title>오모 ( Omo )</Title>
        <Date>2023.12 ~ 2024.01 (6주)</Date>
        <ImageContainer src={omo} alt="omo" />

        <BodyContainer>
          <SubTitle>프로젝트 간단 설명</SubTitle>
          <Text>오늘 뭘 하면 좋을까? 고민할 때 찾고싶은 웹 서비스</Text>
          <Text>지도 현위치 기반 장소 찾기 웹사이트</Text>
          <Text>피드 형식의 sns 웹사이트</Text>
        </BodyContainer>

        <BodyContainer>
          <SubTitle>기술 선정</SubTitle>
          <Text>
            Vite : Esbuil 기반 사전 번들링으로 Webpack 대비 최소 10개 빠른 속도,
            빌드 시간 감소
          </Text>
          <Text>
            Typescript : 런타임 오류 사전 방지, 코드 가독성 및 안정성 향상
          </Text>
          <Text>
            React-Query : 네트워크 데이터 캐싱으로 성능 효율적, devtools로
            디버깅 용이
          </Text>
          <Text>
            Styled-components : 컴포넌트 스타일링으로 컴포넌트 재사용성 향상
          </Text>
          <Text>
            Zustand : 상태 관리 라이브러리로 Redux 대비 코드량 감소, 프로젝트
            규모와 적합하다고 판단.
          </Text>
          <Text>
            Framer-motion : 모션 라이브러리로 애니메이션 효과 적용, GPU가속으로
            성능 최적화
          </Text>

          <BodyContainer>
            <SubTitle>역할 (참여도 90%)</SubTitle>
            <Text>전체 스타일링 및 애니메이션 구현</Text>
            <Text>카카오 api 및 구글 api를 활용한 지도 페이지 구현</Text>
            <Text>
              react query와 intersection observer를 이용한 무한스크롤 구현
            </Text>
            <Text>Zustand를 이용한 전역 상태관리</Text>
            <Text>Framer motion을 활용한 드롭다운 및 버튼 애니메이션 구현</Text>
            <Text>Optimistic Update를 활용한 좋아요 구현</Text>
            <Text>React Helmet을 활용한 SEO 최적화</Text>
          </BodyContainer>

          <BodyContainer>
            <SubTitle>주요 개선점</SubTitle>
            <Text>가상화 리스트를 활용한 긴 리스트 최적화</Text>
            <Text>폰트 최적화 - subset적용, preload, woff2</Text>
            <Text>배너 이미지 webp형식 적용, resize 적용, cdn 적용</Text>
            <Text>코드 스플리팅 적용</Text>
            <Text>debounce를 활용한 검색 최적화</Text>
          </BodyContainer>
        </BodyContainer>
        <Footer
          siteLink="https://omo.yoonyoung.site/"
          blogLink="https://laser-wheel-ad9.notion.site/OMO-a70b39678b2043c78c17c6bb9989da08?pvs=4"
          githubLink="https://github.com/Team-Omo/team-Omo-FE.git"
        />
        <CloseBtn onClick={handleClose}>
          <IoClose />
        </CloseBtn>
      </Base>
    </>
  );
};

export default OmoModal;

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

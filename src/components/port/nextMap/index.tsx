import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { IoClose } from "react-icons/io5";
import nextMapImage from "@/assets/next_map_image.png";

interface Props {
  handleClose: () => void;
}

const NextMapModal: React.FC<Props> = ({ handleClose }) => {
  return (
    <>
      <Base>
        <Title>넥스트맵 ( NextMap )</Title>
        <Date>2024.01 ~ 2024.01 (1주)</Date>
        <ImageContainer src={nextMapImage} alt="nextMap" />

        <BodyContainer>
          <SubTitle>프로젝트 간단 설명</SubTitle>
          <Text>지도 기반 맛집 추천 사이트</Text>
          <Text>Next.js 학습용 토이 프로젝트</Text>
        </BodyContainer>

        <BodyContainer>
          <SubTitle>기술 선정</SubTitle>
          <Text>
            Next.js : SSR, SSG, CSR을 지원하는 React 프레임워크로 SEO 최적화
            가능
          </Text>
          <Text>
            Typescript : 런타임 오류 사전 방지, 코드 가독성 및 안정성 향상
          </Text>
          <Text>
            React-Query : 네트워크 데이터 캐싱으로 성능 효율적, devtools로
            디버깅 용이
          </Text>
          <Text>
            Tailwind CSS : Utility-first CSS로 반응형 웹 구현 용이, 코드량 감소,
            빠른 구현
          </Text>
          <Text>Recoil : 상태 관리 라이브러리로 Redux 대비 코드량 감소</Text>
          <Text>
            Prisma : ORM으로 데이터베이스 접근 용이, 코드량 감소, 빠른 구현
          </Text>
          <Text>
            Supabase : 오픈소스 서버리스 플랫폼, 데이터베이스 및 인증 기능 제공
          </Text>

          <BodyContainer>
            <SubTitle>역할 (참여도 100%)</SubTitle>
            <Text>Next.js App route, Page route 차이점 학습 및 구현</Text>
            <Text>Next Auth를 활용한 소셜 로그인 (구글, 네이버, 카카오)</Text>
            <Text>Tailwind 스타일링 학습 및 전체적 구현</Text>
            <Text>Prisma를 활용한 간단한 CRUD 구현 및 Supabase와 연동</Text>
            <Text>Recoil을 활용한 전역상태 관리</Text>
          </BodyContainer>
        </BodyContainer>
        <Footer
          siteLink="https://next-map-eight.vercel.app/"
          blogLink="https://laser-wheel-ad9.notion.site/1-207f167f89354b4dab4e1b9fbf2c9a9e?pvs=4"
          githubLink="https://github.com/nkcfe/next-map"
        />
      </Base>
      <CloseBtn onClick={handleClose}>
        <IoClose />
      </CloseBtn>
    </>
  );
};

export default NextMapModal;

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

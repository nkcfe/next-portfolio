import React from "react";
import styled, { keyframes } from "styled-components";
import Card from "./Card";
import useModal from "../../hooks/useModal";

import OmoModal from "./omo";
import NextMapModal from "./nextMap";
import ShareBlogModal from "./shareBlog";

import omoLogo from "@/assets/omo_logo.png";
import nextMapLogo from "@/assets/next_map_logo.png";
import jwtLogo from "@/assets/jwt.jpg";
import logo from "@/assets/logo.png";
import PortModal from "./port";

interface Props {
  portRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Port: React.FC<Props> = ({ portRef }) => {
  const {
    isOpen: omoOpen,
    handleOpen: omoHandleOpen,
    handleClose: omoHandleClose,
  } = useModal();

  const {
    isOpen: nextMapOpen,
    handleOpen: nextMapHandleOpen,
    handleClose: nextMapHandleClose,
  } = useModal();

  const {
    isOpen: shareBlogOpen,
    handleOpen: shareBlogHandleOpen,
    handleClose: shareBlogHandleClose,
  } = useModal();

  const {
    isOpen: portOpen,
    handleOpen: portHandleOpen,
    handleClose: portHandleClose,
  } = useModal();

  return (
    <Base id="Port" ref={portRef}>
      <Wrapper>
        <Title>Portpolio.</Title>
        <CardContainer>
          <Card
            title="포트폴리오 웹사이트"
            subTitle="Next.js, Three.js 활용 웹사이트"
            image={logo}
            modalCoponent={<PortModal handleClose={portHandleClose} />}
            isOpen={portOpen}
            handleOpen={portHandleOpen}
          />
          <Card
            title="넥스트맵 ( NextMap )"
            subTitle="지도 기반 맛집 추천 사이트"
            image={nextMapLogo}
            modalCoponent={<NextMapModal handleClose={nextMapHandleClose} />}
            isOpen={nextMapOpen}
            handleOpen={nextMapHandleOpen}
          />
          <Card
            title="오모 ( OMO )"
            subTitle="위치 기반 장소 추천 사이트"
            image={omoLogo}
            modalCoponent={<OmoModal handleClose={omoHandleClose} />}
            isOpen={omoOpen}
            handleOpen={omoHandleOpen}
          />
          <Card
            title="Share Blog"
            subTitle="JWT 인증 기반 블로그 사이트"
            image={jwtLogo}
            modalCoponent={
              <ShareBlogModal handleClose={shareBlogHandleClose} />
            }
            isOpen={shareBlogOpen}
            handleOpen={shareBlogHandleOpen}
          />
        </CardContainer>
      </Wrapper>
    </Base>
  );
};

export default Port;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Base = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(-45deg, #3b0653, #135b75, #16846a);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 60s ease infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  padding-bottom: 50px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 200px;
  font-size: 6.5rem;
  font-weight: 800;
  color: #8fdbc2;
  opacity: 0.9;

  @media only screen and (max-width: 600px) {
    font-size: 5.5rem;
  }
`;

const CardContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  max-width: 800px;
  width: 100%;

  gap: 30px;
`;

import React, { useRef } from "react";
import styled from "styled-components";
import CoverThree from "./r3f";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Base>
      <CoverThree />
      <Title>남궁철의 포트폴리오입니다.</Title>
    </Base>
  );
};

export default Header;

const Base = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--coverBg-color);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  position: relative;
`;

const Title = styled.div`
  position: absolute;
  font-size: 7rem;
  font-weight: 700;
  bottom: 20%;
  left: 5%;
`;

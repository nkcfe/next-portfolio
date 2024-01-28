import React, { useRef } from "react";
import styled from "styled-components";
import { PerspectiveCamera } from "three";
import Cube from "./r3f/Cube";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Base>
      <Cube />
    </Base>
  );
};

export default Header;

const Base = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--black);

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
`;

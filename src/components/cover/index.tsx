import React, { useRef } from "react";
import styled from "styled-components";
import CoverThree from "./r3f";
import Overlay from "./Overlay";

const Cover = () => {
  return (
    <Base>
      <CoverThree />
      <Overlay />
    </Base>
  );
};

export default Cover;

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

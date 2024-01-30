import React, { ReactNode } from "react";
import styled from "styled-components";

const SendCard = ({ children }: { children: ReactNode }) => {
  return <Base>{children}</Base>;
};

export default SendCard;

const Base = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0 15px;

  width: auto;
  min-height: 45px;
  height: auto;
  margin-left: auto;
  margin-right: 20px;

  border-radius: 15px;

  background-color: #887be3;

  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  line-height: 1.5;
`;

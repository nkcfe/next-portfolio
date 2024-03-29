"use client";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import "./font.css";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
  --mainEng-font: "Montserrat";
  --mainKor-font: "nanumSquareNeo";
  --mainNum-font: "gmarket";
  --wanted-font: "Wanted Sans Variable"

  --mainBg-color: #f3ede8;
  --coverBg-color: #12071E;
  --subBg100: #cdc0b1;
  --subBg200: #afa395;
  --subBg300: #81887c;
  --subBg400: #afa7a2;
  --subBg500: #a6afa2;

  --white: #fff;
  --black: #000;
  --black100: #2b2b2b;
  --black200: #434343;
  --black300: #686868;
  --black400: #e0e0e0;

  font-family: Wanted Sans Variable;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  scroll-behavior: smooth;
  box-sizing: border-box;
  
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  @media (max-width: 800px) {
      font-size: 14px;
      line-height: 1.4;
  }
}
`;

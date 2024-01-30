"use client";

import Port from "@/components/port";

import Skill from "@/components/skill";

import React from "react";
import { GlobalStyle } from "@/styles/globalStyles";
import "@/styles/var.scss";
import Cover from "@/components/cover";
import Header from "@/components/Header";
import About from "@/components/about";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <>
        <Cover />
        <About />
        <Skill />
        <Port />
      </>
    </>
  );
};

export default Home;

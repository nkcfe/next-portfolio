"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Port from "@/components/Port";
import Site from "@/components/Site";
import Skill from "@/components/skill";
import Skip from "@/components/Skip";
import React, { useEffect } from "react";
import { GlobalStyle } from "@/styles/globalStyles";
import "@/styles/var.scss";
import { smooth } from "@/utils/lenis";
import { link } from "@/utils/link";
import Cover from "@/components/cover";
import Header from "@/components/Header";
import About from "@/components/about";

const Home = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <>
        <Cover />
        <About />
        <Skill />
        <Intro />
        <Site />
        <Port />
        <Contact />
      </>
      <Footer />
    </>
  );
};

export default Home;

"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Port from "@/components/Port";
import Site from "@/components/Site";
import Skill from "@/components/Skill";
import Skip from "@/components/Skip";
import React, { useEffect } from "react";
import { GlobalStyle } from "@/styles/globalStyles";
import "@/styles/var.scss";
import { smooth } from "@/utils/lenis";
import { link } from "@/utils/link";
import Cover from "@/components/cover";
import Header from "@/components/Header";
import About from "@/components/About";

const Home = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Skip />
      <Header />
      <>
        <Cover />
        <About />
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </>
      <Footer />
    </>
  );
};

export default Home;

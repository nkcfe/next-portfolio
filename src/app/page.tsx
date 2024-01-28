"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Port from "@/components/Port";
import Site from "@/components/Site";
import Skill from "@/components/Skill";
import Skip from "@/components/Skip";
import React, { useEffect } from "react";
import { GlobalStyle } from "@/styles/globalStyles";
import "@/styles/var.scss";
import { lenis } from "@/utils/lenis";
import { link } from "@/utils/link";

const Home = () => {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Skip />
      <Header />
      <main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;

"use client";
import Port from "@/components/port";
import Skill from "@/components/skill";

import React, { Suspense, useRef } from "react";
import { GlobalStyle } from "@/styles/globalStyles";
import "@/styles/var.scss";
import Cover from "@/components/cover";
import Header from "@/components/Header";
import About from "@/components/about";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import Contact from "@/components/port/contact";

const Home = () => {
  const coverRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const portRef = useRef<HTMLDivElement>(null);

  const coverObserver = useIntersectionObserver(coverRef, {});
  const aboutObserver = useIntersectionObserver(aboutRef, {});
  const skillObserver = useIntersectionObserver(skillRef, {});
  const portObserver = useIntersectionObserver(portRef, {});

  const isCoverOn = !!coverObserver?.isIntersecting;
  const isAboutOn = !!aboutObserver?.isIntersecting;
  const isSkillOn = !!skillObserver?.isIntersecting;
  const isPortOn = !!portObserver?.isIntersecting;

  return (
    <>
      <GlobalStyle />
      <Header
        isCoverOn={isCoverOn}
        isAboutOn={isAboutOn}
        isSkillOn={isSkillOn}
        isPortOn={isPortOn}
      />
      <>
        <Cover coverRef={coverRef} />
        <About aboutRef={aboutRef} />
        <Skill skillRef={skillRef} />
        <Port portRef={portRef} />
        <Contact />
      </>
    </>
  );
};

export default Home;

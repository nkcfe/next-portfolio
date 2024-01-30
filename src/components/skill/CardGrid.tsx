import React from "react";
import styled from "styled-components";
import IconCard from "./IconCard";
import { FaCss3Alt, FaHtml5, FaReact, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiStyledcomponents,
  SiTailwindcss,
  SiRedux,
  SiRecoil,
  SiNextdotjs,
  SiChakraui,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandSass } from "react-icons/tb";
import { RiBearSmileFill } from "react-icons/ri";

interface Props {
  isPageInit: boolean;
}

const CardGrid: React.FC<Props> = ({ isPageInit }) => {
  return (
    <Base>
      <ColumnFlex $isMarginOn>
        <IconCard icon={<FaHtml5 />} color={"#E34F26"} title="HTML" />
      </ColumnFlex>
      <ColumnFlex>
        <IconCard icon={<FaCss3Alt />} color={"#1572B6"} title="CSS" />
        <IconCard icon={<SiJavascript />} color={"#F7DF1E"} title="JS" />
      </ColumnFlex>
      <ColumnFlex $isMarginOn>
        <IconCard icon={<SiTypescript />} color={"#3178C6"} title="TS" />
        <IconCard
          icon={<SiStyledcomponents />}
          color={"#DB7093"}
          title="Styled"
        />
        <IconCard
          icon={<SiTailwindcss />}
          color={"#06B6D4"}
          title="Tailwinds"
        />
      </ColumnFlex>
      <ColumnFlex>
        <IconCard icon={<SiChakraui />} color={"#319795"} title="Chakra" />
        <IconCard icon={<TbBrandSass />} color={"#CC6699"} title="Sass" />
        <IconCard
          icon={<TbBrandFramerMotion />}
          color={"#0055FF"}
          title="Motion"
        />
        <IconCard icon={<SiRedux />} color={"#764ABC"} title="Redux" />
      </ColumnFlex>
      <ColumnFlex $isMarginOn>
        <IconCard icon={<SiRecoil />} color={"#3578E5"} title="Recoil" />
        <IconCard
          icon={<RiBearSmileFill />}
          color={"#D3002D"}
          title="Zustand"
        />
        <IconCard icon={<SiNextdotjs />} color={"#000000"} title="Next.js" />
      </ColumnFlex>
      <ColumnFlex>
        <IconCard icon={<SiRedux />} color={"#764ABC"} title="Chakra" />
        <IconCard icon={<FaGithub />} color={"#181717"} title="Github" />
      </ColumnFlex>
      <ColumnFlex $isMarginOn>
        <IconCard icon={<FaReact />} color={"#61DAFB"} title="React" />
      </ColumnFlex>
    </Base>
  );
};

export default CardGrid;

const Base = styled.div`
  width: 100%;
  padding-top: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 15px;
`;

const ColumnFlex = styled.div<{ $isMarginOn?: boolean }>`
  margin-top: ${({ $isMarginOn }) => ($isMarginOn ? "30px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

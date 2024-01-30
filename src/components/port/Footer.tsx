import React from "react";
import styled from "styled-components";
import { FaLink } from "react-icons/fa";
import { FaBloggerB } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import Link from "next/link";

interface Props {
  siteLink: string;
  blogLink: string;
  githubLink: string;
}

const Footer = (props: Props) => {
  const { siteLink, blogLink, githubLink } = props;
  return (
    <Base>
      <Title>🔥포트폴리오 관련 링크</Title>
      <BoxContainer>
        <LinkContainer href={siteLink} target="_blank">
          <Box>
            <FaLink />
            <span>site</span>
          </Box>
        </LinkContainer>
        <LinkContainer href={blogLink} target="_blank">
          <Box>
            <FaBloggerB />
            <span>blog</span>
          </Box>
        </LinkContainer>
        <LinkContainer href={githubLink} target="_blank">
          <Box>
            <PiGithubLogoFill />
            <span>github</span>
          </Box>
        </LinkContainer>
      </BoxContainer>
    </Base>
  );
};

export default Footer;

const Base = styled.div`
  @media only screen and (max-width: 600px) {
    width: 360px;
  }

  @media only screen and (min-width: 600px) {
    width: 400px;
  }

  @media only screen and (min-width: 768px) {
    width: 600px;
  }

  @media only screen and (min-width: 1200px) {
    width: 600px;
  }
  box-sizing: border-box;

  margin-top: 50px;
  padding: 30px;

  width: 600px;
  min-height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 2px solid #b0ffd6;
  border-radius: 15px;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

const BoxContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: #fff;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  span {
    font-size: 0.8rem;
  }
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
`;

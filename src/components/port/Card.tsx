import Image, { StaticImageData } from "next/image";
import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

interface Props {
  title: string;
  subTitle: string;
  image: StaticImageData;
  modalCoponent: ReactNode;
  isOpen: boolean;
  handleOpen: () => void;
}

const Card = (props: Props) => {
  const { title, subTitle, image, modalCoponent, isOpen, handleOpen } = props;

  return (
    <>
      <Base onClick={handleOpen}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <ImageContainer src={image} alt={title} />
      </Base>
      <Modal isOpen={isOpen}>{modalCoponent}</Modal>
    </>
  );
};

export default Card;

const Base = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  border: 1px solid #5f8065;
  border-radius: 15px;

  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  width: 100%;
  height: 80px;

  padding: 30px;

  position: relative;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  transition: all 0.3s ease;
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: #8fdcc2;
`;

const SubTitle = styled.div`
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 600;
  color: #d4ede4;
`;

const ImageContainer = styled(Image)`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);

  width: 70px;
  height: 70px;
  border-radius: 100%;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.2);
`;

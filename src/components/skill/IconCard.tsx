import React from "react";
import styled from "styled-components";

interface Props {
  icon: React.ReactNode;
  color: string;
  title: string;
}

const IconCard = (props: Props) => {
  const { icon, color, title } = props;
  return (
    <Base $color={color}>
      {icon}
      <span>{title}</span>
    </Base>
  );
};

export default IconCard;

interface BedgeProps {
  $color: string;
}

const Base = styled.div<BedgeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  font-size: 40px;
  color: white;
  border-radius: 15px;
  background-color: ${(props) => props.$color};

  box-shadow: rgba(179, 146, 240, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  span {
    font-size: 10px;
    font-weight: bold;
  }

  @media only screen and (max-width: 600px) {
    width: 45px;
    height: 45px;
    font-size: 23px;
    border-radius: 10px;
    gap: 3px;
    span {
      font-size: 8px;
      font-weight: bold;
    }
  }
`;

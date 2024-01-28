import React, { useState } from "react";
import styled, { css } from "styled-components";

const list = ["Intro", "About", "Skill", "Port", "Contact"];

const Header = () => {
  const [selected, setSelected] = useState("Intro");

  const handleSelect = (item: string) => {
    setSelected(item);
  };

  return (
    <Base>
      <UlContainer>
        {list.map((item) => (
          <LiContainer key={item} onClick={() => handleSelect(item)}>
            {item}
          </LiContainer>
        ))}
        <Hover $selectedItem={selected} />
      </UlContainer>
    </Base>
  );
};

export default Header;

const Base = styled.div`
  position: fixed;

  top: 10px;
  left: 50%;
  transform: translateX(-50%);

  width: 400px;

  height: 50px;

  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);

  z-index: 100;
  padding: 0 20px;
`;

const UlContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

const LiContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;

  width: 70px;
  height: 30px;
  font-weight: 600;

  border-radius: 50px;

  color: var(--white);
  cursor: pointer;
`;

const Hover = styled.div<{ $selectedItem: string }>`
  width: 70px;
  height: 30px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;

  ${({ $selectedItem }) => {
    const index = list.indexOf($selectedItem);
    const leftPosition = index * 82.5;
    return `left: ${leftPosition}px;`;
  }}

  transition: left 0.3s ease-in-out;
`;

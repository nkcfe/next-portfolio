import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const list = ["Intro", "About", "Skill", "Port"];

interface Props {
  isCoverOn: boolean;
  isAboutOn: boolean;
  isSkillOn: boolean;
  isPortOn: boolean;
}

const Header: React.FC<Props> = ({
  isCoverOn,
  isAboutOn,
  isSkillOn,
  isPortOn,
}) => {
  const [selected, setSelected] = useState("Intro");

  useEffect(() => {
    if (isCoverOn) {
      setSelected("Intro");
    } else if (isAboutOn) {
      setSelected("About");
    } else if (isSkillOn) {
      setSelected("Skill");
    } else if (isPortOn) {
      setSelected("Port");
    }
  }, [isAboutOn, isCoverOn, isPortOn, isSkillOn]);

  const handleSelect = (item: string) => {
    setSelected(item);
    const targetElement = document.querySelector(`#${item}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

  width: 350px;

  height: 50px;

  border-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);

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
    const leftPosition = index * 93;
    return `left: ${leftPosition}px;`;
  }}

  transition: left 0.3s ease-in-out;
`;

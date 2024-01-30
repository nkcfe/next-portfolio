import React, { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  const handleClose = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
    console.log(isOpen);
  };

  return { isOpen, handleOpen, handleClose };
};

export default useModal;

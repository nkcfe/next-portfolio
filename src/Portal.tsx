import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal: React.FC<Props> = ({ children }) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("modal-root"));
  }, []);

  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(children, element);
};

export default Portal;

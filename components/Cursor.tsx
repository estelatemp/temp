import { useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";

const StyledCursor = styled.div`
  position: absolute;
  background-color: red;
  border: 5px solid #d5e7f0;
  height: 50px;
  width: 50px;
  /* z-index: 1; */

  /* &::after {
    content: "WORDS";
  } */
`;

export default function Cursor() {
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  const [positionX, setPositionX] = useState(-100);
  const [positionY, setPositionY] = useState(-100);

  const addEventListeners = () => {
    document.addEventListener("mousemove", (e) => onMouseHover(e));
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", () => onMouseHover(null));
  };

  const onMouseHover = (e) => {
    setPositionX(e.pageX);
    setPositionY(e.pageY);
  };

  const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
  };

  if (typeof navigator !== "undefined" && isMobile()) return null;

  return (
    <StyledCursor
      style={{
        top: `${positionY}px`,
        left: `${positionX}px`,
      }}
    />
  );
}

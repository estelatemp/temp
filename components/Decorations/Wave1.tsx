import styled from "styled-components";
import anime from "animejs";
import { useEffect } from "react";
import { randomColor } from "../../style";

const Svg = styled.svg`
  position: absolute;
  left: -35vw;
  top: -70vh;
  opacity: 0.2;
  width: 100vw;
`;

export default function Wave1() {
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    let wave = document.querySelector("#wave1");
    wave.addEventListener("click", (e) => onClick(e));
    wave.addEventListener("mouseover", (e) => onMouseover(e));
    wave.addEventListener("mouseout", (e) => onMouseout(e));
  };

  const removeEventListeners = () => {
    let wave = document.querySelector("#wave1");
    wave.removeEventListener("click", (e) => onClick(e));
    wave.removeEventListener("mouseover", (e) => onMouseover(e));
    wave.removeEventListener("mouseout", (e) => onMouseout(e));
  };

  const onMouseover = (e) => {
    anime({
      targets: "#wave1",
      easing: "easeInOutSine",
      duration: 700,
      scale: 1.025,
    });
  };

  const onMouseout = (e) => {
    anime({
      targets: "#wave1",
      easing: "easeInOutSine",
      duration: 1000,
      scale: 1,
    });
  };

  const onClick = (e) => {
    anime({
      targets: "#wave1",
      easing: "easeInOutSine",
      duration: 500,
      fill: randomColor(),
    });
  };

  return (
    <Svg viewBox="0 0 1968 2118" xmlns="http://www.w3.org/2000/svg">
      <path
        id="wave1"
        fill="#2ec4b6"
        d="M1389.06 490.31C1196.78 387.487 1325.24 49.2376 1111.56 5.80995C864.786 -44.3437 1024.57 343.585 784 418C678.725 450.564 450.997 277.367 366 347.5C221.079 467.076 563.418 579.955 475.5 746C354.943 973.69 -79.8594 709.83 14.0578 990.31C90.3496 1218.15 365.554 1038.39 444 1265.5C521.097 1488.71 142.567 1488.33 272.058 1685.81C399.3 1879.86 564.963 1659.17 749 1800.5C922.76 1933.94 921 2109 1155 2054.5C1389 2000 1262.02 1787.06 1389.06 1638.81C1516.09 1490.56 1762.57 1728.34 1885.06 1576.31C2044.72 1378.15 1583.43 1244.24 1600.06 990.31C1614.75 766.035 2021.68 668.77 1885.06 490.31C1767.31 336.508 1559.87 581.652 1389.06 490.31Z"
      />
    </Svg>
  );
}

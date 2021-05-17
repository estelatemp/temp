import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Svg = styled.svg`
  max-width: 150px;
`;

const IconContainer = styled(motion.div)`
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  width: 130px;
  left: 65vw;
  top: 20vh;
`;

export default function Email({ href }) {
  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const router = useRouter();

  const addEventListeners = () => {
    let emailButton = document.querySelector("#mail");
  };

  const removeEventListeners = () => {
    let emailButton = document.querySelector("#mail");
  };

  const onMouseover = (e) => {
    // anime({
    //   targets: "#mail",
    //   easing: "easeInOutSine",
    //   duration: 700,
    //   scale: 1.025,
    // });
  };

  const onMouseout = (e) => {
    // anime({
    //   targets: "#mail",
    //   easing: "easeInOutSine",
    //   duration: 1000,
    //   scale: 1,
    // });
  };

  const onClick = (e) => {
    // anime({
    //   targets: "#mail",
    //   easing: "easeInOutSine",
    //   duration: 500,
    //   fill: randomColor(),
    // });
  };

  return (
    <IconContainer
      drag
      dragElastic={0.2}
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <Link href={href}>
        <a className={`link ${router.pathname === "/resume" ? "active" : ""}`}>
          <Svg
            viewBox="0 0 360 338"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M352.5 178C352.5 226.574 336.723 264.47 309.533 290.251C282.291 316.081 242.796 330.5 194 330.5C145.13 330.5 98.2957 316.024 63.8578 289.732C29.5671 263.552 7.5 225.664 7.5 178C7.5 81.947 87.2982 7.5 184 7.5C280.263 7.5 352.5 81.5143 352.5 178Z"
              fill="#fffaec"
              stroke="#4C5454"
              strokeWidth="15"
            />
            <path
              d="M243.026 141.511L198.593 177.642C190.198 184.302 178.387 184.302 169.992 177.642L125.184 141.511"
              stroke="#4C5454"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M233.089 263C263.502 263.084 284 238.095 284 207.384V138.7C284 107.988 263.502 83 233.089 83H134.911C104.498 83 84 107.988 84 138.7V207.384C84 238.095 104.498 263.084 134.911 263H233.089Z"
              stroke="#4C5454"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </a>
      </Link>
    </IconContainer>
  );
}

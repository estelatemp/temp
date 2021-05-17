import Head from "next/head";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Email from "./Icons/Email";
import Wave1 from "./Decorations/Wave1";
import Wave6 from "./Decorations/Wave6";
import Grid from "./Decorations/Grid";
import { breakpoints } from "../style";

const LayoutWrapper = styled(motion.div)`
  display: flex;
  flex-flow: column wrap;
  /* background-color: ${(props) => props.theme.layout.backgroundColor}; */
  color: ${(props) => props.theme.font.textColor};
  position: relative;
  ${breakpoints("width", "%", [{ 800: 60 }, { 600: 100 }])};
  margin: 5rem 0 0 0;
  pointer-events: none;
`;

const pageVariants = {
  visible: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      when: "afterChildren",
    },
  },
};

export default function Layout({ children, router }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>👋🏼 👋🏼 👋🏼 Estela Diaz</title>
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Grid />
      <Email href="/resume" />
      <Wave1 />
      <Wave6 />
      <AnimatePresence exitBeforeEnter>
        <LayoutWrapper
          key={router.route}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={pageVariants}
        >
          {children}
        </LayoutWrapper>
      </AnimatePresence>
    </>
  );
}

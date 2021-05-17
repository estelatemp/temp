import { useState } from "react";
import "normalize.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themeDark, themeLight } from "../style";
import Cursor from "../components/Cursor";
import Layout from "../components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
  const [theme, setTheme] = useState(themeLight);
  const toggleTheme = () => {
    // TODO: https://stackoverflow.com/questions/60618893/typescript-type-boolean-is-not-comparable-to-type-number
    // must use if/else because switch/case uses strict comparison, and here we're.... comparing a boolean against an object?

    if (theme === themeLight) {
      setTheme(themeDark);
    } else if (theme === themeDark) {
      setTheme(themeLight);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Cursor /> */}
        <GlobalStyle />
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

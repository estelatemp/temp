import styled, { createGlobalStyle, css } from "styled-components";

const colors = {
  yellow: "#ffbe0b",
  orange: "#fb5607",
  pink: "#ef476f",
  purple: "#8338ec",
  blue: "#118ab2",
  green: "#06d6a0",
  magenta: "#b5179e",
  teal: "#2ec4b6",
};

export const randomColor = () => {
  let arr = Object.values(colors);
  return arr[Math.floor(Math.random() * arr.length)];
};

export const breakpoints = (
  cssProp = "padding",
  cssPropUnits = "rem",
  values = [],
  mediaQueryType = "max-width"
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, "");
  return css([breakpointProps]);
};

/*
  For div testing:
  ----------------
  background-color: lime;
  ${breakpoints("background-color", "", [
    { 1200: "red" },
    { 800: "pink" },
    { 600: "purple" },
    { 450: "magenta" },
  ])};
*/

export const themeLight = {
  name: "light",
  colors: {
    ...colors,
  },
  palette: {
    primary: colors.pink,
    secondary: colors.green,
  },
  font: {
    headerColor: "#4C5454",
    linkColor: "#4C5454",
    textColor: "#4C5454",
  },
  layout: {
    backgroundColor: "#fff",
    borderColor: colors.pink,
    burgerBackground: colors.pink,
    cursorColor: colors.teal,
  },
};

export const themeDark = {
  name: "dark",
  colors: {
    ...colors,
  },
  palette: {
    primary: colors.green,
    secondary: colors.pink,
  },
  font: {
    headerColor: "#4C5454",
    linkColor: "#4C5454",
    textColor: "#fafafa",
  },
  layout: {
    backgroundColor: "#4C5454",
    borderColor: colors.magenta,
    burgerBackground: colors.purple,
    cursorColor: colors.pink,
  },
};

export const GlobalStyle = createGlobalStyle`
*  {
  /* cursor: none; */
  body {
    color: ${(props) => props.theme.font.textColor};
    margin: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', sans-serif;
    line-height: 1.5;
    padding: 0 6rem;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.layout.backgroundColor};
    overflow-x: hidden;
    ${breakpoints("padding", "", [
      { 1200: "4rem" },
      { 800: "3rem" },
      { 600: "0 2rem" },
      { 450: "0 1rem" },
    ])};
    font-size: 1.75rem;
    ${breakpoints("font-size", "rem", [{ 800: 1.25 }, { 450: 1.125 }])};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Arial Black, sans-serif;
    margin: 0;
    z-index: 10;
  }
  h1 {
    color: ${(props) => props.theme.font.headerColor};
    font-size: 7rem;
    ${breakpoints("font-size", "rem", [{ 800: 4 }, { 450: 3.75 }])};
    line-height: 8rem;
  }
  a {
    color: ${(props) => props.theme.font.linkColor};
    cursor: pointer;
    font-weight: 700;
    font-family: Arial Black, sans-serif;
    width: fit-content;
    text-decoration: none;
    background-size: contain;
    background-position:100%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='598' height='69' viewBox='0 0 598 69' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M536.005 4.49843C535.018 4.27198 534.034 4.05167 533.057 3.83813C522.549 1.54207 512.138 -0.103306 504.589 0.00505462C453.618 0.73671 403.065 6.77238 352.912 13.3185C349.28 13.7925 345.651 14.2692 342.024 14.7467C337.612 14.4556 333.198 14.1612 328.782 13.8654C325.768 13.6634 322.752 13.4608 319.735 13.2581C268.566 9.81969 217.136 6.36382 165.611 5.87046C151.333 5.73375 137.634 11.5885 126.631 18.3478C122.837 20.6787 119.651 23.7591 116.924 26.87C102.065 27.8657 87.8122 29.1923 74.356 30.9094C72.3504 30.8701 70.3442 30.8305 68.3373 30.7909C45.668 30.3434 22.91 29.8942 0 29.8942V45.2275C3.96896 45.2275 7.94349 45.2415 11.9231 45.2671C11.1047 45.9436 10.1578 46.9299 9.47899 48.2906C8.82199 49.6075 8.37981 51.3627 8.70192 53.3396C9.01672 55.2717 9.9464 56.7099 10.8077 57.6498C12.3152 59.2949 14.1549 60.0199 15.0069 60.3257C16.9958 61.0394 19.4794 61.424 21.8383 61.6808C30.6468 62.6395 46.6709 62.6376 65.5053 62.1414C76.7361 64.1921 89.7252 64.7773 101.575 60.8028C138.351 59.1313 177.963 56.5896 200.313 55.0431C241.682 52.1807 282.898 47.7207 323.98 42.8449C355.864 44.2696 387.299 46.0007 416.918 47.6318C470.046 50.5574 517.332 53.1614 550.886 53.0989L552.527 53.0959L582.059 39.7784C583.328 39.724 584.558 39.6018 585.685 39.3698C586.5 39.202 587.535 38.9228 588.588 38.4067C589.594 37.9136 591.18 36.9283 592.32 35.0577C595.271 30.219 592.227 25.9541 591.286 24.854C590.091 23.4568 588.576 22.4219 587.437 21.7209C582.791 18.8598 574.186 15.5292 564.762 12.4588C560.966 11.2218 556.912 9.98786 552.743 8.8042C552.528 8.36992 552.268 7.94373 551.957 7.53131C550.569 5.68552 548.789 4.94888 547.978 4.66618C547.038 4.33827 546.164 4.20413 545.549 4.1379C544.302 4.0037 542.948 4.03367 541.658 4.1181C539.773 4.24149 537.889 4.3683 536.005 4.49843ZM261.209 24.8491C229.264 22.9616 197.374 21.5086 165.464 21.2031C159.228 21.1434 152.765 22.7194 146.432 25.3385C182.007 23.9832 220.115 24.1551 258.501 25.1428C259.404 25.0457 260.306 24.9478 261.209 24.8491ZM79.7109 46.3538C78.1753 46.3247 76.6401 46.2952 75.1052 46.2654C74.2727 46.3735 73.4435 46.4832 72.6178 46.5944C74.9448 46.5206 77.3114 46.4402 79.7109 46.3538ZM488.226 36.0073C489.164 36.0051 490.103 36.0018 491.041 35.9973C496.437 35.972 503.699 34.6768 510.823 33.0072C518.109 31.3 525.848 29.0555 532.442 26.8496C536.83 25.3816 541.023 23.8293 544.291 22.3738C549.757 23.849 555.115 25.4423 560.012 27.0378C562.681 27.9074 565.152 28.7585 567.391 29.5726L549.221 37.7666C531.989 37.7548 511.347 37.0666 488.226 36.0073ZM582.592 24.3515C582.595 24.3511 582.59 24.352 582.592 24.3515Z' fill='%238AC926' fill-opacity='0.2'/%3E%3C/svg%3E%0A");
    pointer-events: auto;
  }
  p {
    z-index: 10;
    font-family: "Fira Code";
    strong {
      font-family: Arial Black, sans-serif;
    }
  }

  .hide {
    display: none;
  }
  .show {
    display: block;
  }
}`;

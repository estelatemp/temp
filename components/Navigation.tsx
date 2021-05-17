import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Burger from "./Burger";
import Lightbulb from "./Icons/Lightbulb";
import styled from "styled-components";

type Props = {
  toggleTheme: () => void;
};

const NavContainer = styled.div`
  ul {
    background-color: ${(props) => props.theme.layout.burgerBackground};
    width: 100%;
    height: 100vh;
    text-align: right;
    list-style: none;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    transform: translateY(100%);
    transition: all 200ms;
    li {
      margin-bottom: 1.75rem;
      font-size: 2rem;
      padding: 0 1.5rem 0 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
    @media (min-width: 769px) {
      background-color: transparent;
      transform: translateY(0);
      display: flex;
      flex-flow: row;
      position: absolute;
      height: auto;
      width: auto;
      right: 0;
      padding: 1rem 0.5rem;
      li {
        font-size: 2rem;
        margin-bottom: 0;
        margin-left: 2rem;
        padding: 0;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &.active {
    text-decoration: underline;
    ul {
      transform: translateY(0);
    }
  }
`;

export default function Navigation({ toggleTheme }: Props) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <nav>
      <Burger active={active} onClick={() => setActive(!active)} />
      <NavContainer className={active ? "active" : ""}>
        <ul>
          <Link href="/">
            <a className={`link ${router.pathname === "/" ? "hide" : "show"}`}>
              Estela Diaz
            </a>
          </Link>
          <li>
            <Link href="/resume">
              <a
                className={`link ${
                  router.pathname === "/resume" ? "active" : ""
                }`}
              >
                resume
              </a>
            </Link>
          </li>
          <li>
            <Lightbulb onClick={toggleTheme} />
          </li>
        </ul>
      </NavContainer>
    </nav>
  );
}

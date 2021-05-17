import styled from "styled-components";
import { breakpoints } from "../style";

type Props = {
  active: boolean;
  onClick: () => void;
};

const BurgerWrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  position: fixed;
  width: 2.5rem;
  height: 2.5rem;
  top: 1rem;
  right: 1.25rem;
  z-index: 2;
  background-color: red;
`;

const Meat = styled.div`
  position: absolute;
  width: 28px;
  height: 2px;
  background: #222;
  top: calc(50% - 2px / 2);
  left: calc(50% - 28px / 2);
  transition: all 150ms ease-in-out;
`;

const Slice1 = styled(Meat)`
  transform: translateY(-10px);
  &.active {
    transform: rotate(45deg);
  }
`;

const Slice2 = styled(Meat)`
  width: calc(28px - 6px);
  &.active {
    opacity: 0;
  }
`;

const Slice3 = styled(Meat)`
  transform: translateY(10px);
  &.active {
    transform: rotate(-45deg);
  }
`;

export default function Burger({ active, onClick }: Props) {
  return (
    <BurgerWrapper
      className={"container " + (active ? "active" : "")}
      onClick={onClick}
    >
      <Slice1 />
      <Slice2 />
      <Slice3 />
    </BurgerWrapper>
  );
}

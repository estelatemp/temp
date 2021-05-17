import styled from "styled-components";
import anime from "animejs";
import { motion } from "framer-motion";
import { randomColor } from "../../style";

const GridItem = styled.div`
  background-color: ${(props) => props.theme.colors.green};
  cursor: inherit;
  position: relative;
  border-radius: 50%;
  margin: 0.75rem;
  opacity: 0.2;
  &:hover {
    opacity: 0.1;
  }
`;

const GridWrapper = styled(motion.div)`
  position: absolute;
  right: 20vw;
  top: -18vh;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  justify-content: center;
  z-index: 1;
`;

export default function Grid() {
  const handleStagger = (i) => {
    const el = i.target.id;
    anime({
      targets: ".grid-item",
      backgroundColor: randomColor(),
      scale: [
        { value: 0.5, easing: "easeInOutQuad", duration: 100 },
        { value: 1, easing: "easeInOutQuad", duration: 300 },
      ],
      delay: anime.stagger(50, { grid: [10, 10], from: el }),
    });
  };

  const handleMouseEnter = (i) => {
    const el = i.target.id;
    anime({
      // targets: ".test",
      color: randomColor(),
      elasticity: 500,
      translateX: "20px",
    });
  };
  const handleMouseLeave = (i) => {
    const el = i.target.id;
    anime({
      // targets: ".test",
      color: randomColor(),
      translateX: "-20px",
      elasticity: 500,
    });
  };

  return (
    <GridWrapper
      drag
      dragElastic={0.1}
      dragConstraints={{ top: 0, bottom: 100, left: 0, right: 100 }}
    >
      {[...Array(100)].map((x, i) => (
        <GridItem
          className="grid-item"
          key={`${i}`}
          id={`${i}`}
          onClick={(i) => handleStagger(i)}
          onPointerEnter={(i) => handleMouseEnter(i)}
          onPointerLeave={(i) => handleMouseLeave(i)}
        />
      ))}
    </GridWrapper>
  );
}

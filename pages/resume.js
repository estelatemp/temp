import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";
import { breakpoints } from "../style";
import { elementVariants } from "../style/animations";
import data from "../data/resume.json";

// Todo: make reuseable, connect to prevPage animation
const H1 = styled(motion.h1)`
  color: ${(props) => props.theme.font.headerColor};
  font-size: 5rem;
  ${breakpoints("font-size", "rem", [{ 800: 4 }, { 450: 3.75 }])};
  ${breakpoints("line-height", "rem", [{ 800: 5 }, { 450: 4 }])};
  line-height: 5rem;
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 40px;
  pointer-events: auto;
  width: fit-content;
  border: 5px solid ${(props) => props.theme.font.headerColor};
`;

const Subheader = styled(motion.h2)`
  font-size: 2rem;
  font-family: "Fira Code";
`;

const Experience = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
`;

const Content = styled(motion.div)`
  padding: calc(3rem + 5px);
`;

const JobWrapper = styled(motion.div)`
  width: calc(50% - 6rem - 10px);
  border-radius: 30px;
  padding: 3rem;
`;

const CompanyName = styled(motion.h3)``;

const Role = styled(motion.h4)``;

const DatesWorked = styled(motion.h5)``;

const Ul = styled(motion.ul)``;

export default function Resume() {
  const getBulletPoints = (job) => {
    return job.description.map((desc) => (
      <li key={desc.toLowerCase().split(" ").join("-")}>{desc}</li>
    ));
  };

  const getExperiences = () => {
    return data.experience.map((job) => (
      <JobWrapper
        key={job.company.toLowerCase().split(" ").join("-")}
        variants={elementVariants}
      >
        <CompanyName variants={elementVariants}>{job.company}</CompanyName>
        <Role>{job.role}</Role>
        <DatesWorked variants={elementVariants}>
          {job.dates_employed}
        </DatesWorked>
        <Ul variants={elementVariants}>{getBulletPoints(job)}</Ul>
      </JobWrapper>
    ));
  };

  return (
    <>
      <Link href="/">
        <a>
          <H1 variants={elementVariants}>
            Hi,
            <br /> I'm Estela.
          </H1>
        </a>
      </Link>
      <Content>
        <Subheader variants={elementVariants}>{data.description}</Subheader>
        <Experience variants={elementVariants}>{getExperiences()}</Experience>
      </Content>
    </>
  );
}

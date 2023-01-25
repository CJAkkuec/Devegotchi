import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 3rem;
  margin: 2rem 0 0 0;
  font-family: "Press Start";
  color: #fff;
  text-shadow: 3px 3px 0px var(--pastel-green);
`;

export default function Title() {
  return <StyledTitle>Debbe</StyledTitle>;
}

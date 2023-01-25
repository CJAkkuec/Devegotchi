import styled from "styled-components";
import Button from "../Button";

const Flex = styled.div`
  flex-direction: column;
  color: var(--pc-outline);
  display: flex;
  gap: 1rem;
`;

const StyledProgress = styled.progress`
  height: 1rem;
  appearance: none;

  &::-webkit-progress-bar {
    background: #fff;
  }

  &::-webkit-progress-value {
    background: var(--pastel-green);
  }
`;

const StyledBox = styled.div`
  margin: 0;
  line-height: normal;
  width: fit-content;
  padding: 0.2rem;
  background: #fff;
  box-shadow: 0 4px var(--pc-outline), 0 -4px var(--pc-outline),
    4px 0 var(--pc-outline), -4px 0 var(--pc-outline);
`;

export default function LevelProgress({ creature, handleOpen }) {
  return (
    <Flex>
      <span>Level {creature.level}</span>
      <StyledBox>
        <StyledProgress value={creature.progress} min={0} max={12} />
      </StyledBox>
      <Button onClick={handleOpen}>reset</Button>
    </Flex>
  );
}

import styled from "styled-components";
import NeedListTitle from "../NeedListTitle";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
`;

const ListItem = styled.li`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const Amount = styled.span`
  font-family: inherit;
  font-size: 1.5rem;
  white-space: normal;
  color: #fff;
  padding: 0.5rem;
`;

const Button = styled.button`
  font-family: "Press Start";
  appearance: none;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 1rem;

  &:hover {
    color: yellow;
    transition: 0.5s ease-in-out;
  }
`;

const StyledBox = styled.div`
  margin: 0;
  width: 8rem;
  height: 8rem;
  background: ${({ needAmount }) =>
    needAmount < 20 ? "var(--pastel-red)" : "var(--pastel-green)"};
  box-shadow: 0 4px var(--pc-outline), 0 -4px var(--pc-outline),
    4px 0 var(--pc-outline), -4px 0 var(--pc-outline);
`;

export default function NeedList({ creature, increaseNeed }) {
  return (
    <List>
      {Object.keys(creature).map((stat) =>
        stat !== "level" && stat !== "progress" ? (
          <StyledBox key={stat} needAmount={creature[stat]}>
            <ListItem>
              <NeedListTitle stat={stat} />
              <Amount> {creature[stat]}</Amount>
              <Button onClick={() => increaseNeed(stat, 10)}>+</Button>
            </ListItem>
          </StyledBox>
        ) : null
      )}
    </List>
  );
}

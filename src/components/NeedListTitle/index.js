import styled from "styled-components";

const StatTitle = styled.span`
  font-size: 0.8rem;
`;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 40%;
`;

const StatImage = styled.img`
  height: 50%;
`;

function NeedListTitle({ stat }) {
  return (
    <StatWrapper>
      <StatImage
        src={
          stat === "coffee"
            ? "./assets/items/coffee.png"
            : stat === "hunger"
            ? "./assets/items/hunger.png"
            : stat === "code"
            ? "./assets/items/code.png"
            : stat === "joy"
            ? "./assets/items/joy.png"
            : ""
        }
        alt={
          stat === "coffee"
            ? "A coffee pot"
            : stat === "hunger"
            ? "A cooking pot"
            : stat === "code"
            ? "A laptop"
            : stat === "joy"
            ? "A gamepad"
            : ""
        }
      />
      <StatTitle>{stat}</StatTitle>
    </StatWrapper>
  );
}

export default NeedListTitle;

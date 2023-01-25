import styled from "styled-components";

const IndicatorImage = styled.img`
  position: absolute;
  width: 2rem;
  top: -40px;
  left: -10px;
`;

function Indicator({ poke, creature, creatureNeedsCounts }) {
  let moodSrc = "";

  const needsBelowTwenty = creatureNeedsCounts.filter((stat) => stat < 20);

  const moodSrcMap = {
    happy: "./assets/icons/happy.png",
    sad: "./assets/icons/sad.png",
    poke: "./assets/icons/heart.png",
    coffee: "./assets/items/coffee.png",
    hunger: "./assets/items/hunger.png",
    code: "./assets/items/code.png",
    joy: "./assets/items/joy.png",
  };

  if (poke) {
    moodSrc = moodSrcMap.poke;
  } else if (!poke && needsBelowTwenty.length > 1) {
    moodSrc = moodSrcMap.sad;
  } else if (!poke && creature.coffee < 20) {
    moodSrc = moodSrcMap.coffee;
  } else if (!poke && creature.code < 20) {
    moodSrc = moodSrcMap.code;
  } else if (!poke && creature.hunger < 20) {
    moodSrc = moodSrcMap.hunger;
  } else if (!poke && creature.joy < 20) {
    moodSrc = moodSrcMap.joy;
  } else {
    moodSrc = moodSrcMap.happy;
  }

  return <IndicatorImage src={moodSrc} alt="A mood indicator" />;
}

export default Indicator;

import { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { images } from "./data/images.json";
import { subjects } from "./data/subjects.json";

import Wrapper from "./components/Wrapper";
import ImageWrapper from "./components/ImageWrapper";
import TitleWrapper from "./components/TitleWrapper";
import Header from "./components/Header";
import Modal from "./components/Modal";

import UserInput from "./components/UserInput";
import LevelProgress from "./components/LevelProgress";
import NeedList from "./components/NeedList";
import Title from "./components/Title";
import Star from "./components/Star";
import Disclaimer from "./components/Disclaimer";

const purpleSet = images.purple;

const initialCreature = {
  coffee: 100,
  hunger: 100,
  code: 100,
  joy: 100,
  level: 1,
  progress: 0
};

const variants = {
  walkRight: {
    x: ["0%", "100%"],
    transition: {
      duration: 5
    }
  },
  rightToMiddle: {
    x: ["100%", "0%"],
    transition: {
      duration: 5
    }
  },
  walkLeft: {
    x: ["0%", "-100%"],
    transition: {
      duration: 5
    }
  },
  leftToMiddle: {
    x: ["-100%", "0%"],
    transition: {
      duration: 5
    }
  },
  idle: {
    x: 0,
    transition: { duration: 10 }
  }
};

export default function App() {
  const [creature, setCreature] = useState(initialCreature);
  const [levelSet, setLevelSet] = useState(purpleSet.lv1);
  const [starAnimation, setStarAnimation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [animationState, cycleAnimation] = useCycle(
    "idle",
    "walkRight",
    "rightToMiddle",
    "walkLeft",
    "leftToMiddle"
  );

  const creatureNeedsCounts = Object.keys(creature)
    .filter((stat) => stat !== "level" && stat !== "progress")
    .map((stat) => creature[stat]);

  const moodSet = creatureNeedsCounts.some((stat) => stat < 20)
    ? levelSet.sad
    : levelSet.happy;

  const animationStateImage = {
    idle: moodSet[0],
    walkRight: moodSet[2],
    rightToMiddle: moodSet[1],
    walkLeft: moodSet[1],
    leftToMiddle: moodSet[2]
  };

  const selectedImage = animationStateImage[animationState];

  useEffect(() => {
    if (creature.level === 1) {
      setLevelSet(purpleSet.lv1);
    } else if (creature.level === 2) {
      setLevelSet(purpleSet.lv2);
    }
  }, [creature.level]);

  const degradeCreatureNeeds = () => {
    setCreature((prevStats) => ({
      ...prevStats,
      coffee: Math.max(0, prevStats.coffee - 1),
      hunger: Math.max(0, prevStats.hunger - 1),
      code: Math.max(0, prevStats.code - 1),
      joy: Math.max(0, prevStats.joy - 1)
    }));
  };

  useEffect(() => {
    const interval = setInterval(degradeCreatureNeeds, 10000);
    return () => clearInterval(interval);
  });

  const increaseNeed = (need, amount) => {
    setCreature((prevStats) => ({
      ...prevStats,
      [need]: Math.min(prevStats[need] + amount, 100)
    }));
  };

  const handleChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStarAnimation(false);

    const matches = subjects.filter(
      (subject) => subject.toLowerCase() === inputValue.toLowerCase()
    );

    if (matches.length > 0) {
      setCreature((prevStats) => ({
        ...prevStats,
        progress: Math.min(prevStats.progress + 1, 10)
      }));
    }

    if (creature.progress === 10) {
      setStarAnimation(true);
      setCreature((prevStats) => ({
        ...prevStats,
        level: Math.min(prevStats.level + 1, 12)
      }));
      setCreature((prevStats) => ({
        ...prevStats,
        progress: 0
      }));
    }

    setInputValue("");
  };

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleReset() {
    setCreature((prevStats) => ({
      ...prevStats,
      progress: 0,
      level: 1
    }));
    setIsOpen(false);
  }

  return (
    <Wrapper>
      {isOpen && <Modal handleOpen={handleOpen} handleReset={handleReset} />}
      <Header>
        <Title />
        <TitleWrapper>
          <LevelProgress creature={creature} handleOpen={handleOpen} />
          <UserInput
            inputValue={inputValue}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </TitleWrapper>
      </Header>
      <NeedList creature={creature} increaseNeed={increaseNeed} />

      <ImageWrapper>
        {starAnimation && <Star motion={motion} />}
        <motion.img
          src={selectedImage}
          animate={animationState}
          variants={variants}
          onAnimationComplete={cycleAnimation}
        />
      </ImageWrapper>
      <Disclaimer />
    </Wrapper>
  );
}

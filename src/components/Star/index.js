function Star({ motion }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0],
        x: [30, -30],
        y: [30, -30]
      }}
      transition={{
        duration: 1
      }}
    >
      <span role="img" aria-label="A small star">
        ⭐️
      </span>
    </motion.div>
  );
}

export default Star;

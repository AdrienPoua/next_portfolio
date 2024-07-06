export const blurInAnimation = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

export const sectionAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const wavyAnimation = {
  hidden: { x: 2, y: 2 },
  visible: { x: -2, y: -2 },
};

export const multiDirectionAnimation = {
  hidden: { opacity: 0, x: "-25vw" },
  visible: { opacity: 1, x: 0 },
  right: { opacity: 0, x: "25vw" },
};

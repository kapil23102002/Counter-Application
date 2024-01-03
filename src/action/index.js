export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    incBy: num,
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const resNumber = () => {
  return {
    type: "RESET",
  };
};

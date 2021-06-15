export const add = (Number) => {
  return {
    type: "ADD",
    payload: Number,
  };
};

export const sub = (Number) => {
  return {
    type: "SUB",
    payload: Number,
  };
};

export const accessRTS = (rts) => {
  return {
    type: "ACCESS",
    payload: rts,
  };
};

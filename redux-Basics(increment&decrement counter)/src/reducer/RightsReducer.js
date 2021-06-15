const RightsReducer = (state = false, action) => {
  switch (action.type) {
    case "ACCESS":
      return action.payload;
    default:
      return state;
  }
};

export default RightsReducer;

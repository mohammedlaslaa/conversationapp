const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      state.current = action.payload;
      return state;
    default:
      return state;
  }
};

export default messageReducer;

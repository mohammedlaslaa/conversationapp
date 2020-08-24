const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      return state;
    default:
      return state;
  }
};

export default messageReducer;

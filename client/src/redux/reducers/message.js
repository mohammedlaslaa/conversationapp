const messageReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "GET_MESSAGES":
      state = payload.messages;
      return state;
    case "SEND_MESSAGE":
      state = [...state, payload];
      return state;
    case "RESET_MESSAGES":
      state = [];
      return state;
    default:
      return state;
  }
};

export default messageReducer;

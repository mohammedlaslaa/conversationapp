const conversationReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CONVERSATIONS":
      state.hello = "Hello";
      return state;
    case "GET_CONVERSATION_BY_ID":
      // do something action.payload
      return state;
    default:
      return state;
  }
};

export default conversationReducer;

const conversationReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CONVERSATIONS":
      state = action.payload;
      return state;
    case "ADD_NEW_CONVERSATION":
      state = [...state, action.payload.conversation]
      return state;
    default:
      return state;
  }
};

export default conversationReducer;

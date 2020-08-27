const conversationReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CONVERSATIONS":
      state = action.payload;
      return state;
    case "FETCH_CONVERSATION_BY_ID":
      state.current = action.payload;
      return state;
    case "ADD_NEW_CONVERSATION":
      state = [...state, action.payload.conversation]
      return state;
    case "CLOSE_CONVERSATION":
      state = state.filter(e => e._id !== action.payload._id)
      return state;
    default:
      return state;
  }
};

export default conversationReducer;

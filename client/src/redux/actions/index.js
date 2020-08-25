export const getconversations = (data) => {
  return {
    type: "FETCH_CONVERSATIONS",
    payload: data,
  };
};

export const addnewconversation = (data) => {
  return {
    type: "ADD_NEW_CONVERSATION",
    payload: data,
  };
};

export const getconversationbyid = (data) => {
  return {
    type: "FETCH_CONVERSATION_BY_ID",
    payload: data,
  };
};

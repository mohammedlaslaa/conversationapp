export const getconversations = () => {
  return {
    type: "GET_CONVERSATIONS",
  };
};

export const getmessages = () => {
  return {
    type: "GET_MESSAGES",
  };
};

export const getconversationbyid = (id) => {
  return {
    type: "GET_CONVERSATION_BY_ID",
    payload: id,
  };
};

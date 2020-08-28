export const getconversations = (data) => {
  return {
    type: "FETCH_CONVERSATIONS",
    payload: data,
  };
};

export const getallconversations = (data) => {
  return {
    type: "FETCH_ALL_CONVERSATIONS",
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

export const getmessages = (data) => {
  return {
    type: "GET_MESSAGES",
    payload: data,
  };
};

export const sendmessage = (data) => {
  return {
    type: "SEND_MESSAGE",
    payload: data,
  };
};

export const resetmessages = () => {
  return {
    type: "RESET_MESSAGES",
  };
};

export const closeconversation = (data) => {
  return {
    type: "CLOSE_CONVERSATION",
    payload: data,
  };
};

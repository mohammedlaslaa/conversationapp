import React, { useEffect, useState } from "react";
import Api from "../../Api";
import { useDispatch, useSelector } from "react-redux";
import { getmessages } from "../../redux/actions";

function Conversation({ conversations }) {
  const [idCurrentConversation, setIdCurrentConversation] = useState("");

  const currentConversation = useSelector(({ messages }) => messages.current);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetConversation = () => {
      Api.getConversationById(idCurrentConversation).then(({ data }) =>
        dispatch(getmessages(data.conversation))
      );
    };
    if (conversations.length > 0 && !idCurrentConversation) {
      setIdCurrentConversation(conversations[0]._id);
    } else if (idCurrentConversation) {
      handleGetConversation();
    }
  }, [conversations, dispatch, idCurrentConversation]);

  const handleChangeConversation = (index) => {
    setIdCurrentConversation(conversations[index]._id);
  };

  return (
    <div className="row border w-75 ConversationContainer">
      <div className="col-3 border ListConversation">
        {conversations.map((e, index) => (
          <div
            key={index}
            onClick={() => handleChangeConversation(index)}
            className={
              "ConversationItem border border-secondary p-3 mt-1 d-flex justify-content-center align-items-center" +
              (idCurrentConversation === e._id && " SelectedItem")
            }
          >
            <p className="m-0">{e.title}</p>
          </div>
        ))}
      </div>
      <div className="col-9 border Messages">
        {currentConversation &&
          currentConversation.map((e, index) => (
            <div
              key={index}
              className="rounded text-white w-50 bg-secondary p-2"
            >
              <p className="m-0">{e.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Conversation;

import React, { useEffect, useState } from "react";
import MessagePart from "../../components/MessagePart";
import Api from "../../Api";
import { useDispatch } from "react-redux";
import { getmessages } from "../../redux/actions";

function Conversation({ conversations }) {
  const [idCurrentConversation, setIdCurrentConversation] = useState(null);
  const [indexCurrent, setIndexCurrent] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetConversation = () => {
      Api.getConversationById(idCurrentConversation).then(({ data }) =>
        dispatch(getmessages(data.conversation))
      );
    };
    if (conversations.length > 0 && idCurrentConversation === null) {
      setIdCurrentConversation(conversations[indexCurrent]._id);
    } else if (idCurrentConversation) {
      handleGetConversation();
    }
  }, [conversations, dispatch, idCurrentConversation, indexCurrent]);

  return (
    <div className="row border w-75 ConversationContainer">
      <div className="col-3 border ListConversation">
        {conversations.map((e, index) => (
          <div
            key={index}
            onClick={() => {
              setIndexCurrent(index);
              setIdCurrentConversation(conversations[index]._id);
            }}
            className={
              "ConversationItem border border-secondary p-3 mt-1 d-flex justify-content-center align-items-center" +
              (idCurrentConversation === e._id && " SelectedItem")
            }
          >
            <p className="m-0">{e.title}</p>
          </div>
        ))}
      </div>
      <MessagePart
        id={idCurrentConversation}
        indexCurrent={indexCurrent}
        setIndexCurrent={setIndexCurrent}
        setIdCurrentConversation={setIdCurrentConversation}
      />
    </div>
  );
}

export default Conversation;

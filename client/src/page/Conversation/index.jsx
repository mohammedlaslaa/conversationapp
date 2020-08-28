import React, { useEffect, useState, useRef } from "react";
import MessagePart from "../../components/MessagePart";
import Api from "../../Api";
import { useDispatch, useSelector } from "react-redux";
import { getmessages, getconversations } from "../../redux/actions";

function Conversation() {
  const [idCurrentConversation, setIdCurrentConversation] = useState(null);
  const [indexCurrent, setIndexCurrent] = useState(0);
  const dispatch = useDispatch();
  const ref = useRef();
  const conversations = useSelector((state) => state.conversation);

  useEffect(() => {
    const handleGetConversation = () => {
      Api.getConversationById(idCurrentConversation).then(({ data }) =>
        dispatch(getmessages(data.conversation))
      );
    };
    if (conversations.length && idCurrentConversation === null) {
      Api.getOpenConversations()
        .then(({ data }) => {
          dispatch(getconversations(data.allConversation));
        })
        .then(() => setIdCurrentConversation(conversations[indexCurrent]._id));
    } else if (conversations.length && ref.current !== indexCurrent) {
      ref.current = indexCurrent;
      handleGetConversation();
    }
  }, [conversations, dispatch, idCurrentConversation, indexCurrent]);

  const handleIndex = (index) => {
    setIdCurrentConversation(conversations[index]._id);
    setIndexCurrent(index);
  };

  return (
    <div className="row border w-75 ConversationContainer">
      <div className="col-3 border ListConversation">
        {conversations.map((e, index) => (
          <div
            key={index}
            onClick={() => {
              handleIndex(index);
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
        handleIndex={handleIndex}
        idCurrentConversation={idCurrentConversation}
        setIdCurrentConversation={setIdCurrentConversation}
      />
    </div>
  );
}

export default Conversation;

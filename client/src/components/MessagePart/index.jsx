import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendmessage,
  closeconversation,
  resetmessages,
} from "../../redux/actions";
import Api from "../../Api";

function MessagePart({
  id,
  indexCurrent,
  handleIndex,
  setIdCurrentConversation,
  idCurrentConversation,
}) {
  const currentConversation = useSelector((state) => state.messages);
  const conversation = useSelector((state) => state.conversation);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    Api.sendMessage(id, message).then(({ data }) => {
      dispatch(sendmessage(data.message));
      setMessage("");
    });
  };

  const handleCloseConversation = () => {
    Api.closeConversation(id).then(({ data }) => {
      dispatch(closeconversation(data.conversation));
      if (indexCurrent > 0) {
        handleIndex(indexCurrent - 1);
      } else if (indexCurrent === 0) {
        dispatch(resetmessages());
        setIdCurrentConversation(null);
      }
    });
  };

  return (
    <div className="col-9 border Messages">
      <div className="ConversationContainer position-relative">
        {currentConversation.length
          ? currentConversation.map((e, index) => (
              <div
                key={index}
                className="rounded text-white w-50 bg-secondary p-2 my-2"
              >
                <p className="m-0">{e.text}</p>
              </div>
            ))
          : conversation.length === 0
          ? "Aucune conversation veuillez en créer une"
          : "Aucun message"}
        {conversation.length > 0 && (
          <div className="position-absolute icon-close">
            <i
              className="ri-close-circle-line ri-2x"
              onClick={handleCloseConversation}
            ></i>
          </div>
        )}
      </div>
      <div className="SendMessageContainer row">
        {idCurrentConversation && (
          <>
            <div className="col-9 form-group m-0">
              <textarea
                className="w-75 form-control d-block mx-auto"
                rows="3"
                placeholder="Votre message ici..."
                value={message}
                onChange={({ target }) => setMessage(target.value)}
              ></textarea>
            </div>
            <div className="col-2 d-flex align-items-center">
              <button
                className="btn btn-primary"
                disabled={message === ""}
                onClick={handleSendMessage}
              >
                Envoyer
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MessagePart;

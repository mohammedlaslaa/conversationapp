import React, { useEffect, useState } from "react";

function Conversation({ conversations }) {
  const [firstMount, setFirstMount] = useState(true);
  const [currentConversation, setCurrentConversation] = useState({});

  useEffect(() => {
    if (conversations.length > 0 && firstMount) {
      setCurrentConversation(conversations[0]);
      setFirstMount(false);
    }
  }, [conversations, firstMount]);

  return (
    <div className="row border w-75 ConversationContainer">
      <div className="col-3 border ListConversation">
        {conversations.map((e, index) => (
          <div key={index} className="ConversationItem border border-secondary p-3 mt-1 d-flex justify-content-center align-items-center">
            <p  className="m-0">
              {e.title}
            </p>
          </div>
        ))}
      </div>
      <div className="col-9 border Messages">
        {currentConversation.messages && currentConversation.messages.map((e, index) => (
          <div key={index} className="rounded text-white w-50 bg-secondary p-2">
            <p  className="m-0">
              {e.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conversation;

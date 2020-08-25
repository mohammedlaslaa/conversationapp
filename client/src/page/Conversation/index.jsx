import React from "react";

function Conversation({conversations}) {

  return (
    <div className="row border w-75 ConversationContainer">
      <div className="col-3 border ListConversation">
        {conversations.length && conversations.map((e, index) => <p key={index}>{e.title}</p>)}
      </div>
      <div className="col-9 border Messages"></div>
    </div>
  );
}

export default Conversation;

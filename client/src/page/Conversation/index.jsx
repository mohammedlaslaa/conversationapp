import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { getconversations } from "../../redux/actions";

function Conversation() {
  // const conversation = useSelector((state) => state.conversation);
  const dispatch = useDispatch();

  const handleGetConversations = () => {
    dispatch(getconversations());
  };
  return (
    <>
      <div className="App text-success">Hello from home !</div>
      <button onClick={() => handleGetConversations()}>Get conversation</button>
    </>
  );
}

export default Conversation;

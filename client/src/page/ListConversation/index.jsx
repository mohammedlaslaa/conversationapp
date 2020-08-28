import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallconversations } from "../../redux/actions";
import Api from "../../Api";

function ListConversation() {
  const [modal, setModal] = useState({
    show: false,
    content: {},
  });
  const conversations = useSelector((state) => state.conversation);
  const dispatch = useDispatch();

  useEffect(() => {
    Api.getAllConversations().then(({ data }) => {
      dispatch(getallconversations(data.allConversation));
    });
  }, [dispatch]);

  const showDetail = (elt) => {
    setModal({
      show: true,
      content: elt,
    });
    console.log(elt)
    console.log(modal.content)
  };

  const getTableConversation = () => {
    return conversations.map((e, index) => (
      <tr key={index}>
        <th className="text-center">{e.title}</th>
        <th className="text-center">{e.messages.length}</th>
        <th className="text-center">
          <i className="ri-eye-line" onClick={() => showDetail(e)}></i>
        </th>
      </tr>
    ));
  };

  return (
    <div className="App text-success w-75 p-3 position-relative">
      {conversations.length ? (
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">Titre de la discussion</th>
              <th className="text-center">Nombre de messages</th>
              <th className="text-center">Plus d'infos</th>
            </tr>
          </thead>
          <tbody>{conversations.length && getTableConversation()}</tbody>
        </table>
      ) : (
        "Aucune conversation à afficher"
      )}

      {modal.show && (
        <div className="Modal position-absolute">
          <h5 className="text-center">{modal.content.title}</h5>
          <p>Nombre de Messages :</p>
          <p>Date de création</p>
          <p>Date du dernier message</p>
          <p>Active ?</p>
          <p>Clôturé ?</p>
          {/* last index message date creation */}
        </div>
      )}
    </div>
  );
}

export default ListConversation;

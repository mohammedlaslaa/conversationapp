import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallconversations } from "../../redux/actions";
import Api from "../../Api";
import moment from "moment";

function ListConversation() {
  const [modal, setModal] = useState({
    show: false,
    content: {},
    showMessage: false,
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
      ...modal,
      show: true,
      content: elt,
    });
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

  const handleCloseModal = () => {
    setModal({
      show: false,
      content: null,
      showMessage: false,
    });
  };

  const handleShowContent = () => {
    setModal((prevState) => ({
      ...prevState,
      showMessage: !prevState.showMessage,
    }));
  };

  return (
    <div className="App w-75 p-3 position-relative">
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
        <div className="Modal position-absolute border rounded p-2">
          <h5 className="text-center">{modal.content.title}</h5>
          <p>Nombre de Messages : {modal.content.messages.length}</p>

          <p>
            Date de création :{" "}
            {moment(modal.content.date_create).format("DD/MM/YYYY")}
          </p>
          <p>
            Date du dernier message :{" "}
            {modal.content.messages.length
              ? moment(
                  modal.content.messages[modal.content.messages.length - 1]
                    .date_create
                ).format("DD/MM/YYYY")
              : "Aucun message"}
          </p>
          <p>Active ? {modal.content.isActive ? "Oui" : "Non"}</p>
          <p>Clôturé ? {modal.content.isClosed ? "Oui" : "Non"}</p>
          {modal.content.messages.length ? (
            <p className="showContent" onClick={handleShowContent}>
              {modal.showMessage ? "Masquer " : "Afficher "}
              le contenu de la conversation
            </p>
          ) : (
            ""
          )}
          {modal.showMessage
            ? modal.content.messages.map((message) => <ul>{message.text}</ul>)
            : ""}
          <i
            className="ri-close-circle-line ri-2x position-absolute closeModal"
            onClick={handleCloseModal}
          ></i>
        </div>
      )}
    </div>
  );
}

export default ListConversation;

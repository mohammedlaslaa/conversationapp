import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addnewconversation } from "../../redux/actions";
import Api from "../../Api";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();

  const addconversation = () => {
    Api.addNewConversation().then(({ data }) =>
      dispatch(addnewconversation(data))
    );
  };
  
  return (
    <header className="App-header row border w-75">
      <nav className="Menu ml-2 col-9">
        <ul className="d-flex justify-content-center">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/conversations">Conversations</Link>
          </li>
        </ul>
      </nav>
      <div className="col-2 p-2">
        {location.pathname === "/conversations" && (
          <button
            type="button"
            onClick={() => addconversation()}
            className="btn btn-primary"
          >
            Ajouter conversation
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;

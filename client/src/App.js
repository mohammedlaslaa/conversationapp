import React from "react";
import Conversation from "./page/Conversation";
import ListConversation from "./page/ListConversation";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

// CSS import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav className="Menu w-50 ml-2">
            <ul className="d-flex justify-content-center border">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/message">Conversations</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* here some routes */}
        <Switch>
          <Route exact path="/">
            <ListConversation />
          </Route>
          <Route path="/message">
            <Conversation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

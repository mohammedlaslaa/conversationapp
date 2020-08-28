import React from "react";
import Conversation from "./page/Conversation";
import ListConversation from "./page/ListConversation";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./static/icon/remixicon.css";


// CSS import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* here some routes */}
        <div className="Layout">
          <Switch>
            <Route exact path="/">
              <ListConversation />
            </Route>
            <Route path="/conversations">
              <Conversation />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

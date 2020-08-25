import React, { useEffect, useState } from "react";
import Conversation from "./page/Conversation";
import ListConversation from "./page/ListConversation";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getconversations } from "./redux/actions";
import Api from "./Api";

// CSS import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const conversations = useSelector((state) => state.conversation);
  const dispatch = useDispatch();

  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      Api.getAllConversations().then(({ data }) => {
        dispatch(getconversations(data.allConversation));
        setIsFetched(true);
      });
    }
  }, [dispatch, isFetched, conversations]);

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
              <Conversation conversations={conversations} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import WishesGame from "./WishesGame";
import ThankYou from "./ThankYou";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WishesGame} />
        <Route path="/completed" exact component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;

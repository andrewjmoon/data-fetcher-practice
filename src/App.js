import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Mysteries from "./Mysteries";
import Shows from "./Shows";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mysteries" component={Mysteries} />
            <Route exact path="/shows" component={Shows} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

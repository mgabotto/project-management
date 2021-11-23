import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
//
import NavBarr from "./components/Nav/NavBarr";
import Table from "./components/Table";
import GraphPage from "./components/GraphPage";
//
import "./firebase/firebaseConfig";

const App = () => {
  return (
    <Router>
      <NavBarr />
      <Switch>
        <Route exact path="/">
          <Table />
        </Route>
        <Route path="/graphs">
          <GraphPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

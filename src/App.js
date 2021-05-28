import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
//
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table";
import MaterialUI from "./components/MaterialUI";

//
import "./firebase/firebaseConfig";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Table />
        </Route>
        <Route path="/prueba">
          <MaterialUI />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

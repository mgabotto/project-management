import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import Table from './components/Table'




const App = () => {

  return (
    <Router>

      <NavBar />
      <Switch>
        <Route path='/'>
          <Table />
        </Route>
        {/* <Route>

          </Route>
          <Route>

          </Route> */}

      </Switch>

    </Router>
  )
};

export default App;

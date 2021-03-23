import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';



const App = () => {

  return (
    <Router>

      <NavBar />
      <Switch>
        <Route path='/'>
          <h1> prueba</h1>
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

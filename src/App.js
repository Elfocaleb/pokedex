import React, { Component } from 'react'

// Questo è il router da utilizzare su GitHub
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
// Questo qinvece è il router da usare in alternativa
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/layout/NavBar";
import ElencoPKM from "./components/pkm/ElencoPKM";
import SchedaPKM from "./components/pkm/SchedaPKM";


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <NavBar />
              <div className="container">
              <Switch>
                <Route exact path="/" component = {ElencoPKM} />
                <Route exact path="/pokemon/:pkmId" component = {SchedaPKM} />
              </Switch>
              </div>
          </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/Navigation/NavBar.css';
import './components/Navigation/NavBar.js';
import NavBar from './components/Navigation/NavBar';
import Home from "./views/Home/Home";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemLIstContainer/ItemListContainer';
import CompraFinalContainer from './components/CompraFinalContainer/CompraFinalContainer';

class App extends Component {
  render(){
    return (
      <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/category/:categoryId">
                <ItemListContainer></ItemListContainer>
              </Route>
              <Route path="/detail/:itemDetailId">
                <ItemDetailContainer></ItemDetailContainer>
              </Route>
              <Route path="/cart">
                <CompraFinalContainer></CompraFinalContainer>
              </Route> 
            </Switch>
          </div>
      </Router>
    );
  };
}

export default App;
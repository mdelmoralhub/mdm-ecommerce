import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/Navigation/NavBar.css';
import './components/Navigation/NavBar.js';
import NavBar from './components/Navigation/NavBar';

//import ItemListContainer from './components/ItemLIstContainer/ItemListContainer'

import Home from "./views/Home/Home";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemLIstContainer/ItemListContainer';

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
            </Switch>
          </div>
      </Router>
    );
  };
}

export default App;
/*
 <div className='App'>
          <NavBar />
          <ItemListContainer greeting=' Hola '/>
        </div>
*/
/* <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} /> 
            </Routes>
          </div>
        </Router> */
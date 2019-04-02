import React, { Component } from 'react';
import './App.css';
import Login from './container/login/login';
import Home from './container/home_page/home';
import {BrowserRouter , Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

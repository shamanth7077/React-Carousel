import React, { Component } from 'react';
import HomePage from './components/home/home';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/carousel/index";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>   
        <HashRouter>        
                <Switch>     
                    <Route path="/" exact component= {HomePage}/>                                                               
                </Switch>        
          </HashRouter> 
      </Provider>
    );
  }
}

export default App;

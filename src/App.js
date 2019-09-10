import React from 'react';
// import logo from './res/images/logo.svg';
import './res/css/App.css';
// import testStyle from  './res/css/test.module.scss';
import {HashRouter,Route} from 'react-router-dom';
import LoginIndex from './components/Login/Index';
import HomeIndex from './components/Home/Index';
function App() {
  return (
    <HashRouter>
      <Route path="/home" component={HomeIndex}/>
      <Route path="/login" component={LoginIndex}/>
    </HashRouter>
  );
}

export default App;

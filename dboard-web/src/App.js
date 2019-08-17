import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import Sidebar from './components/common/sidebar/Sidebar'
import './App.scss';

function App() {
  return (
      <div>
        <Header/>
        <div className=""></div>
        <Sidebar />
      </div>
  );
}

export default App;

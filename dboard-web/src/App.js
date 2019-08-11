import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import './App.css';

function App() {
  return (
      <div>
        <Header/>
        <div className="">Body</div>
      </div>
  );
}

export default App;

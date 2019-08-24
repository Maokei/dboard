import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import Sidebar from './components/common/sidebar/Sidebar'
import Toggle from './components/common/toggle/Toggle';
import Overview from './components/common/overview/Overview'
import './App.scss';

function App() {
  return (
      <div>
        <Header/>
        <Sidebar />
        <div>
          <Toggle shape={false} defState={false}/>
          <Toggle shape={true} defState={true} handleToggle={() => console.log("asdas")}/>
        </div>
        <Overview />

      </div>
  );
}

export default App;

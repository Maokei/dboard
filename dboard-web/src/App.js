import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/Header';
import Sidebar from './components/common/sidebar/Sidebar'
import Toggle from './components/common/toggle/Toggle';
import Overview from './components/common/overview/Overview'
import Login from './components/login/Login';
import './App.scss';

function App() {
  return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route path="/login" component={Login} exact/>
                <Route path="/overview" component={Overview} exact />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;

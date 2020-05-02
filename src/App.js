import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header.js/Header';
import FiveDaysForecast from './pages/FiveDaysForecast/FiveDaysForecast';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';

function App() {
  return (
   <BrowserRouter>
  <Header/>
  <SiteNavigation/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/FiveDays' component={FiveDaysForecast}/>
    </Switch>
   </BrowserRouter>

     
  );
}

export default App;

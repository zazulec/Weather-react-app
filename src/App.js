import React, { useState, useMemo } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header.js/Header';
import FiveDaysForecast from './pages/FiveDaysForecast/FiveDaysForecast';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import RechartInputContext from './context/RechartInputContext';

function App() {

  const [rechartInputData, setRechartInputData] = useState('');
  const providerValue = useMemo(() =>({ rechartInputData, setRechartInputData}), [rechartInputData,setRechartInputData]);
  
  return (
    <BrowserRouter>
      <Header />
      <SiteNavigation />
      <Switch>
        <RechartInputContext.Provider value={providerValue}>
          <Route exact path='/' component={Home} />
          <Route path='/FiveDays' component={FiveDaysForecast} />
        </RechartInputContext.Provider>
      </Switch>
    </BrowserRouter>


  );
}

export default App;

import React, { useState, useMemo } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import DefaultPage from './pages/DefaultPage/DefaultPage';
import FiveDaysForecast from './pages/FiveDaysForecast/FiveDaysForecast';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import RechartInputContext from './context/RechartInputContext';

function App() {

  const [rechartInputData, setRechartInputData] = useState();
  const rechartProviderValue = useMemo(() => ({ rechartInputData, setRechartInputData }), [rechartInputData, setRechartInputData]);

  return (
    <BrowserRouter>
      <Header />
      <SiteNavigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <RechartInputContext.Provider value={rechartProviderValue}>
          <Route path='/FiveDays' component={FiveDaysForecast} />
        </RechartInputContext.Provider>
        <Route component={DefaultPage} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

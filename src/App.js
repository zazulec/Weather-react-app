import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import DefaultPage from './pages/DefaultPage/DefaultPage';
import FiveDaysForecast from './pages/FiveDaysForecast/FiveDaysForecast';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import RechartInputContext from './context/RechartInputContext';
// import GetCurrentGeoPosition from './context/RechartInputContext';

function App() {

  const [rechartInputData, setRechartInputData] = useState();
  const rechartProviderValue = useMemo(() => ({ rechartInputData, setRechartInputData }), [rechartInputData, setRechartInputData]);

  // const [ currentGeoPosition, setGetCurrentGeoPosition] = useState();
  // const currentGeoPositionValue = useMemo(() => ({ currentGeoPosition, setGetCurrentGeoPosition }), [currentGeoPosition, setGetCurrentGeoPosition]);

  
  return (
    <BrowserRouter>
      <Header />
      <SiteNavigation />
      <RechartInputContext.Provider value={rechartProviderValue}>
        {/* <GetCurrentGeoPosition.Provider value={currentGeoPositionValue}> */}
          <Switch>
            <Route exact path='/' component={Home} /*value={{...currentGeoPosition}} */ />
            <Route path='/FiveDays' component={FiveDaysForecast} />
            <Route component={DefaultPage} />
          </Switch>
        {/* </GetCurrentGeoPosition.Provider> */}
      </RechartInputContext.Provider>
    </BrowserRouter>

  );
}

export default App;

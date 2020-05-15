import React, { useState, useMemo } from 'react';
import { Switch, Route, HashRouter, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import DefaultPage from './pages/DefaultPage/DefaultPage';
import FiveDaysForecast from './pages/FiveDaysForecast/FiveDaysForecast';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';
import RechartInputContext from './context/RechartInputContext';
import CurrentWeatherWithLocation from './pages/CurrentWeatherWithLocation/CurrentWeatherWithLocation';
import { StyledNav } from './StyledApp';
import { Overlay } from './StyledAppOverlay';


function App() {

  const [rechartInputData, setRechartInputData] = useState();
  const rechartProviderValue = useMemo(() => ({
    rechartInputData, setRechartInputData
  }), [rechartInputData, setRechartInputData
  ]);


  return (
    <HashRouter basename="/">
      <Overlay>
        <StyledNav>
          <Header />
          <SiteNavigation />
        </StyledNav>
        <RechartInputContext.Provider value={rechartProviderValue}>
          <Switch>
            <Link exact to='/' component={Home} />
            <Link  to='/FiveDays' component={FiveDaysForecast} />
            <Link  to='/GeoLocation' component={CurrentWeatherWithLocation} />
            <Link  component={DefaultPage} />
          </Switch>
        </RechartInputContext.Provider>
      </Overlay>
    </HashRouter>

  );
}

export default App;

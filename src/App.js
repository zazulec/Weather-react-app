import React, { useState, useMemo } from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import  Home  from './pages/Home/Home';
import { Header } from './components/Header/Header';
import { DefaultPage } from './pages/DefaultPage/DefaultPage';
import { FiveDaysForecast } from './pages/FiveDaysForecast/FiveDaysForecast';
import { SiteNavigation } from './components/SiteNavigation/SiteNavigation';
import { RechartInputContext } from './context/RechartInputContext';
import { CurrentWeatherWithLocation } from './pages/CurrentWeatherWithLocation/CurrentWeatherWithLocation';
import { StyledNav } from './styled/StyledNav';
import { StyledAppOverlay } from './styled/StyledAppOverlay';


function App() {

  const [rechartInputData, setRechartInputData] = useState();
  const rechartProviderValue = useMemo(() => ({
    rechartInputData, setRechartInputData
  }), [rechartInputData, setRechartInputData
  ]);

  return (
      <HashRouter>
        <StyledAppOverlay>
          <StyledNav>
            <Header />
            <SiteNavigation />
          </StyledNav>
          <RechartInputContext.Provider value={rechartProviderValue}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/FiveDays' component={FiveDaysForecast} />
              <Route path='/GeoLocation' component={CurrentWeatherWithLocation} />
              <Route component={DefaultPage} />
            </Switch>
          </RechartInputContext.Provider>
        </StyledAppOverlay>
      </HashRouter>
  );
}

export { App };

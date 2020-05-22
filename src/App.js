import React, { useState, useMemo } from 'react';
import { Switch, Route, BrowserRouter, Link, HashRouter } from "react-router-dom";
import { Home } from './pages/Home/Home';
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

    <StyledAppOverlay>
      <StyledNav>
        <Header />
        <SiteNavigation />
      </StyledNav>
      <RechartInputContext.Provider value={rechartProviderValue}>
        <HashRouter basename={'/Weather-react-app'}>
          <Switch>
            <Route exact patch='/' component={Home} />
            <Route patch='/GeoLocation' component={CurrentWeatherWithLocation} />
            <Route patch='/FiveDays' component={FiveDaysForecast} />
            {/* <Link component={DefaultPage} /> */}
          </Switch>
        </HashRouter>
      </RechartInputContext.Provider>
    </StyledAppOverlay>


  );
}

export { App };

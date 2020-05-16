import React, { useState, useMemo } from 'react';
import { Switch, Route, BrowserRouter, HashRouter, Link } from "react-router-dom";
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Overlay>
        <StyledNav>
          <Header />
          <SiteNavigation />
        </StyledNav>
        <RechartInputContext.Provider value={rechartProviderValue}>
          <Home/>
          <FiveDaysForecast/>
          <CurrentWeatherWithLocation/>
          {/* <Switch>
            <Link to='/' component={Home} />
            <Link  to='/FiveDays' component={FiveDaysForecast} />
            <Link  to='/GeoLocation' component={CurrentWeatherWithLocation} />
            <Link component={DefaultPage} />
            </Switch> */}
        </RechartInputContext.Provider>
      </Overlay>
    </BrowserRouter>

  );
}

export default App;

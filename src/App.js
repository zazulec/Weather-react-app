import React, { useState, useMemo } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <Overlay>
        <StyledNav>
          <Header />
          <SiteNavigation />
        </StyledNav>
        {/*@Piotr: wygląda na to że w tej chwili tego contextu używasz tylko w ramach komponentu FiveDaysForecast a tu przekazujesz do wszystkich komponentów - nie pamiętam dokładnie jak to działa, ale wydaje mi się że przerenderowują się wszystkie komponenty - czyli problem z wydajnością*/}
        <RechartInputContext.Provider value={rechartProviderValue}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/FiveDays' component={FiveDaysForecast} />
            <Route  path='/GeoLocation' component={CurrentWeatherWithLocation} />
            <Route  component={DefaultPage} />
          </Switch>
        </RechartInputContext.Provider>
      </Overlay>
    </BrowserRouter>

  );
}

export default App;

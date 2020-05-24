import React from 'react';
import { Navigation } from './styled/StyledNavigation';
import { Button } from './styled/StyledButton';

const SiteNavigation = () => {

    return (
            <Navigation>
                <Button to="/"> Current weather </Button>
                <Button to='/GeoLocation'> Weather with GeoLocation </Button>
                <Button to="/FiveDays"> Five days forecast </Button>
            </Navigation>
    )
}

export { SiteNavigation };
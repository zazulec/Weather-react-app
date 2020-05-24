import React from 'react';
import { Navigation } from './styled/StyledNavigation';
import { Button } from './styled/StyledButton';

const SiteNavigation = () => {

    return (
            <Navigation>
                <Button as="a" href="/"> Current weather </Button>
                <Button as="a" href='/GeoLocation'> Weather with GeoLocation </Button>
                <Button as="a" href="/FiveDays"> Five days forecast </Button>
            </Navigation>
    )
}

export { SiteNavigation };
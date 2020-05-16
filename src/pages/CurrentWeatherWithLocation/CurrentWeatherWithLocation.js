import React from 'react';
import { CurrentWeatherWithGeoLocation } from '../../components/CurrentWeatherWithGeoLocation/CurrentWeatherWithGeoLocation';
import { Wrapper } from './styled/Wrapper';

function CurrentWeatherWithLocation() {

    return (
        <Wrapper>
            <CurrentWeatherWithGeoLocation />
        </Wrapper>
    )
}

export { CurrentWeatherWithLocation }; 
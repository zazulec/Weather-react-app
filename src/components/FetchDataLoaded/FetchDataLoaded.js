import React from 'react';
import { WeatherInfo } from './styled/StyledWeatherInfo';
import { CategoryResult } from './styled/StyledCategoryResult';
import { Data } from './styled/StyledData';
import { Text } from './styled/StyledText';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


export function FetchDataLoaded(props) {

    const { name, main, wind, weather } = props.data.data;
    
    const cityName = name;
    const currentTemp = main.temp;
    const sensedTemp = Math.round(main.feels_like);
    const windSpeed = wind.speed;
    const windDirection = wind.deg;
    const info = weather.map(element =>
        <div key={element.id}>
            {element.description}
        </div>
    );
    const isFetchDataLoaded = name ?
    <WeatherInfo>
        <CategoryResult>
            <Data>
                City Name:
            <Text>{cityName}</Text>
            </Data>
            <Data>
                Description:
            <Text>{info}</Text>
            </Data>
        </CategoryResult>
        <CategoryResult>
            <Data>
                Current Temp:
            <Text>{currentTemp} &deg;C</Text>
            </Data>
            <Data>
                Sensed Temp:
            <Text>{sensedTemp} &deg;C</Text>
            </Data>
        </CategoryResult>
        <CategoryResult>
            <Data>
                Wind Speed:
            <Text>{`${windSpeed} km/h`}</Text>
            </Data>
            <Data>
                Wind Direction:
             <Text>
                    <ArrowUpwardIcon
                        style={{ transform: `rotate(${windDirection}deg)` }} >
                    </ArrowUpwardIcon>
                </Text>
            </Data>
        </CategoryResult>
    </WeatherInfo> : null
    
    return (
        <>
        {isFetchDataLoaded}
        </>
        )
};
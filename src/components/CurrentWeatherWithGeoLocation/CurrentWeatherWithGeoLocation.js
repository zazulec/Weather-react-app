import React, { Component } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Button, ButtonDisabled } from './styled/StyledButton';
import { Wrapper } from './styled/StyledWrapper';
// import MapContainer from '../Map/Map';
import { WeatherInfo } from './styled/StyledWeatherInfo';
import { Data } from './styled/StyledData';
import { Text } from './styled/StyledText';
import { H1 } from '../../styled/StyledH1';
import { CategoryResult } from './styled/StyledCategoryResult';

class CurrentWeatherWithGeoLocation extends Component {

    state = {
        data: this.getInitialDataState(),
        isLoading: false,
        isLoaded: false,
        locationLoaded: false,
        error: null,
        latitude: null,
        longitude: null,
    }

    getInitialDataState() {
        return {
            weather: [],
            main: {
                temp: null,
                feels_like: null,
            },
            wind: {
                speed: null,
                deg: null,
            },
            name: "",
        }
    };

    getGeoPosition = () => {
        this.setState({
            isLoading: true,
        });
        navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                locationLoaded: true,
                isLoading: false,
            }),
        );
    }

    getCurrentWeatherWithGeoLocation = () => {
        const FETCH_URL_GEOLOCATION = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`;
        const serverStatusCode = 200;

        fetch(FETCH_URL_GEOLOCATION)
            .then(response => (response.json()))
            .then(result => {
                if (result.cod === serverStatusCode) {
                    this.setState({
                        isLoaded: true,
                        isLoading: false,
                        data: result,
                    })
                } else {
                    this.setState({
                        isLoaded: true,
                        isLoading: false,
                    })
                }
            })
            .catch(error => {
                this.setState({
                    data: this.getInitialDataState(),
                    isLoaded: true,
                    isLoading: false,
                    error
                });
            })
    }
    render() {
        const { isLoading, locationLoaded, data, isLoaded, latitude, longitude } = this.state
        const { name, main, wind, weather } = data;

        const loadingGeoLocalisation = isLoading ?
            <>
                <h3>Your current position is:</h3>
                <p>latitude: Loading...</p>
                <p>longitude: Loading...</p>
            </>
            :
            <>
                <h3>Your current position:</h3>
                <p>latitude: {latitude}</p>
                <p>longitude: {longitude}</p>
            </>
        // const showMap = locationLoaded ? <MapContainer state={this.state}/> : null
        const showGetCurrentWeatherButton = locationLoaded ?
            <Button
                onClick={this.getCurrentWeatherWithGeoLocation}>Get current weather
            </Button> :
            <ButtonDisabled
                disabled={true}>Get current weather
            </ButtonDisabled>

        const cityName = name;
        const currentTemp = main.temp;
        const sensedTemp = Math.round(main.feels_like);
        const windSpeed = wind.speed;
        const windDirection = wind.deg;
        const description = weather.map(element =>
            <div key={element.id}>
                {element.description}
            </div>
        );
        const isFetchDataLoaded = isLoaded ?
            <WeatherInfo>
                <CategoryResult>
                    <Data>
                        City Name:
                    <Text>{cityName}</Text>
                    </Data>
                    <Data>
                        Description:
                    <Text>{description}</Text>
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
            </WeatherInfo> : null;
        return (
            <div>
                <Wrapper>
                    <H1>Get current weather <br></br>by geolocation</H1>
                    {loadingGeoLocalisation}
                    {/* {showMap} */}
                    <Button
                        color="disable"
                        variant="contained"
                        onClick={this.getGeoPosition}>
                        Get current position
                    </Button>
                    {showGetCurrentWeatherButton}
                    {isFetchDataLoaded}
                </Wrapper>
            </div>
        )
    }
}

export { CurrentWeatherWithGeoLocation };
import React, { Component } from 'react';
import { Button, ButtonDisabled } from './styled/StyledButton';
import { Wrapper } from './styled/StyledWrapper';
// import MapContainer from '../Map/Map';
import { H1 } from '../../styled/StyledH1';
import { LoadingGeoLocalisation } from '../LoadingGeoLocalisation/LoadingGeoLocalisation';
import { FetchDataLoaded } from '../FetchDataLoaded/FetchDataLoaded';

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
            
    };

    render() {
        const { locationLoaded } = this.state
        
        // const showMap = locationLoaded ? <MapContainer state={this.state}/> : null
        const showGetCurrentWeatherButton = locationLoaded ?
            <Button
                onClick={this.getCurrentWeatherWithGeoLocation}>Get current weather
            </Button> :
            <ButtonDisabled
                disabled={true}>Get current weather
            </ButtonDisabled>

        
        return (
                <Wrapper>
                    <H1>Get current weather <br></br>by geolocation</H1>
                    <LoadingGeoLocalisation data={this.state}   />
                    {/* {showMap} */}
                    <Button
                        color="disable"
                        variant="contained"
                        onClick={this.getGeoPosition}>
                        Get current position
                    </Button>
                    {showGetCurrentWeatherButton}
                    <FetchDataLoaded data={this.state} />
                </Wrapper>
        )
    }
}

export { CurrentWeatherWithGeoLocation };
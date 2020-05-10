import React, { Component } from 'react';
import { Input, Button, FormControl } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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
        navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                locationLoaded: true,
            }),
            err => console.log(err)
        );
        console.log('lati', this.state.latitude)
        console.log('long', this.state.longitude)
    }

    getCurrentWeatherWithGeoLocation = () => {
        this.FETCH_URL_GEOLOCATION = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`
        fetch(this.FETCH_URL_GEOLOCATION)
            .then(response => (response.json()))
            // .then(result => this.setState({
            //     isLoading: true,
            //     // isLoaded: false,   // czy ten then jest ok
            //     // data: this.getInitialDataState()
            // }))
            .then(result => {
                if (result.cod === 200) {
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
        const { isLoading, locationLoaded, data, isLoaded } = this.state
        const loadingGeoLocalisation = isLoading ?
            <>
                <h3>Your current position is:</h3>
                <p>latitude: Loading...</p>
                <p>longitude: Loading...</p>
            </> :
            <>
                <h3>Your current position is:</h3>
                <p>latitude: {this.state.latitude}</p>
                <p>longitude: {this.state.longitude}</p>
            </>
        const showGetCurrentWeatherButton = locationLoaded ?
            <button onClick={this.getCurrentWeatherWithGeoLocation}>Get current weather</button> :
            <button disabled >Get current weather</button>

        const cityName = data.name;
        const currentTemp = data.main.temp;
        const sensedTemp = Math.round(data.main.feels_like);
        const windSpeed = data.wind.speed;
        const windDirection = data.wind.deg;
        const description = data.weather.map(element =>
            <div key={element.id}>
                Description:{element.description}
            </div>
        )
        const isFetchDataLoaded = isLoaded ?
            <div>
                <div>City Name: {cityName}</div>
                <div>Current Temp: {currentTemp} &deg;C</div>
                <div>Sensed Temp: {sensedTemp} &deg;C</div>
                <div>Wind Speed: {`${windSpeed} km/h`}</div>
                <div>Wind Direction:
                     <ArrowUpwardIcon
                        style={{ transform: `rotate(${windDirection}deg)` }} >
                    </ArrowUpwardIcon></div>
                <div>{description}</div>
            </div> :
            <div>

            </div>

        return (
            <div>
                <h1>Get current weather by geolocation</h1>
                {loadingGeoLocalisation}
                <button onClick={this.getGeoPosition}>Get current position</button>
                {showGetCurrentWeatherButton}
                {isFetchDataLoaded}

            </div>
        )
    }
}

export default CurrentWeatherWithGeoLocation;
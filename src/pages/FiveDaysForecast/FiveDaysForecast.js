import React, { Component } from 'react';
import './FiveDaysForecast.css'
import { Input, Button, FormControl } from '@material-ui/core';
import WeatherRechart from '../../components/WeatherRechart/WeatherRechart';

class FiveDaysForecast extends Component {

    state = {
        data: this.getInitialDataStateForFiveDays(),
        isLoaded: false,
        error: null,
        inputCity: '',
        
    };

    getInitialDataStateForFiveDays() {
        return {
            list: [],
            weather: [],
            main: {
                temp: null,
                feels_like: null,
            },
            wind: {
                speed: null,
                deg: null,
            },
            city: {
                name: '',
            },
        }
    };

    

    getFiveDaysForecast() {
        this.FETCH_URL_FIVE_DAYS = `http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${this.state.inputCity}&appid=2e2ff6c3d5791be198f04c78b94573e5`
        
        fetch(this.FETCH_URL_FIVE_DAYS)
            .then(response => (response.json()))
            .then(result => {
                this.setState({
                    isLoaded: true,
                    data: result,
                })
                console.log(this.state.data.list)
            })
            .catch(error => {
                this.setState({
                    data: this.getInitialDataStateForFiveDays(),
                    isLoaded: true,
                    error
                });
            })
    };

    handleForecastInput = (event) => {
        event.preventDefault()
        this.setState({inputCity: event.target.value})
    }

    makeForecastFetch = () => {
        this.getFiveDaysForecast()
        this.setState({ inputCity: ''})
    }

    render() {
        const { data, isLoaded } = this.state;
        const cityName = data.city.name;
        const weatherInfo = data.list.map(element =>
            <div key={element.dt} className="test">
                <p>{element.dt_txt}</p>
                <p>Temperature: {element.main.temp}</p>
                <p>Sensed temperature:{Math.round(element.main.feels_like)}</p>
                <p>Wind speed: {element.wind.speed}</p>
                <p>Wind direction: {element.wind.deg}</p>
                <p>{element.weather[0].description}</p>
            </div>
        );
        const isInputCityEntered = isLoaded ?
            <div>
                <h1>Choose your city</h1>
                <FormControl>
                    <Input value={this.state.inputCity} onChange={this.handleForecastInput} placeholder="Insert city name here" ></Input>
                    <Button onClick={this.makeForecastFetch}>Get current weather</Button>
                </FormControl>
                <h3 >Weather forecast for city: {cityName} </h3>
                {weatherInfo}
                <WeatherRechart/>
            </div> :
            <div>
                <h1>Choose your city</h1>
                <FormControl>
                    <Input value={this.state.inputCity} onChange={this.handleForecastInput} placeholder="Insert city name here" ></Input>
                    <Button onClick={this.makeForecastFetch}>Get weather forecast</Button>
                </FormControl>
                <h1>No city entered</h1>
            </div>

        return (
            <div>
                {isInputCityEntered}
            </div>
        );
    }
};

export default FiveDaysForecast;
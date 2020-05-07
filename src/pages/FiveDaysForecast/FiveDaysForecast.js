import React, { Component } from 'react';
import './FiveDaysForecast.css'
import { Input, Button, FormControl } from '@material-ui/core';
import WeatherRechart from '../../components/WeatherRechart/WeatherRechart';
import RechartInput from '../../components/RechartInput/RechartInput';

class FiveDaysForecast extends Component {

    state = {
        data: this.getInitialDataStateForFiveDays(),
        isLoaded: false,
        error: null,
        inputCity: 'hel',

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
            dt_txt: '',
        }
    };

    getFiveDaysForecast() {
        this.FETCH_URL_FIVE_DAYS = `http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${this.state.inputCity}&appid=2e2ff6c3d5791be198f04c78b94573e5`

        fetch(this.FETCH_URL_FIVE_DAYS)
            .then(response => (response.json()))
            .then(result => {
                if (result.cod === '200') {
                    this.setState({
                        isLoaded: true,
                        data: result,
                    })
                } else {
                    this.setState({
                        isLoaded: true,
                    })
                }

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
        this.setState({ inputCity: event.target.value })
    }

    makeForecastFetch = () => {
        this.getFiveDaysForecast()
        this.setState({ inputCity: '' })
    }
    
    render() {
        const { data, isLoaded } = this.state;
        const cityName = data.city.name;
        const isInputCityEntered = isLoaded ?
            <div>
                <h1>Choose your city</h1>
                <FormControl>
                    <Input value={this.state.inputCity} onChange={this.handleForecastInput} placeholder="Insert city name here" ></Input>
                    <Button onClick={this.makeForecastFetch}>Get current weather</Button>
                </FormControl>
                <h3>Weather forecast for city:{cityName}</h3>
                {data.list.length > 0 ?
                    <div>
                        <RechartInput data={data} />
                        <WeatherRechart data={data} />
                    </div> : <p>Please enter city name to display forecast</p>}

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
import React, { Component } from 'react';
import { Input, Button, FormControl } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Home.css';
// import StyledArrow  from './styled/StyledArrow';



class Home extends Component {

    state = {
        data: this.getInitialDataState(),
        isLoaded: false,
        error: null,
        inputCity: '',
    };

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


    getWeatherData = () => {
        this.FETCH_URL_DAY = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputCity}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`

        fetch(this.FETCH_URL_DAY)
            .then(response => (response.json()))
            .then(result => {
                this.setState({
                    isLoaded: true,
                    data: result,
                })
            })
            .catch(error => {
                this.setState({
                    data: this.getInitialDataState(),
                    isLoaded: true,
                    error
                });
            })
    };

    handleCurrentWeatherInput = (event) => {
        event.preventDefault()
        this.setState({ inputCity: event.target.value })
    }

    makeCurrentWeatherFetch = () => {
        this.getWeatherData()
        this.setState({ inputCity: '' })
    }

    render() {
        const { data, isLoaded } = this.state;
        const cityName = data.name;
        const currentTemp = data.main.temp;
        const sensedTemp = Math.round(data.main.feels_like);
        const windSpeed = data.wind.speed;
        const windDirection = data.wind.deg;
        const description = data.weather.map(element =>
            <div key={element.id}>
                Description:{element.description}
            </div>
        );
        const isInputCityEntered = isLoaded ?
            <div>
                <h1>Choose your city</h1>
                <FormControl>
                    <Input value={this.state.inputCity} onChange={this.handleCurrentWeatherInput} placeholder="Insert city name here" ></Input>
                    <Button onClick={this.makeCurrentWeatherFetch}>Get current weather</Button>
                </FormControl>
                <h3 >Current weather in city: {cityName} </h3>
                <p>Current temperature: {currentTemp} &deg;C</p>
                <p>Sensed temperature: {sensedTemp} &deg;C</p>
                <p>Wind speed: {`${windSpeed} km/h`}</p>
                <p>Wind direction: {windDirection} <ArrowUpwardIcon style={{transform: `rotate(${windDirection}deg)`}}></ArrowUpwardIcon> </p> {/*usunąć windDirection gdy będzie działała strzałka*/}
                <p>{description}</p>
            </div> :
            <div>
                <h1>Choose your city</h1>
                <FormControl>
                    <Input value={this.state.city} onChange={this.handleCurrentWeatherInput} placeholder="Insert city name here" ></Input>
                    <Button onClick={this.makeCurrentWeatherFetch}>Get current weather</Button>
                </FormControl>
                <h1>No city entered</h1>
            </div>;

        return (
            <div>
                {isInputCityEntered}
            </div>
        )
    }
}

export default Home;
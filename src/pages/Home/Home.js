import React, { Component } from 'react';
import { Input, Button, FormControl } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { HomeH1, HomeH3, Wrapper } from './styled/StyledHome';
import CurrentWeatherWithGeoLocation from '../../components/CurrentWeatherWithGeoLocation/CurrentWeatherWithGeoLocation';

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
                if (result.cod === 200) {
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
        )
        const isInputCityEntered = isLoaded ?
            <div>
                <HomeH1>Choose your city:</HomeH1>
                <Wrapper>
                    <FormControl>
                        <Input value={this.state.inputCity} onChange={this.handleCurrentWeatherInput} placeholder="Insert city name here" ></Input>
                        <Button onClick={this.makeCurrentWeatherFetch}>Get current weather</Button>
                    </FormControl>
                    <h1>OR</h1>
                <CurrentWeatherWithGeoLocation value={this.state}/>; 
                </Wrapper>
                {cityName ?
                    <HomeH3>Current weather in city: {cityName} </HomeH3> :
                    <HomeH3> Please insert city name or write it corectly.</HomeH3>}
                <Wrapper>
                    <div>Current temperature: {currentTemp} &deg;C</div>
                    <div>Sensed temperature: {sensedTemp} &deg;C</div>
                    <div>Wind speed: {`${windSpeed} km/h`}</div>
                    <div>Wind direction:
                     <ArrowUpwardIcon
                            style={{ transform: `rotate(${windDirection}deg)` }} >
                        </ArrowUpwardIcon>
                    </div>
                    <div>{description}</div>
                </Wrapper>
            </div> :
            <div>
                <HomeH1>Choose your city</HomeH1>
                <FormControl>
                    <Input value={this.state.city} onChange={this.handleCurrentWeatherInput} placeholder="Insert city name here" ></Input>
                    <Button onClick={this.makeCurrentWeatherFetch}>Get current weather</Button>
                </FormControl>
                <HomeH1>No city entered</HomeH1>
                <p>OR</p>
                <CurrentWeatherWithGeoLocation value={this.state}/>
            </div>


        return (
            <div>
                {isInputCityEntered}
            </div>
        )
    }
}

export default Home;
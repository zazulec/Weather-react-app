import React, { Component } from 'react';
import { Input, FormControl } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { HomeH1, HomeH3 } from './styled/StyledHome';
import { Wrapper } from './styled/StyledWrapper';
import { CurrentWeatherContainer } from './styled/StyledCurrentWeatherContainer';
import { WeatherInfo } from './styled/StyledWeatherInfo';
import { Button } from './styled/StyledButton';
import { Data } from './styled/StyledData';
import { Text } from './styled/StyledText';

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
                {element.description}
            </div>
        )
        const isInputCityEntered = isLoaded ?
            <>
                <CurrentWeatherContainer>
                    <HomeH1>Choose your city:</HomeH1>
                    <Input value={this.state.inputCity} onChange={this.handleCurrentWeatherInput} placeholder="Insert city name here"></Input>
                    <Button onClick={this.makeCurrentWeatherFetch}>Get current weather</Button>
                </CurrentWeatherContainer>
                <WeatherInfo>
                    {cityName ?
                        <HomeH3>
                            Current weather in city:
                            <Text>{cityName}</Text>
                        </HomeH3> :
                        <HomeH3> Please insert city name or write it corectly.</HomeH3>}
                    <Data>
                        Current temperature:
                        <Text>{currentTemp} &deg;C</Text>
                    </Data>
                    <Data>
                        Sensed temperature:
                        <Text>{sensedTemp} &deg;C</Text>
                    </Data>
                    <Data>
                        Wind speed:
                        <Text>{`${windSpeed} km/h`}</Text>
                    </Data>
                    <Data>
                        Wind direction:
                        <Text>
                            <ArrowUpwardIcon
                                style={{ transform: `rotate(${windDirection}deg)` }} >
                            </ArrowUpwardIcon>
                        </Text>
                    </Data>
                    <Data>
                        Description:
                        <Text>{description}</Text>
                    </Data>
                </WeatherInfo>
            </>
            :
            <>
                <CurrentWeatherContainer>
                    <HomeH1>Choose your city</HomeH1>
                    <FormControl>
                        <Input value={this.state.city} onChange={this.handleCurrentWeatherInput} placeholder="Insert city name here" ></Input>
                        <Button color="disable" variant="contained" onClick={this.makeCurrentWeatherFetch}>Get current weather</Button>
                    </FormControl>
                    <HomeH1>No city entered</HomeH1>
                </CurrentWeatherContainer>
            </>


        return (
            <Wrapper>
                {isInputCityEntered}
            </Wrapper>
        )
    }
}

export default Home;
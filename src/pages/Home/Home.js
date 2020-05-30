import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, FormControl } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { H1 } from '../../styled/StyledH1';
import { H3 } from '../../styled/StyledH3';
import { Wrapper } from './styled/StyledWrapper';
import { CurrentWeatherContainer } from './styled/StyledCurrentWeatherContainer';
import { WeatherInfo } from './styled/StyledWeatherInfo';
import { Button } from './styled/StyledButton';
import { Data } from './styled/StyledData';
import { Text } from './styled/StyledText';
import { ACTION_TYPES } from '../../redux/actions';

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

    getWeatherData = (props) => {
        const FETCH_URL_DAY = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputCity}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`;
        const serverStatusCode = 200;

        fetch(FETCH_URL_DAY)
            .then(response => (response.json()))
            .then(result => {
                if (result.cod === serverStatusCode) {
                    this.setState({
                        isLoaded: true,
                        data: result,
                    })
                } else {
                    this.setState({
                        isLoaded: true,
                    })
                }
                this.props.actionCurrentStateToRedux(result)
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
        const { data, isLoaded, inputCity, city } = this.state;
        const { name, main, wind, weather } = data;
        const cityName = name;
        const currentTemp = main.temp;
        const sensedTemp = Math.round(main.feels_like);
        const windSpeed = wind.speed;
        const windDirection = wind.deg;
        const description = weather.map(element =>
            <div key={element.id}>
                {element.description}
            </div>
        )
        const isInputCityEntered = isLoaded ?
            <>
                <CurrentWeatherContainer>
                    <H1>Choose your city:</H1>
                    <Input
                        value={inputCity}
                        onChange={this.handleCurrentWeatherInput}
                        placeholder="Insert city name here"
                        style={{ color: 'white' }}>
                    </Input>
                    <Button
                        onClick={this.makeCurrentWeatherFetch}>
                        Get current weather
                    </Button>
                </CurrentWeatherContainer>
                <WeatherInfo>
                    {cityName ?
                        <H3>
                            Current weather in city:
                            <Text>{cityName}</Text>
                        </H3>
                        :
                        <H3> Please insert city name or write it corectly.</H3>}
                    <Data>
                        Description:
                        <Text>{description}</Text>
                    </Data>
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

                </WeatherInfo>
            </>
            :
            <>
                <CurrentWeatherContainer>
                    <H1>Choose your city</H1>
                    <FormControl>
                        <Input
                            value={city}
                            onChange={this.handleCurrentWeatherInput}
                            placeholder="Insert city name here"
                            style={{ color: 'white' }}>
                        </Input>
                        <Button
                            color="disable"
                            variant="contained"
                            onClick={this.makeCurrentWeatherFetch}>
                            Get current weather
                        </Button>
                    </FormControl>
                    <H1>No city entered</H1>
                </CurrentWeatherContainer>
            </>


        return (
            <Wrapper>
                {isInputCityEntered}
            </Wrapper>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    actionCurrentStateToRedux: (response) => dispatch({
        type: ACTION_TYPES.SAVE_CURRENT_WEATHER ,
        value: response,
    })
    
})

export default connect(null, mapDispatchToProps)(Home);


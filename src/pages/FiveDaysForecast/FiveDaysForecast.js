import React, { Component } from 'react';
import { Input, FormControl } from '@material-ui/core';
import { WeatherRechart } from '../../components/WeatherRechart/WeatherRechart';
import { RechartInput } from '../../components/RechartInput/RechartInput';
import { RechartInputContext } from '../../context/RechartInputContext';
import { Wrapper } from './styled/Wrapper';
import { Button } from './styled/StyledButton';
import { H1 } from '../../styled/StyledH1';
import { H3 } from '../../styled/StyledH3';
import { Text } from './styled/StyledText';
import { SmallWrapper } from './styled/SmallWrapper';

class FiveDaysForecast extends Component {

    state = {
        data: this.getInitialDataStateForFiveDays(),
        isLoaded: false,
        error: null,
        inputCity: "",

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
        const FETCH_URL_FIVE_DAYS = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${this.state.inputCity}&appid=2e2ff6c3d5791be198f04c78b94573e5`;
        const serverStatusCode = '200';

        fetch(FETCH_URL_FIVE_DAYS)
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
            })
            .catch(error => {
                this.setState({
                    data: this.getInitialDataStateForFiveDays(),
                    isLoaded: true,
                    error
                });
            })
    };

    static contextType = RechartInputContext;

    handleForecastInput = (event) => {
        event.preventDefault()
        this.setState({ inputCity: event.target.value })
    }

    makeForecastFetch = () => {
        this.getFiveDaysForecast()
        this.setState({ inputCity: '' })
    }

    render() {
        const { data, isLoaded, inputCity } = this.state;
        const { city, list } = data;
        const { rechartInputData } = this.context;
        const isInputCityEntered = isLoaded ?
            <SmallWrapper>
                <H1>Choose your city</H1>
                <FormControl>
                    <Input
                        value={inputCity}
                        onChange={this.handleForecastInput}
                        placeholder="Insert city name here"
                        style={{ color: 'white' }}>
                    </Input>
                    <Button
                        color="disable"
                        variant="contained"
                        onClick={this.makeForecastFetch}>
                        Get current weather
                    </Button>
                </FormControl>
                <H3>Weather forecast for city:{city.name}</H3>
                {list.length > 0 ?
                    <SmallWrapper>
                        <RechartInput data={data} />
                        {rechartInputData ?
                            <WeatherRechart data={data} />
                            :
                            <Text>Please choose date to display forecast rechart</Text>}
                    </SmallWrapper>
                    :
                    <Text>Please enter city name to display forecast</Text>}
            </SmallWrapper>
            :
            <SmallWrapper>
                <H1>Choose your city</H1>
                <FormControl>
                    <Input
                        value={inputCity}
                        onChange={this.handleForecastInput}
                        placeholder="Insert city name here"
                        style={{ color: 'white' }}>
                    </Input>
                    <Button
                        onClick={this.makeForecastFetch}>
                        Get weather forecast
                    </Button>
                </FormControl>
                <H1>No city entered</H1>
            </SmallWrapper>
        return (
            <Wrapper>
                {isInputCityEntered}
            </Wrapper>
        );
    }
};
    
export { FiveDaysForecast };
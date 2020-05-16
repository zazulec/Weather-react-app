import React, { Component } from 'react';
import { Input, FormControl } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { H1, H3 } from './styled/StyledTags';
import { Wrapper } from './styled/StyledWrapper';
import { CurrentWeatherContainer } from './styled/StyledCurrentWeatherContainer';
import { WeatherInfo } from './styled/StyledWeatherInfo';
import { Button } from './styled/StyledButton';
import { Data } from './styled/StyledData';
import { Text } from './styled/StyledText';

class Home extends Component {
/*@Piotr: w App.js używasz hooków a tu masz klasę - dobrze byłoby to ujednolicić i albo wszędzie hooki, albo wszedzie klasy ew. stateless funkcje*/
    state = {
        data: this.getInitialDataState(),
        isLoaded: false,
        error: null,
        inputCity: '',
    };
/*@Piotr: czemu robisz initial state jako funkcję? Ja zazwyczaj widuję to jako stałą po prostu const initialState = {} */
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
        /*@Piotr: nie sądzę żeby dobrym pomysłem było dodawanie czegokolwiek to this tej funkcji. Zapisz tego urla jako stałą const FETCH_URL_DAY = 'https://...' */
        this.FETCH_URL_DAY = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputCity}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`

        fetch(this.FETCH_URL_DAY)
            .then(response => (response.json()))
            .then(result => {
                if (result.cod === 200 /*@Piotr: tak zapisany numer to tzw. magic number - nie wiadmo czemu jest taki i skąd się wziął. Zapisz go do stałej i jakoś nazwij żeby było wiadomo czemu tu jest. Bo teraz nie za bardzo wiadomo po co jest ten else poniżej i kiedy się dzieje */) {
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
        /*@Piotr: możesz zdestrukturyzować też inputCity */
        const cityName = data.name;
        /*@Piotr: dla lepszej czytelności zdestrukturyzowałbym jeszcze data. Czyli np. const { name, main, wind, weather } = data; */
        const currentTemp = data.main.temp;
        const sensedTemp = Math.round(data.main.feels_like);
        const windSpeed = data.wind.speed;
        const windDirection = data.wind.deg;
        /*@Piotr: to poniżej nazywane jest partialem i przez niektórych uważane jako antypatern. Nie jest to błąd, ale jak czytasz potem tego JSX-a na dole, to masz wrażenie że {description} to jest string, bo tak się przyjęło zapisywać. Ja bym tą funkcję zrobił bezpośrednio w JSX*/
        const description = data.weather.map(element =>
            <div key={element.id}>
                {element.description}
            </div>
        )
        /*@Piotr: ten partial poniżej z kolei już trochę utrudnia czytanie tego kodu (duplikuje się). Za teriary operatora isLoaded wrzuciłbym tylko WeatherInfo a CurrentWeatherContainer i jego dzieciach sterowałbym propsami tylko*/
        const isInputCityEntered = isLoaded ?
            <>
                <CurrentWeatherContainer>
                    <H1>Choose your city:</H1>
                    <Input
                        value={this.state.inputCity}
                        onChange={this.handleCurrentWeatherInput}
                        placeholder="Insert city name here"
                        style={{ color: 'white' }}> {/*@Piotr: kolor weź z theme.js i btw. możesz zrbić z tego styled component jak chcesz więcej styli dodać. Wtedy const CityInput = styled(Input)`` i export Inputa tam*/}
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
                            value={this.state.city}
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
}

export default Home;
import React, { Component } from 'react';

class FiveDaysForecast extends Component {

    state = {
        data: this.getInitialDataStateFiveDays(),
        isLoaded: false,
        error: null,
        inputCity: 'Lukow',
    };

    getInitialDataStateFiveDays() {
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
                name: "",
            },
        }
    };

    FETCH_URL_FIVE_DAYS = `http://api.openweathermap.org/data/2.5/forecast?units=metric&q=${this.state.inputCity}&appid=2e2ff6c3d5791be198f04c78b94573e5`

    componentDidMount() {
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
                    data: this.getInitialDataStateFiveDays(),
                    isLoaded: true,
                    error
                });
            })
    };



    render() {
        const { data } = this.state;
        const cityName = data.city.name;
        const weatherInfo = data.list.map(element =>
            <div key={element.dt}>
                <p>{element.dt_txt}</p>
                <p>Temperature: {element.main.temp}</p>
                <p>Sensed temperature:{Math.round(element.main.feels_like)}</p>
                <p>Wind speed: {element.wind.speed}</p>
                <p>Wind direction: {element.wind.deg}</p>
                <p>{element.weather[0].description}</p> 
                
                
            </div>
        )

        return (
            <div>
                Five days forecast for city: {cityName}
                {weatherInfo}
            </div>
        )
    }
}

export default FiveDaysForecast;
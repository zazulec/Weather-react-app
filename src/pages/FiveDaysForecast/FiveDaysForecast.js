import React, { Component } from 'react';

class FiveDaysForecast extends Component {

    state = {
        data: this.getInitialDataStateFiveDays(),
        isLoaded: false,
        error: null,
        inputCity: 'Gdansk',
    };

    getInitialDataStateFiveDays() {
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
            name:"",
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
        return (
            <div>
                5 dniowa pogoda
            </div>
        )
    }
}

export default FiveDaysForecast;
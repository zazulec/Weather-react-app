import React, { Component } from 'react';



class Home extends Component {

    state = {
        data: this.getInitialDataState(),
        isLoaded: false,
        error: null,
        inputCity: 'Gdansk',
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
            name:"",
        }
    };

    FETCH_URL_DAY = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputCity}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`

    componentDidMount() {
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

  

    render() {
        const { data } = this.state;
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

        return (
            <div>
                <h1>Probably the best weather App in the World</h1>
                <h3 >Current weather in city{cityName} </h3>
                Current temperature: {currentTemp}
                <br></br>
                Sensed temperature: {sensedTemp}
                <br></br>
                Wind speed: {windSpeed}
                <br></br>
                Wind direction: {windDirection}
                <br></br>
                {description}
            </div>
        )
    }
}

export default Home;
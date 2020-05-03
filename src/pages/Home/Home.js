import React, { Component } from 'react';



class Home extends Component {

    state = {
        data: this.getInitialDataState(),
        isLoaded: false,
        error: null,
        currentTemp: {},
    }

    FETCH_URL = "http://api.openweathermap.org/data/2.5/weather?q=Gdansk&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5"

    componentDidMount() {
        fetch(this.FETCH_URL)
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

    getInitialDataState() {
        return {
            weather: [],
            main: {
                temp: null,
            },
        }
    }

    render() {
        const { data } = this.state
        const dayWeather = data.weather.map( element =>
            <div key={element.id}>
                {element.description}
            </div>

        )
        const currentTemp = data.main.temp;
        

        return (
            <div>
                <h1>Probably the best weather App in the World</h1>
                <h3 >Current temp</h3>
                {dayWeather}
                {currentTemp}
            </div>
        )
    }
}

export default Home;
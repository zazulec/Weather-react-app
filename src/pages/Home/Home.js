import React, { Component } from 'react';



class Home extends Component {

    state = {
        data: [],
        isLoaded: false,
        error: null,
        cityName: '',
    }

    FETCH_URL = "http://api.openweathermap.org/data/2.5/weather?q=Gdansk&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5"

    componentDidMount() {
        fetch(this.FETCH_URL)
            .then(response => { console.log('response DATA', response); return (response.json()) })
            .then(result => {
                console.log('result DATA', result)
                this.setState({
                    isLoaded: true,
                    data: result,
                })
                console.log('state DATA', this.state.data.weather[0].main, 'city name', this.state.data.name)
                console.log('state DATA', this.state.data)

            })
            .then(error => {
                this.setState({
                    data: [],
                    isLoaded: true,
                    error
                });
            })
    };



    render() {
        // this.city = this.state.data.map(name => {
        //     return <div key={id}>{name}</div>
        // });
        // const cityName = this.state.data.weather.map(  => {
        //     return (
        //         <div key={id}>
        //             {this.state.data.id}
        //         </div>
        //     )
        // });
        return (
            <div>
                <h1>Probably the best weather App in the World</h1>
                <h3 >Current temp</h3>
                <p>nie działa</p>

            </div>
        )
    }
}

export default Home;
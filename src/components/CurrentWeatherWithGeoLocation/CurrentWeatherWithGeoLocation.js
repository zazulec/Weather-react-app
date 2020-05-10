import React, { useContext, Component } from 'react';
// import GetCurrentGeoPosition from '../../context/GetCurrentPosition';

class CurrentWeatherWithGeoLocation extends Component {

    state = {
        latitude: null,
        longitude: null,
    }

    position = async () => {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => console.log(err)
        );
        console.log(this.state.latitude)
    }
    // const { currentGeoPosition, setGetCurrentGeoPosition } = useContext(GetCurrentGeoPosition);
    // const FETCH_URL_GEOLOCATION = `http://api.openweathermap.org/data/2.5/weather?lat=${props.currentGeoPosition.latitude}&lon=${props.currentGeoPosition.longitude}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`

    // console.log('geoPos', props.currentGeoPosition.latitude)
    //     const getCurrentWeatherWithGeoLocation = () =>  {
    //         fetch(FETCH_URL_GEOLOCATION)

    //     }
    render() {
        return (
            <div>
                <h1>Get current weather by geolocation</h1>
                <button onClick={this.position}>Get current weather</button>
            </div>
        )
    }
}

export default CurrentWeatherWithGeoLocation;
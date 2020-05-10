import React, { useContext } from 'react';
import GetCurrentGeoPosition from '../../context/GetCurrentPosition';

function CurrentWeatherWithGeoLocation(props) {

    const { currentGeoPosition, setGetCurrentGeoPosition } = useContext(GetCurrentGeoPosition);

    // const FETCH_URL_GEOLOCATION = `http://api.openweathermap.org/data/2.5/weather?lat=${props.currentGeoPosition.latitude}&lon=${props.currentGeoPosition.longitude}&units=metric&appid=2e2ff6c3d5791be198f04c78b94573e5`

// console.log('geoPos', props.currentGeoPosition.latitude)
    // const GetCurrentWeatherWithGeoLocation = () =>  {
    //     fetch(FETCH_URL_GEOLOCATION)

    // }

        return(
            <div>
                <h1>Get current weather by geolocation</h1>
                <button >Get current weather</button>
            </div>
        )
}

export default CurrentWeatherWithGeoLocation;
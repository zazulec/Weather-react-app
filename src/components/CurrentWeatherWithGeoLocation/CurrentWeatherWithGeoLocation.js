import React from 'react';

function CurrentWeatherWithGeoLocation() {

    const getGeoWeather = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
          }
          function getPosition(position) {
            console.log(position.coords.latitude, position.coords.longitude);
          }
    }

        return(
            <div>
                <h1>Get current weather by geolocation</h1>
                <button onClick={getGeoWeather}>Get current weather</button>
            </div>
        )
}

export default CurrentWeatherWithGeoLocation;
import React, { useContext } from 'react';
import GetCurrentGeoPosition from '../../context/GetCurrentPosition';

function CurrentWeatherWithGeoLocation() {

    const { currentGeoPosition, setGetCurrentGeoPosition } = useContext(GetCurrentGeoPosition);

    const getGeoWeather = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition);
          }
          function getPosition(position) {
            // console.log(position.coords.latitude, position.coords.longitude);
            setGetCurrentGeoPosition('text');
            
          }
    }
//     setExampleState({...exampleState,  masterField2: {
//         fieldOne: "c",
//         fieldTwo: {
//            fieldTwoOne: "d",
//            fieldTwoTwo: "e"
//            }
//         },
//    }})
        return(
            <div>
                <h1>Get current weather by geolocation</h1>
                <button onClick={getGeoWeather} value={currentGeoPosition}>Get current weather</button>
            </div>
        )
}

export default CurrentWeatherWithGeoLocation;
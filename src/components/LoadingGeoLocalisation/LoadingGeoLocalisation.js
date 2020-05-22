import React from 'react';

// interface LoadingGeoLocalisationProps {
//     data: DataThisComponent;
// };

// interface DataThisComponent {
//     isLoading: boolean;
//     longitude: Number;
//     latitude: Number;
// }

export function LoadingGeoLocalisation(props/*:LoadingGeoLocalisationProps*/) {
    
    const { isLoading, longitude, latitude } = props.data;
    const loadingGeoLocalisation = isLoading ?
        <>
            <h3>Your current position is:</h3>
            <p>latitude: Loading...</p>
            <p>longitude: Loading...</p>
        </>
        :
        <>
            <h3>Your current position:</h3>
            <p>latitude: {latitude}</p>
            <p>longitude: {longitude}</p>
        </>

    return (
        <>
            {loadingGeoLocalisation}
        </>
    )
}
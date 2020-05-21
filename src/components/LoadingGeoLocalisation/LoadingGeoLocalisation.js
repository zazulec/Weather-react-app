import React from 'react';

export function LoadingGeoLocalisation(props) {
    
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
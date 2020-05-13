import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {

    const mapStyles = {
        width: '40%',
        height: '40%',
    };

    return (
            <Map
                google={props.google}
                zoom={20}
                style={mapStyles}
                initialCenter={{
                    lat: props.state.latitude,
                    lng: props.state.longitude,
                }}
            >
                <Marker
                    onClick={props.onMarkerClick}
                    name={'Current location'}
                />
            </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD-cAqH3VApCmOxG30Gi89eEgGmo0AQkg4")
})(MapContainer);
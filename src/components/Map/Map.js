import React from 'react';
import { GoogleApiWrapper, Marker, Map } from 'google-maps-react';
import { Wrapper } from './styled/StyledWrapper';

const API_KEY = "AIzaSyD-cAqH3VApCmOxG30Gi89eEgGmo0AQkg4"

function MapContainer(props) {
   
    return (
        <Wrapper>
            <Map
                google={props.google}
                zoom={15}
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
        </Wrapper>
    )
}

export default GoogleApiWrapper({
    apiKey: (API_KEY)
})(MapContainer);
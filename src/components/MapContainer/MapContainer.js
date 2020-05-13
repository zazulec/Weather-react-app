import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {

    mapStyles = {
        width: '40%',
        height: '40%',
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={this.mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}>
                <Marker position={{ lat: 48.00, lng: -122.00 }} />
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD-cAqH3VApCmOxG30Gi89eEgGmo0AQkg4")
})(MapContainer);
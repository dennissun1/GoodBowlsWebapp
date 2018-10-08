import React from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class My_Map extends React.Component {
    render() {
        const position = [35.996435, -78.916603];
        return(
            <div>
                <Map center = {position} zoom = {13}>
                    <TileLayer
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                        url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
                        maxZoom={18}
                        id='mapbox.streets'
                        accessToken='pk.eyJ1IjoiZHN1bjk2IiwiYSI6ImNqbXBzNmZwaDFpZngza3F0MXh4Z2dvOXoifQ.q0ZZVXcQDfysTF-Jq2CJjA'
                    />
                    <Marker position={position} zoom>
                        <Popup>
                            Hello Word!
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default My_Map;
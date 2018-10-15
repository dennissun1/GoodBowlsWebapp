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
        const farmIcon = new L.Icon({
            iconUrl: require('./farm-marker.png'),
            shadowUrl: require('./marker-shadow.png')
        });
        return(
            <div>
                <Map center = {position} zoom = {8}>
                    <TileLayer
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                        url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}"
                        maxZoom={18}
                        id='mapbox.streets'
                        accessToken='pk.eyJ1IjoiZHN1bjk2IiwiYSI6ImNqbXBzNmZwaDFpZngza3F0MXh4Z2dvOXoifQ.q0ZZVXcQDfysTF-Jq2CJjA'
                    />
                    <Marker position={position} zoom>
                        <Popup>
                            <b>Durham Co-op Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits
                        </Popup>
                    </Marker>
                    <Marker position={[35.9111483,-79.0713636076655]} zoom>
                        <Popup>
                            <b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits
                        </Popup>
                    </Marker>
                    <Marker position={[35.8801334,-79.0660226]} zoom>
                        <Popup>
                            <b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits
                        </Popup>
                    </Marker>
                    <Marker position={[36.07355195,-79.09970025]} zoom>
                        <Popup>
                            <b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits
                        </Popup>
                    </Marker>
                    <Marker position={[35.3016102,-78.2229939]} icon={farmIcon} zoom>
                        <Popup>
                            <b>Wise Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes
                        </Popup>
                    </Marker>
                    <Marker position={[35.4574095,-77.6873196,-78.2229939]} icon={farmIcon} zoom>
                        <Popup>
                            <b>Jones Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes
                        </Popup>
                    </Marker>
                    <Marker position={[36.348511,-78.267849]} icon={farmIcon} zoom>
                        <Popup>
                            <b>Jones Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default My_Map;
import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min'
import './MyPureMap.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class MyPureMap extends React.Component {
    constructor(props) {
        global.farmIcon = new L.Icon({
            iconUrl: require('./farm-marker.png'),
            shadowUrl: require('./marker-shadow.png')
        });
        super(props);
        this.state = {
            map: null,
            updateFlag: false,
            updateLocation: null,
            popUp: null
        };
    }
    componentDidMount() {
        if (!this.state.map) {
            // eslint-disable-next-line
            this.state.map = L.map('map').setView([35.8, -78.5], 8);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiZHN1bjk2IiwiYSI6ImNqbXBzNmZwaDFpZngza3F0MXh4Z2dvOXoifQ.q0ZZVXcQDfysTF-Jq2CJjA'
            }).addTo(this.state.map);
            L.control.locate({
                locateOptions: {
                    maxZoom: 15,
                    enableHighAccuracy: true,
                }
            }).addTo(this.state.map);
            this.updateMarkers([35.996435, -78.916603], "<b>Durham Co-op Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits", "store");
            this.updateMarkers([35.9111483,-79.0713636076655],"<b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
            this.updateMarkers([35.8801334,-79.0660226],"<b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
            this.updateMarkers([36.07355195,-79.09970025],"<b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
            this.updateMarkers([35.3016102,-78.2229939], "<b>Wise Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
            this.updateMarkers([35.4574095,-77.6873196,-78.2229939],"<b>Jones Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
            this.updateMarkers([36.348511,-78.267849],"<b>Jones Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
            // this.updateRoutes([35.996435, -78.916603], [35.4574095,-77.6873196,-78.2229939]);
        }
    }
    componentWillUnmount() {
        this.state.map.remove();
        this.setState({map : null});
        global.farmIcon = null;
    }
    componentDidUpdate(prevProps, prevState) {

    }
    updateMarkers(location, popUp, type) {
        if (type === "store") {
            L.marker(location).addTo(this.state.map).bindPopup(popUp);
        }
        else if (type === "farm") {
            L.marker(location, {icon: global.farmIcon}).addTo(this.state.map).bindPopup(popUp);
        }
    }
    updateRoutes(from, to) {
        L.Routing.control({
           waypoints: [
               from,
               to
           ],
           routeWhileDragging: true
        }).addTo(this.state.map);
    }
    render() {
        return (
            <div id="map">
            </div>
        );
    }
}

export default MyPureMap;
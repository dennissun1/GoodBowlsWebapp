import React from 'react';
import L from 'leaflet';
import axios from 'axios';

import 'leaflet-routing-machine/dist/leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder';
import 'default-passive-events/dist/index';
import './MyPureMap.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
axios.get('http://localhost:5000/api')
    .then(function (response) {
    var res = JSON.stringify(response.data);
    alert(JSON.parse(res).address);
})
    .catch(function (error) {
    alert(error);
});

class MyPureMap extends React.Component {
    constructor(props) {
        global.farmIcon = new L.Icon({
            iconUrl: require('./farm-marker.png'),
            shadowUrl: require('./marker-shadow.png')
        });
        global.farms = L.featureGroup();
        global.stores = L.featureGroup();
        global.map = null;
        global.self_lat = null;
        global.self_lng = null;
        global.route = null;
        super(props);
        this.state = {
            updateFlag: false,
            updateLocation: null,
            popUp: null
        };
    }
    componentDidMount() {
        if (!global.map) {
            global.map = L.map('map').setView([35.8, -78.5], 8);
            L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                accessToken: 'pk.eyJ1IjoiZHN1bjk2IiwiYSI6ImNqbXBzNmZwaDFpZngza3F0MXh4Z2dvOXoifQ.q0ZZVXcQDfysTF-Jq2CJjA',
                maxZoom: 18,
                id: 'mapbox.streets',
                tileSize: 512,
                zoomOffset: -1,
                attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(global.map);
            // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            //     maxZoom: 18,
            //     id: 'mapbox.streets',
            //     accessToken: 'pk.eyJ1IjoiZHN1bjk2IiwiYSI6ImNqbXBzNmZwaDFpZngza3F0MXh4Z2dvOXoifQ.q0ZZVXcQDfysTF-Jq2CJjA'
            // }).addTo(this.state.map);
            this.updateMarkers([35.996435, -78.916603], "<b>Durham Co-op Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits", "store");
            this.updateMarkers([35.9111483,-79.0713636076655],"<b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
            this.updateMarkers([35.8801334,-79.0660226],"<b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
            this.updateMarkers([36.07355195,-79.09970025],"<b>Weaver Street Market</b><br /><br />Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
            this.updateMarkers([35.3016102,-78.2229939], "<b>Wise Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
            this.updateMarkers([35.4574095,-77.6873196,-78.2229939],"<b>Jones Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
            this.updateMarkers([36.348511,-78.267849],"<b>Jones Farms</b><br /><br />Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
            global.map.addLayer(global.farms);
            global.map.addLayer(global.stores);
            global.stores
                .on('click', (ev) => {
                    let coord = ev.latlng.toString().split(',');
                    let lat = coord[0].split('(')[1];
                    let lng = coord[1].split(')')[0];
                    if ((global.self_lat) && (global.self_lng)) {
                        if (global.route) {
                            global.map.removeControl(global.route);
                            global.route = null;
                        }
                        this.updateRoutes([global.self_lat, global.self_lng], [lat, lng]);
                    }
                })
                .on('popupclose', ()=>{
                    if (global.route) {
                        // global.route.spliceWaypoints(0, 2);
                        global.map.removeControl(global.route);
                        global.route = null;
                    }
                    //console.log("close");
                });
            let Empty = {

            };
            let Overlap = {
                "Farm": global.farms,
                "Stores": global.stores
            };
            L.control.layers(Empty, Overlap, {collapsed: false}).addTo(global.map);
            L.control.locate({
                keepCurrentZoomLevel: false,
                locateOptions: {
                    maxZoom: 15,
                    enableHighAccuracy: true,
                }
            }).addTo(global.map);
            global.map.on('locationfound', (e)=>{
                let coord = e.latlng.toString().split(',');
                global.self_lat = coord[0].split('(')[1];
                global.self_lng = coord[1].split(')')[0];
            }, {passive: true});
        }
    }
    componentWillUnmount() {
        global.map.remove();
        global.map = null;
        global.farmIcon = null;
    }
    componentDidUpdate(prevProps, prevState) {

    }
    updateMarkers(location, popUp, type) {
        if (type === "store") {
            L.marker(location).bindPopup(popUp).addTo(global.stores);
        }
        else if (type === "farm") {
            L.marker(location, {icon: global.farmIcon}).bindPopup(popUp).addTo(global.farms);
        }
    }
    updateRoutes(from, to) {
        global.route = L.Routing.control({
            waypoints: [
                from,
                to
            ],
            routeWhileDragging: false,
            geocoder: L.Control.Geocoder.nominatim()
        });
        global.route.addTo(global.map);
    }
    render() {
        return (
            <div id="map">
            </div>
        );
    }
}

export default MyPureMap;
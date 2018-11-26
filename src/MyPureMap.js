import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet/dist/leaflet.css';
import 'font-awesome/css/font-awesome.min.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder';
import 'default-passive-events/dist/index';
//import axios from 'axios';
import './MyPureMap.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class MyPureMap extends React.Component {
    constructor(props) {
        super(props);
        this.farmIcon = new L.Icon({
            iconUrl: require('./farm-marker.png'),
            shadowUrl: require('./marker-shadow.png')
        });
        this.farms = L.featureGroup();
        this.stores = L.featureGroup();
        this.map = null;
        this.self_lat = null;
        this.self_lng = null;
        this.route = null;
        this.lcontrol = null;
        super(props);
        this.state = {
            updateFlag: false,
            updateLocation: null,
            popUp: null,
            dbData: null
        };


    }
    componentDidMount() {
        const url = "/api";
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onload=function(e){
            if(http.readyState==4){
                if (http.status === 200){
                    var res = JSON.parse(http.response)
                    for (let row of res){
                        //only works for farms, add if statement for stores
                        this.updateMarkers([row.latitude,row.longitude], "<b>"+row.name+"</b>", row.address+"<br/><br/><b>Ingredients</b><br/>"+row.ingredients,row.type);
                    }
                    if (!this.map) {
                        this.map = L.map('map').setView([35.8, -78.5], 8);
                        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                            accessToken: 'pk.eyJ1IjoiZHN1bjk2IiwiYSI6ImNqbXBzNmZwaDFpZngza3F0MXh4Z2dvOXoifQ.q0ZZVXcQDfysTF-Jq2CJjA',
                            maxZoom: 18,
                            id: 'mapbox.streets',
                            tileSize: 512,
                            zoomOffset: -1,
                            attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        }).addTo(this.map);
                        this.updateMarkers([35.996435, -78.916603], "<b>Durham Co-op Market</b>", "Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits", "store");
                        this.updateMarkers([35.9111483,-79.0713636076655],"<b>Weaver Street Market</b>", "Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
                        this.updateMarkers([35.8801334,-79.0660226],"<b>Weaver Street Market</b>", "Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
                        this.updateMarkers([36.07355195,-79.09970025],"<b>Weaver Street Market</b>", "Chicken Burrito Style Bowl<br />Vegetables & Chicken over Rice<br />Sausage & Peppers Bowl with Cheese Grits","store");
                        
                        this.updateMarkers([35.4574095,-77.6873196,-78.2229939],"<b>Jones Farms</b>", "Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
//                        this.updateMarkers([36.348511,-78.267849],"<b>Bender Farms</b>", "Sweet Potatoes<br />Greens (Collards/Kale)<br />Summer Squash<br />Cauliflower<br />Peas<br />Corn<br />Tomatoes","farm");
                        this.map.addLayer(this.farms);
                        this.map.addLayer(this.stores);
                        this.stores.on('click', (ev)=>{
                            L.DomEvent.on(
                                document.getElementById('button1'),
                                'click',
                                () => {
                                    let coord = ev.latlng.toString().split(',');
                                    let lat = coord[0].split('(')[1];
                                    let lng = coord[1].split(')')[0];
                                    if ((this.self_lat) && (this.self_lng)) {
                                        this.updateRoutes([this.self_lat, this.self_lng], [lat, lng]);
                                    }
                                    else {
                                        alert("Please enable the locate service before using navigation!");
                                    }
                                }
                            );
                        });
                        this.farms.on('click', (ev)=>{
                            L.DomEvent.on(
                                document.getElementById('button1'),
                                'click',
                                () => {
                                    let coord = ev.latlng.toString().split(',');
                                    let lat = coord[0].split('(')[1];
                                    let lng = coord[1].split(')')[0];
                                    if ((this.self_lat) && (this.self_lng)) {
                                        this.updateRoutes([this.self_lat, this.self_lng], [lat, lng]);
                                    }
                                    else {
                                        alert("Please enable the locate service before using navigation!");
                                    }
                                }
                            );
                        });
                        let Empty = {};
                        let Overlap = {
                            "Farm": this.farms,
                            "Stores": this.stores
                        };
                        L.control.layers(Empty, Overlap, {collapsed: false}).addTo(this.map);
                        this.lcontrol = L.control.locate({
                            keepCurrentZoomLevel: true,
                            locateOptions: {
                                maxZoom: 15,
                                enableHighAccuracy: true,
                            }
                        });
                        this.lcontrol.addTo(this.map);
                        this.map.on('locationfound', (e)=>{
                            let coord = e.latlng.toString().split(',');
                            this.self_lat = coord[0].split('(')[1];
                            this.self_lng = coord[1].split(')')[0];
                        });
                        this.route = L.Routing.control({
                            position: "topleft",
                            routeWhileDragging: true,
                            collapsible: true,
                            show: false,
                            geocoder: L.Control.Geocoder.nominatim(),
                            lineOptions: {
                                styles: [{color: '#4B9CD3', opacity: 0.7, weight: 7}]
                            },
                            router: L.Routing.mapbox("pk.eyJ1IjoicWlhb2ZlbmdtYXJjbyIsImEiOiJjam85aWludHAwNWd2M3FtazBnMWJka2tjIn0.z7xc-bNrxVuieK6h71x7tg")
                        });
                        this.route.addTo(this.map);
                    }
                } else {
                    alert(http.statusText)
                }
            }
        }.bind(this)

    }
    componentWillUnmount() {
        this.map.remove();
        this.map = null;
        this.farmIcon = null;
    }
    componentDidUpdate(prevProps, prevState) {

    }
    updateMarkers(location, popup_title, popup_texts, marker_type) {
        let popup_directive = "&emsp;<button id='button1'>Directions</button><br/><br/>";
        if (marker_type === "store") {
            L.marker(location).bindPopup(popup_title + popup_directive + popup_texts).bindTooltip(popup_title, {direction: "left"}).openTooltip().addTo(this.stores);
        }
        else if (marker_type === "farm") {
            L.marker(location, {icon: this.farmIcon}).bindPopup(popup_title + popup_directive + popup_texts).bindTooltip(popup_title).openTooltip().addTo(this.farms);
        }
    }
    updateRoutes(from, to) {
        if (this.route) {
            this.route.setWaypoints([from, to]);
            this.route.show();
        }
    }
    render() {
        return (
            <div id="map">
            </div>
        );
    }
}

export default MyPureMap;
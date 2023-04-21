import React, { Component, Fragment } from "react";
import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";


Geocoder.init('AIzaSyCuLAWs4SkGprZtwige8ClrHMOEX2Tejf8');
export default class Map extends Component {
  

   componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(","));
        console.log(response);
      })};

 render() {
     
 }}
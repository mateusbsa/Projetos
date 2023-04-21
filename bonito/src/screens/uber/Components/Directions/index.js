import React from 'react';
import { View } from 'react-native';
import  Directions  from 'react-native-gesture-handler';
import MapViewDirections from 'react-native-maps-directions';


const directions = ({ destination, origin, onReady}) => <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCuLAWs4SkGprZtwige8ClrHMOEX2Tejf8"
    strokeWidth={3}
    strokeColor="#222"
/>;

export default Directions;
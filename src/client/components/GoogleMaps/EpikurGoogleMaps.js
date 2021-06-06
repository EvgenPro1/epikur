import React, {memo} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const googleMapCurrentProps = {
    center: {
        lat: 49.986432,
        lng: 36.230900
    },
    zoom: 17
};

function EpikurGoogleMaps() {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyABwpKfqjcCgsGGcFY2dhpb02HUPt_U4vk"
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={googleMapCurrentProps.center}
            zoom={googleMapCurrentProps.zoom}
        >
            { /* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
    ) : <></>
}

export default memo(EpikurGoogleMaps)
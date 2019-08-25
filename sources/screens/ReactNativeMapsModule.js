import React from 'react'

import MapView,
{
    Marker,
    PROVIDER_GOOGLE,
} from 'react-native-maps'

export default class ReactNativeMapsModule extends React.Component {
    static navigationOptions = {
        title: "React-Native-Maps",
    }

    render() {
        let marker = [
            {
                deskripsi: "Banyumanik Bus Stop",
                koordinat: {
                    lat: -7.073600,
                    lng: 110.410863,
                },
                value: "Location 1",
            },
            {
                deskripsi: "Terang Bangsa Schools",
                koordinat: {
                    lat: -6.956155,
                    lng: 110.393836,
                },
                value: "Location 2",
            },
            {
                deskripsi: "Kaligawe",
                koordinat: {
                    lat: -6.959655,
                    lng: 110.442736,
                },
                value: "Location 3",
            },
        ].sort(function(a,b){
            if(a.value < b.value) return -1;
            if(a.value > b.value) return 1;
            return 0;
        })

        return (
            <MapView
                provider = {PROVIDER_GOOGLE}
                ref = {ref => this.maps = ref}
                style = {{
                    flex: 1,
                }}
                initialRegion = {{
                    latitude: -6.9932,
                    longitude: 110.4203,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                minZoomLevel = {10}
                maxZoomLevel = {17.5}
                rotateEnabled = {false}
                onMarkerPress = {e => {}}
            >
                {marker.map((item, index) => {
                    return (
                        <Marker
                            key = {index.toString()}
                            coordinate = {{
                                latitude: item.koordinat.lat,
                                longitude: item.koordinat.lng,
                            }}
                            title = {item.value}
                            description = {item.deskripsi}
                        />
                    )
                })}
            </MapView>
        )
    }
}
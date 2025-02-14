import React, { useState, useEffect } from "react";
import { 
    View, 
    StyleSheet, 
    Button, 
    Linking, 
    PermissionsAndroid, 
    TouchableOpacity,
    Platform, 
    Text 
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MapComponent = () => {
    const [location, setLocation] = useState(null);
    const [region, setRegion] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const requestAndroidPermissions = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            ]);

            return (
                granted["android.permission.ACCESS_FINE_LOCATION"] === PermissionsAndroid.RESULTS.GRANTED ||
                granted["android.permission.ACCESS_COARSE_LOCATION"] === PermissionsAndroid.RESULTS.GRANTED
            );
        } catch (err) {
            console.warn(err);
            return false;
        }
    };

    useEffect(() => {
        let permissionGranted = false;

        const getLocation = async () => {
            if (Platform.OS === "android") {
                permissionGranted = await requestAndroidPermissions();
            } else {
                permissionGranted = true; // iOS handles location permission automatically
            }

            if (!permissionGranted) {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setLocation({ latitude, longitude });
                    setRegion({
                        latitude,
                        longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    });
                },
                (error) => setErrorMsg(error.message),
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
            );
        };

        getLocation();
    }, []);

    const zoomIn = () => {
        if (region) {
            setRegion((prevRegion) => ({
                ...prevRegion,
                latitudeDelta: prevRegion.latitudeDelta / 2,
                longitudeDelta: prevRegion.longitudeDelta / 2,
            }));
        }
    };

    const zoomOut = () => {
        if (region) {
            setRegion((prevRegion) => ({
                ...prevRegion,
                latitudeDelta: prevRegion.latitudeDelta * 2,
                longitudeDelta: prevRegion.longitudeDelta * 2,
            }));
        }
    };

    const reCenter = () => {
        if (location) {
            setRegion({
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            });
        }
    };

    const openInGoogleMaps = () => {
        if (location) {
            const url = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
            Linking.openURL(url);
        }
    };

    if (!region) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading map...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
        <MapView style={styles.map} region={region} showsUserLocation={true}>
            {location && (
                <Marker coordinate={location} title="Your Location" />
            )}
        </MapView>

        {/* Controls positioned at the top of the map */}
        <View style={styles.controls}>
            <TouchableOpacity onPress={zoomIn} style={styles.controlButton}>
                <Icon name="add-circle-outline" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={zoomOut} style={styles.controlButton}>
                <Icon name="remove-circle-outline" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={reCenter} style={styles.controlButton}>
                <Icon name="locate-outline" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={openInGoogleMaps} style={styles.controlButton}>
                <FontAwesome name="map-marker" size={35} color="white" />
            </TouchableOpacity>
        </View>

        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
    </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:300,
        // width:400,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    controls: {
        position: "absolute",
        bottom: 20,
        left: 10,
        right: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 10,
        borderRadius: 10,
    },
    controlButton: {
        padding: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    error: {
        color: "red",
        textAlign: "center",
        marginTop: 10,
    },
});


export default MapComponent;


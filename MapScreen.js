import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 53.477199624254105,
    longitude: -2.254635746685609,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Look! A Map!</Text>
      <View style={styles.mapContainer}>
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} title="Science Stuff" />
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3edbde",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    width: "80%",
    height: "60%",
    borderWidth: 2,
    borderColor: "black",
  },
  map: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});

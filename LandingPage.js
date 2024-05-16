import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hiya!</Text>
      <Button title="Lets go!" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default LandingPage;

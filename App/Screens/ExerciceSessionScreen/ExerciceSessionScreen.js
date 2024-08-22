import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText";

function ExerciceSessionScreen() {
  return (
    <View style={styles.container}>
      <AppText>Session Goes Here</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default ExerciceSessionScreen;

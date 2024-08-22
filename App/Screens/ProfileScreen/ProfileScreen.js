import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../../components/AppText";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <AppText>Profile Goes Here</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default ProfileScreen;

import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./style";

function AppScreen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

export default AppScreen;

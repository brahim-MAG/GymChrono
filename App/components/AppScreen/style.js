import { StyleSheet, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default styles;

import { StyleSheet, Platform } from "react-native";
import colorPalette from "../../config/colors";

const styles = StyleSheet.create({
  textStyle: {
    color: colorPalette.primary,
    ...Platform.select({
      /* ios: { fontSize: 20, fontFamily: "Avenir" },
      android: { fontSize: 20, fontFamily: "Avenir" }, */
    }),
  },
});

export default styles;

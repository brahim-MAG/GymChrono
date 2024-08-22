import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: colors.white,
    flexDirection: "row",
    Padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  inputStyle: {
    paddingStart: 6,
    marginLeft: 6,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flex: 1,
    //height: ,
  },
});

export default styles;

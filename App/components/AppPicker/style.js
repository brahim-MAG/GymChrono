import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: colors.white,
    flexDirection: "row",
    // padding: 15,*
    paddingStart: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    //marginVertical: 10,
  },
  picker: {
    width: "100%",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flex: 1,
    marginLeft: -8,
  },
});

export default styles;

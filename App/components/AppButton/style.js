import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.blueNights,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  styledText: {
    color: colors.lynxWhite,
    fontSize: 18,
    //textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default styles;

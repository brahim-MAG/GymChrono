import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  separator: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    width: "90%",
    height: 1,
    backgroundColor: colors.hintOfPensive,
  },
  renderRightView: {
    backgroundColor: "red",
    width: 70,
  },
});
export default styles;

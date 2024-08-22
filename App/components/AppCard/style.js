import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    padding: 20,
    margin: 10,
    backgroundColor: colors.white,
  },
  title: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  close: {
    width: 42,
  },
});

export default styles;

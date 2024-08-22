import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    flexDirection: "row",
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },

  avatar: {
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingBottom: 7,
  },
  subTitle: {
    fontSize: 14,
    color: colors.naval,
    flexShrink: 1,
  },
});

export default styles;

import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import colors from "../../config/colors";

function AppButton({ title, onClick, color = colors.primary }) {
  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor: color }]}
      onPress={onClick}
    >
      <Text style={styles.styledText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

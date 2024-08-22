import React from "react";
import { Text } from "react-native";
import styles from "./style";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.textStyle, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

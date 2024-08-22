import React from "react";
import { StyleSheet, Text } from "react-native";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.textStyle, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default AppText;

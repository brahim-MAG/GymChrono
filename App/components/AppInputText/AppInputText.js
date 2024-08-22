import React from "react";
import { TextInput, View } from "react-native";
import AppIcon from "../AppIcon";
import styles from "./style";
import colors from "../../config/colors";
import AppText from "../AppText";

function AppInputText({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <AppIcon
          name={icon}
          iconColor={colors.mazarineBlue}
          backgroundColor={colors.lynxWhite}
        />
      )}
      <TextInput
        style={styles.inputStyle}
        {...otherProps}
        placeholderTextColor={colors.hintOfPensive}
      />
      {otherProps.prefix && (
        <AppText style={{ padding: 8, color: colors.hintOfPensive }}>
          {otherProps.prefix}
        </AppText>
      )}
    </View>
  );
}

export default AppInputText;

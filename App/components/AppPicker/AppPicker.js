import React from "react";
import styles from "./style";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import colors from "../../config/colors";
import AppIcon from "../AppIcon";

function AppPicker({
  icon,
  options,
  selectedValue,
  onValueChange,
  placeholder,
  width = "100%",
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <AppIcon
          name={icon}
          iconColor={colors.mazarineBlue}
          backgroundColor={colors.lynxWhite}
        />
      )}
      <Picker
        placeholder={placeholder}
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        {...otherProps}
      >
        {options?.map((item) => (
          <Picker.Item
            key={item?.value}
            label={item?.label}
            value={item?.value}
          />
        ))}
      </Picker>
    </View>
  );
}

export default AppPicker;

import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../AppText";

function DeleteItem({
  onPress,
  color = colors.danger,
  iconColor = colors.white,
  icon = "trash-can",
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          backgroundColor: color,
          width: 70,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
      >
        <MaterialCommunityIcons name={icon} size={24} color={iconColor} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DeleteItem;

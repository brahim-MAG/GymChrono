import React from "react";
import { View } from "react-native";
import style from "./style";
import AppText from "../AppText";
import DeleteItem from "../DeleteItem";
import colors from "../../config/colors";

function AppCard({ title, subTitle, children, onClose }) {
  return (
    <View style={style.wrapper}>
      <View style={style.header}>
        <AppText style={style.title}>{title}</AppText>
        <View style={style.close}>
          <DeleteItem
            iconColor={colors.primary}
            color={colors.hintOfPensive}
            icon="close"
            onPress={onClose}
          />
        </View>
      </View>
      <AppText>{subTitle}</AppText>
      {children}
    </View>
  );
}

export default AppCard;

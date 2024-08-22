import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import styles from "./style";
import AppText from "../AppText";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import colors from "../../config/colors";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
function AppListItem({
  avatar = <FontAwesome6 name="circle-user" size={24} color="black" />,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.lynxWhite}>
          <View style={styles.wrapper}>
            <View style={styles.avatar}>{avatar}</View>
            <View style={styles.details}>
              {title && (
                <AppText style={styles.title} numberOfLines={1}>
                  {title}
                </AppText>
              )}
              {subTitle && (
                <AppText
                  style={styles.subTitle}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {subTitle}
                </AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default AppListItem;

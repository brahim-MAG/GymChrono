import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileScreen from "../Screens/ProfileScreen";
import ExerciceSessionScreen from "../Screens/ExerciceSessionScreen";
import FeedNavigator from "./FeedNavigator";
import navigation from "../config/navigation";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={navigation.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="face-man-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigation.ENTRAINEMENT}
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="kettlebell"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigation.SEANCE}
        component={ExerciceSessionScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="format-list-checks"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;

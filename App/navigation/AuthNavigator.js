import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserRegistritionScreen from "../Screens/UserRegistritionScreen";
import MessageScreen from "../Screens/MessageScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{ headerShown: false }}
      name="Registrattion"
      component={UserRegistritionScreen}
    />
    <Stack.Screen
      name="Messages"
      component={MessageScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

import React from "react";
import UserRegistritionScreen from "./App/Screens/UserRegistritionScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppButton from "./App/components/AppButton";
import AppScreen from "./App/components/AppScreen";
import AuthNavigator from "./App/navigation/AuthNavigator";
import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";

const Link = () => {
  const navigate = useNavigation();
  return (
    <AppButton
      title="got to detail"
      onClick={() => navigate.navigate("TweetDetail", { id: 12 })}
    />
  );
};

const Account = () => (
  <AppScreen>
    <Text>Account page</Text>
  </AppScreen>
);

const Tweet = ({ navigation }) => (
  <View>
    <Text>Tweet </Text>
    <Link />
  </View>
);

const TweetDetail = ({ route }) => (
  // useRoute
  <View>
    <Text>Tweet Detail {route.params.id}</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "back",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweet}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

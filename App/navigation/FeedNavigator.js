import { createStackNavigator } from "@react-navigation/stack";
import TrainingScreen from "../Screens/TrainingScreen";
import AddTrainingScreen from "../Screens/AddTrainingScreen";
import navigation from "../config/navigation";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={navigation.TARINING}
      options={{ headerShown: false }}
      component={TrainingScreen}
    ></Stack.Screen>
    <Stack.Screen
      name={navigation.ADD_TRAINING}
      options={{ headerShown: false }}
      component={AddTrainingScreen}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default FeedNavigator;

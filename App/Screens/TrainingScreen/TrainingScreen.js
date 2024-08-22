import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import navigation from "../../config/navigation";
import AppScreen from "../../components/AppScreen";

function TrainingScreen() {
  const navigate = useNavigation();
  const handleAddTraining = () => {
    navigate.navigate(navigation.ADD_TRAINING);
  };
  return (
    <AppScreen>
      <View style={styles.container}>
        <AppButton
          title="Commencer un execrice"
          onClick={() => handleAddTraining()}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default TrainingScreen;

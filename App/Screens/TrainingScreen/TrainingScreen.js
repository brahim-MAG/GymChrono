import React/* , { useEffect } */ from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

//import { getAllExercices } from "../../database/exercice";
import AppButton from "../../components/AppButton";
import navigation from "../../config/navigation";
import AppScreen from "../../components/AppScreen";

function TrainingScreen() {
  const navigate = useNavigation();
  const handleAddTraining = () => {
    navigate.navigate(navigation.ADD_TRAINING);
  };

 /*  useEffect(() => {
    getAllExercices();
  }, []); */

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

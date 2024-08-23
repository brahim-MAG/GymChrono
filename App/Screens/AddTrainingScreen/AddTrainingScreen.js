import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppScreen from "../../components/AppScreen";
import AddExerciceForm from "../../components/AddExerciceForm";
import ExerciceCard from "../../components/ExerciceCard";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import navigation from "../../config/navigation";
import { addExercice, getAllExercices } from "../../database/exercice";

function AddTrainingScreen() {
  const navigate = useNavigation();
  const [exercices, setExecices] = useState([]);

  const handleDeleteExercice = (exerciceId) => {
    setExecices(exercices.filter((item) => item.id !== exerciceId));
  };
  const handleAddExercice = (newExercice) => {
    setExecices([...exercices, newExercice]);
  };

  const handleAddExercices = async () => {
    exercices.forEach((exercie) =>
      addExercice(exercie.typeExercice, exercie.poid, exercie.repetition)
    );
    //navigate.navigate(navigation.TARINING);
  };

  return (
    <AppScreen>
      <FlatList
        data={exercices}
        keyExtractor={(exercice) => exercice.id.toString()}
        renderItem={({ item }) => (
          <ExerciceCard
            exercice={{ ...item }}
            onDeleteExercice={handleDeleteExercice}
          />
        )}
        ListFooterComponent={
          <>
            <AddExerciceForm
              newId={exercices.length}
              onAddExercice={(newExercice) => handleAddExercice(newExercice)}
            />
            <View style={styles.footerBtnscontainer}>
              <View style={styles.btn}>
                <AppButton
                  color={colors.royalGreen}
                  title="Enregistrer"
                  onClick={() => handleAddExercices()}
                />
              </View>
              <View style={styles.btn}>
                <AppButton
                  title="Annuler"
                  color={colors.blodyRed}
                  onClick={() => navigate.navigate(navigation.TARINING)}
                />
              </View>
            </View>
          </>
        }
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  footerBtnscontainer: {
    margin: 12,
    flex: 1,
    gap: 12,
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
});

export default AddTrainingScreen;

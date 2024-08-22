import React from "react";
import { View, StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../../components/form";
import colors from "../../config/colors";
import referentielTraining from "../../config/referentielTraining";

function AddExerciceForm({ newId, onAddExercice }) {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ repetition: 0, poid: 0 }}
        onSubmit={(value) => onAddExercice({ id: newId, ...value })}
      >
        <View style={styles.typeExerciceField}>
          <AppFormPicker name="typeExercice" options={referentielTraining} />
        </View>
        <View style={styles.fieldsContainer}>
          <View style={styles.field}>
            <AppFormField
              name="repetition"
              keyboardType="numeric"
              placeholder="Répetirion: 0"
              prefix="fois"
            />
          </View>
          <View style={styles.field}>
            <AppFormField
              name="poid"
              keyboardType="numeric"
              placeholder="Poid: 0"
              prefix="Kg"
            />
          </View>
        </View>
        <SubmitButton title="Ajouter Exercice" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.hintOfPensive,
    borderRadius: 8,
    padding: 8,
    margin: 12,
  },
  typeExerciceField: {
    marginTop: 5,
  },
  fieldsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  field: {
    flex: 1,
    alignContent: "center",
  },
});

export default AddExerciceForm;

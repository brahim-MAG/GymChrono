import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppCard from "../AppCard";
import colors from "../../config/colors";
import referentielTraining from "../../config/referentielTraining";

function ExerciceCard({ exercice, onDeleteExercice }) {
  const typeExercice = referentielTraining.find(
    (item) => item.value === exercice?.typeExercice
  );

  return (
    <View style={styles.container}>
      <AppCard
        title={`Exercice N: ${exercice?.id}`}
        onClose={() => onDeleteExercice(exercice?.id)}
      >
        <View style={styles.header}>
          <Text style={styles.cell}>Exercice</Text>
          <Text style={styles.cell}>Rep</Text>
          <Text style={styles.cell}>Poid / Kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>{typeExercice?.label}</Text>
          <Text style={styles.cell}>{exercice?.repetition}</Text>
          <Text style={styles.cell}>{exercice?.poid}</Text>
        </View>
      </AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.hintOfPensive, // Light background for header
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.lynxWhite,
    paddingVertical: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    //borderTopEndRadius: 15,
    // borderBottomWidth: 1,
    // borderColor: "#ccc",
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});

export default ExerciceCard;

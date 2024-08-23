import { gymChnonoDatabase } from "./global";

export const addExercice = async (type, poid, repetition) => {
  await gymChnonoDatabase.runSync(
    "INSERT INTO exercice ( poid, repetition, type, margit) VALUES (?, ?, ?, ?);",
    [Number(poid), Number(repetition), type, "bingo"]
  );
};

export const getAllExercices = async () => {
  const allRows = await gymChnonoDatabase.getAllSync("SELECT * FROM exercice");
  return allRows;
};

import * as SQLite from "expo-sqlite";
export const gymChnonoDatabase = SQLite.openDatabaseSync("gymchronos.db");

export const initDatabase = async () => {
  (await gymChnonoDatabase).execAsync(
    `
    CREATE TABLE IF NOT EXISTS exercice (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    poid INTEGER, 
    repetition INTEGER, 
    type TEXT);
    `
  );
};

export const initAndSetupDatabase = async () => {
  await initDatabase();
};

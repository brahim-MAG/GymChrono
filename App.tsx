import React from "react";
import { SQLiteProvider, type SQLiteDatabase } from "expo-sqlite";
import { NavigationContainer } from "@react-navigation/native";

import { initAndSetupDatabase } from "./App/database/global";
import navigationTheme from "./App/navigation/navigationTheme";
import AppNavigator from "./App/navigation/AppNavigator";

export default function App() {
  return (
    <SQLiteProvider
      databaseName="gymchronos.db"
      onInit={() => initAndSetupDatabase()}
    >
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SQLiteProvider>
  );
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {}

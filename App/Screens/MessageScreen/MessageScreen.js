import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { initialMessages } from "../../config/mockData";
import AppListItem from "../../components/AppListItem";
import AppScreen from "../../components/AppScreen";
import styles from "./style";
import DeleteItem from "../../components/DeleteItem";

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (item) => {
    setMessages(messages.filter((m) => m.id !== item.id));
  };

  return (
    <AppScreen>
      <View style={{ padding: 2 }}>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id}
          renderItem={({ item }) => (
            <AppListItem
              onPress={() => {
                //
              }}
              title={item.Title}
              subTitle={item.description}
              renderRightActions={() => (
                <DeleteItem onPress={() => handleDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          refreshing={refreshing}
          onRefresh={() => setMessages(initialMessages)}
        />
      </View>
    </AppScreen>
  );
}

export default MessageScreen;

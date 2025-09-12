import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleListOfGoals = () => {
    setGoals((goals) => [
      ...goals,
      { text: goal, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals!"
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="Add Goal" onPress={handleListOfGoals} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.text}</Text>
            </View>
          )}
          alwaysBounceVertical={false}
          keyExtractor={(item, key) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  listItem: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 2,
    borderColor: "green",
  },
});

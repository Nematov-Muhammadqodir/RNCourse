import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const { setGoals, goals } = props;
  const [goal, setGoal] = useState("");
  const handleListOfGoals = () => {
    setGoals((goals) => [
      ...goals,
      { text: goal, id: Math.random().toString() },
    ]);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goals!"
        value={goal}
        onChangeText={(text) => setGoal(text)}
      />
      <Button title="Add Goal" onPress={handleListOfGoals} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});

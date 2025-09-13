import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const { setGoals, goals, isModalVisible, setIsModelVisible } = props;
  const [goal, setGoal] = useState("");
  const handleListOfGoals = () => {
    setGoals((goals) => [
      ...goals,
      { text: goal, id: Math.random().toString() },
    ]);
    setIsModelVisible(false);
  };
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals!"
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleListOfGoals} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => setIsModelVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 24,
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
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row-reverse",
    gap: 8,
  },
  button: {
    marginHorizontal: 8,
    width: "40%",
  },
});

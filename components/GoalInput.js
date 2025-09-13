import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Pressable,
  Text,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const { setGoals, goals, isModalVisible, setIsModelVisible } = props;
  const [goal, setGoal] = useState("");
  const handleListOfGoals = () => {
    if (goal === "") return;
    setGoals((goals) => [
      ...goals,
      { text: goal, id: Math.random().toString() },
    ]);
    setIsModelVisible(false);
  };
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <Image
        source={require("../assets/images/target.jpg")}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals!"
          value={goal}
          onChangeText={(text) => setGoal(text)}
          placeholderTextColor="white"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Pressable onPress={handleListOfGoals}>
              <Text style={styles.text}>Add Goal</Text>
            </Pressable>
          </View>
          <View style={styles.cancel}>
            <Pressable onPress={() => setIsModelVisible(false)}>
              <Text style={styles.text}>Cancel</Text>
            </Pressable>
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
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 16,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "rgb(35, 46, 199)",
    borderRadius: 6,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row-reverse",
    gap: 8,
  },
  button: {
    marginHorizontal: 8,
    width: "40%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "green",
  },
  cancel: {
    marginHorizontal: 8,
    width: "40%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
    transform: [{ scale: 1.2 }],
  },
  text: {
    color: "white",
    letterSpacing: 1,
    fontWeight: "bold",
  },
});

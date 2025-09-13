import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isModalVisible, setIsModelVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const modalVisibleHandler = () => {
    setIsModelVisible(true);
  };

  const handleDeleteListItem = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addBtnContainer}>
          <Pressable onPress={modalVisibleHandler} style={styles.button}>
            <Text style={styles.btnText}>Add new Goal!</Text>
          </Pressable>
        </View>
        <GoalInput
          setGoals={setGoals}
          goals={goals}
          isModalVisible={isModalVisible}
          setIsModelVisible={setIsModelVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                handleDeleteListItem={handleDeleteListItem}
              />
            )}
            alwaysBounceVertical={false}
            keyExtractor={(item, key) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    position: "relative",
  },
  goalsContainer: {
    flex: 5,
  },
  addBtnContainer: {
    alignItems: "center",
  },
  button: {
    // borderWidth: 1,
    // borderColor: "green",
    padding: 10,
    // borderRadius: 3,
    width: "50%",
    // backgroundColor: "#5c3b8c",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
    color: "white",
  },
});

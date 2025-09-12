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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalVisible, setIsModelVisible] = useState(false);
  const [goal, setGoal] = useState("");
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
    <View style={styles.appContainer}>
      <Button title="Add new Goal!" onPress={modalVisibleHandler} />
      <GoalInput
        setGoals={setGoals}
        goals={goals}
        isModalVisible={isModalVisible}
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
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});

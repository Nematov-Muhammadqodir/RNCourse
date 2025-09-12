import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const { itemData, handleDeleteListItem } = props;
  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={() => handleDeleteListItem(itemData.item.id)}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 2,
    borderColor: "green",
  },
  goalText: {
    padding: 8,
  },
});

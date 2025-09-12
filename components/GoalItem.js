import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  const { itemData } = props;
  return (
    <View style={styles.listItem}>
      <Text>{itemData.item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 2,
    borderColor: "red",
  },
});

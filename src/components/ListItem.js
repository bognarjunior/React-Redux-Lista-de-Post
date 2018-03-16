import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ListItem = ({ item, onItemPress }) => {
  const { title } = item;
  return (
    <TouchableOpacity style={style.itemStyle} onPress={() => onItemPress(item.id)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  itemStyle: {
    marginBottom: 10
  }
});

export default ListItem;

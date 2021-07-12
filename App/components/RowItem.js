import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#36B1F0",
    marginBottom: 1,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  icon: {
    paddingRight: 30,
  },
});

export const RowItem = ({ onPress = () => {}, name, color, iconName }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <View style={[styles.row, { backgroundColor: color }]}>
      <Text style={styles.text}>
        <Icon iconStyle={styles.icon} name={iconName} type="font-awesome" />
        {name}
      </Text>
    </View>
  </TouchableOpacity>
);

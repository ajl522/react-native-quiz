import React from "react";
import { ScrollView, StatusBar } from "react-native";
import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";
import sportQuestions from "../data/sports";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      iconName="rocket"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#36b1f0",
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#799496"
      iconName="compass"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#799496",
        })
      }
    />
    <RowItem
      name="Computers"
      color="#49475B"
      iconName="desktop"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B",
        })
      }
    />
    <RowItem
      name="Sports"
      color="#9451da"
      iconName="futbol-o"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Sports",
          questions: sportQuestions,
          color: "#4947BB",
        })
      }
    />
  </ScrollView>
);

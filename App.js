import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";
import Card from "./components/Card";

export default function App() {
  const [task, setTask] = useState("");
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(1);

  const addCard = () => {
    setCards([...cards, task]);
    setCount(count + 1);
    setTask("");
  };
  return (
    <View style={styles.main}>
      <View style={styles.heading}>
        <Text style={styles.headingtext}>Today's tasks</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <ScrollView>
            <Card name="Physics" />
            <Card name="Chemisty" />
            <Card name="Math" />
            {cards.map((task, index) => (
              <Card key={index} name={task} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.newcard}>
          <TextInput
            placeholder="Enter your task here"
            style={styles.textInput}
            value={task}
            onChangeText={(task) => setTask(task)}
          />
          <Button title="Add" onPress={addCard} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ddd",
    flex: 1, // Use flex instead of height/width to make it responsive
  },
  heading: {
    flex: 1,
  },
  headingtext: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 100,
    marginLeft: 20,
  },
  body: {
    flex: 3,
  },
  card: {
    flex: 3,
  },
  newcard: {
    flex: 1,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

// You can define more styles as needed

import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Card = (props) => {
  const [isDone, setIsDone] = useState(false);

  const toggleStatus = () => {
    setIsDone(!isDone);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={isDone ? styles.doneText : styles.pendingText}>
          {props.name}
        </Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={toggleStatus} style={styles.checkBtn}>
          <Text>{isDone ? "✅" : "⬛"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 2,
    elevation: 50,
    shadowColor: "black",
    margin: 10,
    padding: 6,
  },
  pendingText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
  },
  doneText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 10,
    textDecorationLine: "line-through",
    textDecorationColor: "blue",
  },
  checkBtn: {
    borderRadius: 50,
  },
  btn: {
    justifyContent: "center",
  },
});

export default Card;

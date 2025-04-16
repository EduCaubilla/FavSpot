import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native"
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";


function PlaceForm() {
const [enteredTitle, setEnteredTitle] = useState("")

function changeTitleHandler(enteredText) {
  setEnteredTitle(enteredText)
}

    return (
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle}/>
        </View>
        <ImagePicker />
      </ScrollView>
    );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 25
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.primary500
  },
  input: {
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 10
  }
})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

let firstweight = 100;
let firstheight = 100;

export default function App() {
  const [weight, setweight] = useState(firstweight)
  const [height, setheight] = useState(firstheight)

 

  const change = () => {
    setweight(firstweight)
    setheight(firstheight)
  }
  return (
    <View>
      <TextInput
        onChangeText={setweight}
        style={styles.input}>
      </TextInput>

      <TextInput
        onchanceText={setheight}
        style={styles.input}>
      </TextInput>

      <Button
        onPress={change}
        style={styles.button}>
      </Button>

      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: firstheight,
    weight: firstweight,
    backgroundColor: 'green',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    placeholder: "Enter ",
    borderColor: 'black',
    height: 40,
    weight: 70,
  },
  button: {
    title: 'Chance',
    titleColor:'black',
    height: 50,
    weight: 70,

  }
});

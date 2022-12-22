import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const App = () => {
  const [number1, setnumber1] = useState("")
  const [number2, setnumber2] = useState("")
  const [resault, setresault] = useState(0)
  

  const toplama = () => {
    let cem = ((+number1) + (+number2))
    setresault(cem)
  }
  const cixma = () => {
    let ferq = ((+number1) - (+number2))
    setresault(ferq)
  }
  const vurma = () => {
    let hasil = ((+number1) * (+number2))
    setresault(hasil)
  }
  const bolme = () => {
    let qismet = ((+number1) / (+number2))
    setresault(qismet)
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setnumber1}
        value={number1}

      />
      <TextInput
        style={styles.input}
        onChangeText={setnumber2}
        value={number2}
      />

      < View style={styles.container}>
       
        <Button onPress={toplama} title='+'></Button>
        <Button onPress={cixma} title='-'></Button>
        <Button onPress={vurma} title='x'></Button>
        <Button onPress={bolme} title=':'></Button>
        <Text style={styles.text}> Resault: {resault} </Text>
       
      </View>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'row',
    padding: 16,
  },
  input: {
    height: 40,
    weight: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
    text:{
      fontSize: 25,
      fontWeight: 'bold',
      color: 'red'
    }
});

export default App
import { Text, View, Code } from 'react-native';
import Code from './17.12.homework/17.12-homework/code';
export default function App() {
  return (
    <View style={{flex:1, padding:'5%'}}>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: '24' }}>Follow New Friends</Text>
        <Text style={{ color: '#979a9e' }}>Follow Friends You Know</Text>
      </View>

      <Code></Code>
      <Code></Code>
      <Code></Code>
      <Code></Code>
      <Code></Code>
      <Code></Code>
      <Code></Code>

    </View>
  );
}
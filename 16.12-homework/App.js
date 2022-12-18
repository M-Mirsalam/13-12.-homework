import { } from 'expo-status-bar';
import { StyleSheet, Text, View, flex, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, padding: '5%', backgroundColor: "white", borderRadius: 20 }}>

      <View style={{ padding: 5, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text >16 Dec 2022</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Mirsalam Miriyev</Text>
        </View>
        <View>
          <View >
            <Image source={{
              uri: "https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-vector-business-man-icon-png-image_966609.jpg",
              width: 50, height: 50
            }} />


          </View>
        </View>

      </View >

      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: '5%' }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Projects</Text> </View>

      <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
        <Text>Website</Text>
        <Text>Mobile App</Text>
        <Text>Research</Text>
      </View >

      <View style={{ backgroundColor: 'white',  flexDirection: 'row', padding: 20, justifyContent: 'space-between' }}>
        <View style={{ backgroundColor: '#ff773d', width: 140, height: 190, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/25/25643.png",
            width: 20,
            height: 20
          }} />
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "white", textAlign: 'center' }}>Componed Task</Text>
          <Text style={{ fontWeight: "bold", fontSize: 24, color: "white", textAlign: 'center' }}>10</Text>
        </View>
        <View style={{ backgroundColor: '#4c2b5a', width: 140, height: 190, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/223/223404.png",
            borderRadius: "50%",
            width: 20,
            height: 20

          }} />
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "white", textAlign: 'center' }}>In Progres</Text>
          <Text style={{ fontWeight: "bold", fontSize: 24, color: "white", textAlign: 'center' }}>07</Text>
        </View>

      </View >

      <View style={{ padding: 5, backgroundColor: 'white', height: 40 }}>
        <Text style={{ color: '#cacaca' }}>IN PROGRES</Text>
      </View >
<View style={{}}>
      <View style={{ height: 120, backgroundColor: '#fef4eb', borderRadius: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Design a landing page for WP dark</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Mode Pro</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-around", padding: 10 }}>
          <button style={{ backgroundColor: '#ff773d', width: 60, height: 20, borderRadius: 10 }}>Aug 2</button>
          <button style={{ backgroundColor: '#a492aa', width: 120, height: 20, borderRadius: 10 }}>Landing Page</button>
        </View>
      </View >

      <View style={{ height: 120,  backgroundColor: '#fef4eb', borderRadius: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Design a landing page for WP dark</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Mode Pro</Text>
        <View style={{ flexDirection: 'row', justifyContent: "space-around", padding: 10 }}>
          <button style={{ backgroundColor: '#ff773d', width: 60, height: 20, borderRadius: 10 }}>Aug 2</button>
          <button style={{ backgroundColor: '#a492aa', width: 120, height: 20, borderRadius: 10 }}>Landing Page</button>
        </View>
      </View >
</View>
    </View >

  );
}


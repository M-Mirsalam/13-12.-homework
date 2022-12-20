import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'

let myapp = [
  {
    title: "Slack",
    size: "101 MB - Used moments ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '50%', marginRight: 20 }}
      source={{ uri: 'https://w7.pngwing.com/pngs/233/200/png-transparent-slack-technologies-computer-icons-icon-design-slacklogo-text-computer-logo.png' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>
  },
  {
    title: "DU Battery Saver",
    size: "37 MB - Used moment ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '10%', marginRight: 20 }}
      source={{ uri: 'https://lh3.googleusercontent.com/QBFV5xuwYaHgcoywiC3HUmtA56g6v1c9SPI4imCuaXSLJ51wRFusPjsURabl-9m-qg' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>
  },
  {
    title: "Google",
    size: "37 MB - Used 11 min ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '10%', marginRight: 20 }}
      source={{ uri: 'https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>
  },
  {
    title: "YouTube",
    size: "300 MB - Used 42 min ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '10%', marginRight: 20 }}
      source={{ uri: 'https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone.png' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>

  },
  {
    title: "Facebook",
    size: "446 MB - Used 4 hr ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '10%', marginRight: 20 }}
      source={{ uri: 'https://www.freepnglogos.com/uploads/facebook-logo-13.png' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>

  },
  {
    title: "Flipboard",
    size: "246 MB - Used 15 hr ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '10%', marginRight: 20 }}
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flipboard_isotype.png' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>

  },
  {
    title: "Google Photos",
    size: "406 MB - Used yesterday",
    image: <Image style={{ width: 35, height: 35, borderRadius: '50%', marginRight: 20 }}
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Google_Photos_icon_%282015-2020%29.svg/1200px-Google_Photos_icon_%282015-2020%29.svg.png' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>

  },
  {
    title: "Crome Canary",
    size: "198 MB - Used 2 day ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '50%', marginRight: 20 }}
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Chrome-canary-logo.svg/1200px-Chrome-canary-logo.svg.png' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>UPDATE</Text></button>

  },
  {
    title: "Solid Explore File Manager",
    size: "27 MB - Used 2 day ago",
    image: <Image style={{ width: 35, height: 35, borderRadius: '10%', marginRight: 20 }}
      source={{ uri: 'https://play-lh.googleusercontent.com/_sX2KdkFOwzvT3J8dmcLcYAa6mDQG6OBweFxFN6mwwpIY0SMjuEbo6wsjfUhjN0DSA' }} />,
    button: <button style={{ width: 80, height: 30, backgroundColor: 'white', border: '4', borderColor: '#0ed958', borderRadius: '10%' }}><Text TextStyle={{ fontWeight: 'bold', fontSize: '20', color: 'white' }}>OPEN</Text></button>

  },
]

export default function App() {
  return (
    <View>
      <FlatList
        data={myapp}
        renderItem={({ item }) => {
          return < View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
           
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>{item.image}</View>

              <View>
                <Text style={{ fontSize: '20', fontWeight: 'bold' }}> {item.title} </Text>
                <Text>{item.size} </Text>
              </View>
            </View>
            <View>{item.button}</View>

          </View>


        }}

      />

    </View>
  )
}
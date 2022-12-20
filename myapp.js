import { Button, StyleSheet, Text, View } from 'react-native';

export default function Myapp () {
    return (
        <View>
           
            <View style={styles.Myapp}>
                <Image style={styles.image} />
                <View>
                    <Text syle={{ fontSize: 20, fontWeight: "bold" }}>Slack</Text>
                    <Text style={{ color: '#979a9e' }}> 101 MB - Used moments ago </Text>
                </View>
                <Button style={{color:'green'}}><Text style={{ color: 'white', fontSize: 20 }}>OPEN</Text></Button>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    Myapp: {
        flex: 1,
        backgroundColor: '#dee1e6',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    image: {
        uri: 'https://w7.pngwing.com/pngs/233/200/png-transparent-slack-technologies-computer-icons-icon-design-slacklogo-text-computer-logo.png',
        borderradius: '20'
    }
});
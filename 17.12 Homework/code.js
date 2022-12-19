import { Button, StyleSheet, Text, View } from 'react-native';

export default function Code () {
    return (
        <View>
           
            <View style={styles.Code}>
                <Image style={styles.image} />
                <View>
                    <Text syle={{ fontSize: 20, fontWeight: "bold" }}>Devon Conway</Text>
                    <Text style={{ color: '#979a9e' }}>@devonconway</Text>
                </View>
                <Button style={{ borderradius: '20' }}><Text style={{ color: '#979a9e', fontSize: 20 }}>Following</Text></Button>
            </View>
        </View>)
}

const styles = StyleSheet.create({
    Code: {
        flex: 1,
        backgroundColor: '#dee1e6',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    image: {
        uri: 'https://w7.pngwing.com/pngs/590/236/png-transparent-computer-icons-man-icon-recruiter-business-desktop-wallpaper.png',
        borderradius: '50%'
    }
});
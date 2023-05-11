import React from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Button
} from 'react-native';


export default function GettingStartedScreen({ navigation }: any) {
    function goHomeOboarding() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Registration' }],
        });
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/getting-started-bg.png')}
                resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Inside</Text>
                <Button
                    title="Go To Login"
                    onPress={() => navigation.navigate('Login')}
                />
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
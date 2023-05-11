import React, { useEffect } from 'react';
import { Button, View, Text } from 'react-native';

function SplashScreen({ navigation }: any) {

    useEffect(() => {
        setTimeout(() => {
            // navigation.replace('OnBoarding');
            navigation.replace('GettingStarted');
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Screen</Text>
            <Button
                title="Click"
            />
        </View>
    );
}

export default SplashScreen;
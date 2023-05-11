import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Onboarding3({ navigation }: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Onboarding3</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Onboarding3')}
        />
      </View>
    );
  }
  export default Onboarding3;
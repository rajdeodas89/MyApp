import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Onboarding1({ navigation }: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Onboarding1</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Onboarding1')}
        />
      </View>
    );
  }
  export default Onboarding1;
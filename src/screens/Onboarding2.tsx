import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Onboarding2({ navigation }: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Onboarding2</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Onboarding2')}
        />
      </View>
    );
  }
  export default Onboarding2;
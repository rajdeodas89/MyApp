import { View, Text, Button } from 'react-native';

function ProfileScreen({ navigation }: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen TAB 3</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    );
  }
  export default ProfileScreen;
import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen TAB 2</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}

export default DetailsScreen;
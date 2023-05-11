import * as React from 'react';
import { View, Text, Button, Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native';

function LoginScreen({ navigation }: any) {

  function goHomePage() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={goHomePage} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

  // return (
  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //   <Text>LoginScreen Screen</Text>
  //   <Button
  //     title="Login"
  //     onPress={() => navigation.navigate('Dashboard')}
  //   />
  // </View>
  // );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
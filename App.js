import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';

const App = () => {
  const [name, setName] = React.useState('');
  return (
    <View style={styles.container}>
      <Text testID="title">Enter a name</Text>
      <TextInput
        testID="input"
        style={styles.textInput}
        placeholder="Enter a name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Pressable testID="button" onPress={() => Alert.alert(name)}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

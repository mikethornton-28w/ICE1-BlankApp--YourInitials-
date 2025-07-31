import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello Mukhesi! </Text>

      <Text> What was the most difficult part of the setup and how did you resolve it (or what did you try)? </Text>

      <Text> The difficult part of this setup is the text function</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    textAlign: 'center',
  },
});

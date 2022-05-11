import { StyleSheet, Button, View, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.text}>Félicitations</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',    
  },
  touchable: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    width: '60%',
    height: 50,
    elevation: 8,
  },
  text: {
    flex: 1,
    textTransform: 'uppercase',
    color: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
  }
});

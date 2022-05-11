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
    width: '60%',
    justifyContent: 'center', 
    height: 50,
    borderWidth: 1,
    backgroundColor: 'green',
    borderColor: 'black',
    elevation: 20,
  },
  text: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: 'white',
  }
});

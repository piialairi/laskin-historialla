import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [number, setNumber] = useState('');
  const [secNumber, setSecNumber] = useState('');
  let [result, setResult] = useState('')
  const [data, setData] = useState([]);


  const sumNumbers = () => {
    result = Number(number) + Number(secNumber);
    setResult(result);
    const sum = (number + ' + ' + secNumber + ' = ' + result);
    setData([...data, { key: sum }]);
    setNumber('');
    setSecNumber('');
  }

  const subtractNumbers = () => {
    result = Number(number) - Number(secNumber);
    setResult(result);
    const subtraction = (number + ' - ' + secNumber + ' = ' + result);
    setData([...data, { key: subtraction }]);
    setNumber('');
    setSecNumber('');
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Result: {result}</Text>
        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={number => setNumber(number)}
        />
        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={secNumber => setSecNumber(secNumber)}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Button onPress={sumNumbers} title='+' color={'black'} />
        <Button onPress={subtractNumbers} title='-' />
      </View>

      <View style={styles.container2}>
        <Text>History </Text>
        <FlatList style={styles.container2}
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2
  },
});


import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestList from './app/RestList';
import Tray from './app/Tray';

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Lunch Spot</Text>
        <RestList selectedRestaurant={selectedRestaurant}/>
        <StatusBar style="auto" />
      </View>
      <Tray setSelectedRestaurant={setSelectedRestaurant}/>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#22A',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: 'white',
    fontSize: 36,
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddPlace from './screens/AddPlace';
import AllPlaces from './screens/AllPlaces';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllPlaces" component={AllPlaces} />
        <Stack.Screen name="AddPlace" component={AddPlace} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({

});

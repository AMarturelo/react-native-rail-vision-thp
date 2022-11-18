import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripFilterPage from './page/TripFilterPage'
import TripReviewPage from './page/TripReviewPage'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TripReviewPage"
          component={TripReviewPage}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="TripFilter" component={TripFilterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    MyStack()
  );
}

export default App;
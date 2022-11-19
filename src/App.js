import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TripReview, TripFilter} from './routing/routes';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={TripReview.name}
          component={TripReview.component}
          options={{title: TripReview.title}}
        />
        <Stack.Screen
          name={TripFilter.name}
          component={TripFilter.component}
          options={{title: TripFilter.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return MyStack();
}

export default App;

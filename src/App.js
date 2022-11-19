import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TripFilter, TripReview} from './routing/routes';
import {Provider as ReduxProvider} from 'react-redux';
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={TripReview.name}
          component={TripReview.component}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={TripFilter.name}
          component={TripFilter.component}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    <ReduxProvider store={store}>
      <MyStack />
    </ReduxProvider>
  );
}

export default App;

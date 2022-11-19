import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TripFilterPage from './page/TripFilterPage';
import TripReviewPage from './page/TripReviewPage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TripReviewPage"
          component={TripReviewPage}
          options={{title: 'TripReview'}}
        />
        <Stack.Screen name="TripFilter" component={TripFilterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return MyStack();
}

export default App;

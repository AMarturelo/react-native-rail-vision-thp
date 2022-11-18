import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TripReviewPage = ({ navigation, route }) => {
  return <Button
    title="GO TO TRIP FILTER"
    onPress={() =>
      navigation.replace('TripFilter')
    }
  />;
};

export default TripReviewPage;
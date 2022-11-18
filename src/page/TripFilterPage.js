import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const TripFilterPage = ({ navigation, route }) => {
  return <Button
    title="GO TO TRIP REVIEW"
    onPress={() =>
      navigation.replace('TripReviewPage')
    }
  />;
};

export default TripFilterPage;
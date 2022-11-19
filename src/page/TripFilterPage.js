import * as React from 'react';
import {Button} from 'react-native';
import {TripReview} from '../routing/routes';

const TripFilterPage = ({navigation}) => {
  return (
    <Button
      title="GO TO TRIP REVIEW"
      onPress={() => navigation.replace(TripReview.name)}
    />
  );
};

export default TripFilterPage;

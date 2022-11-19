import * as React from 'react';
import {Button} from 'react-native';

const TripFilterPage = ({navigation}) => {
  return (
    <Button
      title="GO TO TRIP REVIEW"
      onPress={() => navigation.replace('TripReviewPage')}
    />
  );
};

export default TripFilterPage;

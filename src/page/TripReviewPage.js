import * as React from 'react';
import {Button} from 'react-native';

const TripReviewPage = ({navigation}) => {
  return (
    <Button
      title="GO TO TRIP FILTER"
      onPress={() => navigation.replace('TripFilter')}
    />
  );
};

export default TripReviewPage;

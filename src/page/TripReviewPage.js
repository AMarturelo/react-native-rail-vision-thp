import * as React from 'react';
import {Button} from 'react-native';
import {TripFilter} from '../routing/routes';

const TripReviewPage = ({navigation}) => {
  return (
    <Button
      title="GO TO TRIP FILTER"
      onPress={() => navigation.replace(TripFilter.name)}
    />
  );
};

export default TripReviewPage;

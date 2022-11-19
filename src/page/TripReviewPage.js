import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {TripFilter} from '../routing/routes';
import {useSelector} from 'react-redux';

const TripReviewPage = ({navigation}) => {
  const user = useSelector(state => state.userReducer);
  return (
    <View>
      <Text>Name: {user.name}</Text>
      <Button
        title="GO TO TRIP FILTER"
        onPress={() => navigation.replace(TripFilter.name)}
      />
    </View>
  );
};

export default TripReviewPage;

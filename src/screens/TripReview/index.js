import * as React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {TripFilter, TripReview} from '../../routing/routes';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import Title from '../../components/Label';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fetchTripReviews} from './actions';
import {reduxForm} from 'redux-form';
import ReviewComponent from '../../components/Review';

const TripReviewScreen = ({navigation}) => {
  const loading = useSelector(state => state.tripReviewReducer.loading);
  const tripReviews = useSelector(state => state.tripReviewReducer.tripReviews);
  const dispatch = useDispatch();

  var [value, setValue] = useState(null);
  var [items, setItems] = useState([]);

  useEffect(() => {
    setItems(tripReviews);
  }, [tripReviews]);

  const onFetch = () => dispatch(fetchTripReviews());

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Title text={TripReview.title} />
        </View>
        <View style={styles.dropdown}>
          <DropDown
            hint="TRIP SELECTOR"
            value={value}
            setValue={setValue}
            items={items}
          />
        </View>
        {value != null ? (
          <ReviewComponent
            trip={value.tripDetails}
            date={value.date}
            averageSpeedInMph={value.averageSpeedInMph}
          />
        ) : null}
        <View style={styles.activityIndicator}>
          {loading ? (
            <ActivityIndicator size="large" color={Colors.green} />
          ) : null}
        </View>
        <Button
          title="GO TO TRIP FILTER"
          onPress={() => navigation.replace(TripFilter.name)}
        />
        <Button title="FETCH" onPress={onFetch} />
      </View>
    </SafeAreaView>
  );
};

export default reduxForm({
  form: 'trip-review-form',
})(TripReviewScreen);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 40,
  },
  dropdown: {
    marginTop: 40,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
});

import * as React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {TripFilter, TripReview} from '../../routing/routes';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import Title from '../../components/Label';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {reduxForm} from 'redux-form';
import ReviewComponent from '../../components/Review';
import {fetchTripReviews} from '../../redux/actions/fetchTripReviews';
import {selectTripReview} from '../../redux/actions/selectTripReview';

const TripReviewScreen = ({navigation}) => {
  const tripSelected = useSelector(state => state.tripReviewReducer.value);
  const loading = useSelector(state => state.fetchTripReviewReducer.loading);
  const tripReviews = useSelector(
    state => state.fetchTripReviewReducer.tripReviews,
  );
  const dispatch = useDispatch();

  var [value, setValue] = useState(null);
  var [items, setItems] = useState([]);

  useEffect(() => {
    onFetch();
  }, []);

  useEffect(() => {
    const myMap = Object.entries(tripReviews).map(([key, value]) => {
      return {
        label:
          key +
          ' | ' +
          Array.from(value.tripDetails)
            .map(trip => trip.id)
            .join(' - '),
        value: value,
      };
    });
    setItems(myMap);
  }, [tripReviews]);

  useEffect(() => {
    setValue(tripSelected);
  }, [tripSelected]);

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
            onChange={item => {
              dispatch(selectTripReview(item));
            }}
          />
        </View>
        {tripSelected?.value != null ? (
          <ReviewComponent
            trip={tripSelected.value.tripDetails}
            date={tripSelected.value.date}
            averageSpeedInMph={tripSelected.value.averageSpeedInMph}
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
        {/*<Button title="FETCH" onPress={onFetch} />*/}
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

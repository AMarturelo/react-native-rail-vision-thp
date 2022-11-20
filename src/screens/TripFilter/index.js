import * as React from 'react';
import {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {TripFilter, TripReview} from '../../routing/routes';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import Title from '../../components/Label';
import {useDispatch, useSelector} from 'react-redux';
import {reduxForm} from 'redux-form';
import {selectTripFilter} from '../../redux/actions/selectTripFilter';
import ReviewComponent from '../../components/Review';

const TripFilterScreen = ({navigation}) => {
  const data = [
    {label: 'Longest Trip by Duration', value: '1'},
    {label: 'Shortest Trip by Duration', value: '2'},
    {label: 'Highest Speed Trip', value: '3'},
    {label: 'Lowest Speed Trip', value: '4'},
    {label: 'Most Number of Stops', value: '5'},
    {label: 'Least Number of Stops', value: '6'},
  ];

  const tripReviews = useSelector(
    state => state.fetchTripReviewReducer.tripReviews,
  );

  const tripFilterSelected = useSelector(
    state => state.tripFilterReducer.filter,
  );

  const tripFilter = useSelector(state => state.tripFilterReducer.trip);

  const dispatch = useDispatch();

  var [value, setValue] = useState(data);
  var [items, setItems] = useState([]);

  useEffect(() => {
    setValue(tripFilterSelected);
  }, [tripFilterSelected]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Title text={TripFilter.title} />
        </View>
        <View style={styles.dropdown}>
          <DropDown
            hint="TRIP FILTER"
            setValue={setValue}
            value={value}
            items={data}
            onChange={filter => {
              dispatch(selectTripFilter(filter, tripReviews));
            }}
          />
        </View>
        {tripFilter != null ? (
          <ReviewComponent
            trip={tripFilter.tripDetails}
            date={tripFilter.date}
            averageSpeedInMph={tripFilter.averageSpeedInMph}
          />
        ) : null}
        <View
          style={{
            height: 40,
          }}></View>
        <Button
          title="GO TO TRIP REVIEW "
          onPress={() => navigation.replace(TripReview.name)}
        />
      </View>
    </SafeAreaView>
  );
};

export default reduxForm({
  form: 'trip-filter-form',
})(TripFilterScreen);

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

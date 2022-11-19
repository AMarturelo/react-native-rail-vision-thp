import * as React from 'react';
import {useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {TripFilter, TripReview} from '../../routing/routes';
import Button from '../../components/Button';
import DropDown from '../../components/DropDown';
import Title from '../../components/Label';
import {useDispatch, useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fetchTripReviews} from './actions';
import {reduxForm} from 'redux-form';

const TripReviewScreen = ({navigation}) => {
  const fetchTripReview = useSelector(state => state.tripReviewReducer);
  const loading = useSelector(state => fetchTripReview.loading);
  const data = useSelector(state => fetchTripReview.data);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

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
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <Title text={'Hola ' + data} />
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

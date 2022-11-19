import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {TripFilter, TripReview} from '../routing/routes';
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import Title from '../components/Label';

const TripReviewPage = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
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
        <Button
          title="GO TO TRIP FILTER"
          onPress={() => navigation.replace(TripFilter.name)}
        />
      </View>
    </SafeAreaView>
  );
};

export default TripReviewPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 40,
  },
  dropdown: {
    marginBottom: 40,
    marginTop: 40,
  },
});

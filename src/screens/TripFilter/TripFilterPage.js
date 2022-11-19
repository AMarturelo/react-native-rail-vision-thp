import * as React from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import { TripFilter, TripReview } from "../../routing/routes";
import Title from '../../components/Label';
import DropDown from '../../components/DropDown';
import Button from '../../components/Button';

const TripFilterPage = ({navigation}) => {
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
          <Title text={TripFilter.title} />
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
          title="GO TO TRIP REVIEW"
          onPress={() => navigation.replace(TripReview.name)}
        />
      </View>
    </SafeAreaView>
  );
};

export default TripFilterPage;

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

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DropDown(props) {
  const {open, value, items, setOpen, setValue, setItems, label = ''} = props;
  return (
    <View>
      <Text style={styles.label}>{`${label}`.toUpperCase()}</Text>
      <DropDownPicker
        containerProps={{
          height: open === true ? 220 : null,
          backgroundColor: '#97A1AA',
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#B20610',
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 0.25,
    marginBottom: 8,
    color: '#97A1AA',
  },
});

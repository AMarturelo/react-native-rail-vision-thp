import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';

export default function DropDownComponent(props) {
  const {value, setValue, items, hint = '', onChange} = props;

  const renderHint = () => {
    return <Text style={styles.hint}>{`${hint}`.toUpperCase()}</Text>;
  };

  return (
    <View style={styles.container}>
      {renderHint()}
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={items}
        maxHeight={300}
        labelField="label"
        valueField="value"
        itemTextStyle={styles.item}
        placeholder={'Select item'}
        value={value}
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  hint: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 0.25,
    marginBottom: 8,
    color: '#97A1AA',
  },
  container: {
    backgroundColor: 'white',
  },
  dropdown: {
    backgroundColor: '#F8F9F9',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
    borderBottomStartRadius: 4,
    borderBottomEndRadius: 4,
    borderColor: '#FFFFFF00',
    borderWidth: 0,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 20,
    color: '#B6BCC3',
    fontWeight: '600',
  },
  selectedTextStyle: {
    fontSize: 20,
    color: '#626E7B',
    fontWeight: '600',
  },
  item: {
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#626E7B',
    fontSize: 16,
    fontWeight: '500',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

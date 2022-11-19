import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {appColors} from '../../utils/appColors';

export default function DropDown(props) {
  const {open, value, items, setOpen, setValue, setItems, hint = ''} = props;
  return (
    <View>
      <Text style={styles.hint}>{`${hint}`.toUpperCase()}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        textStyle={{
          color: '#626E7B',
          fontWeight: '500',
          lineHeight: 24,
          fontSize: 18,
        }}
        itemStyle={{justifyContent: 'flex-start', color: '#ad1919'}}
        containerStyle={{height: 50, width: '100%'}}
        style={{
          overflow: 'hidden',
          backgroundColor: appColors.dropDrownBackground,
          borderRadius: 4,
          borderTopStartRadius: 4,
          borderTopEndRadius: 4,
          borderBottomStartRadius: 4,
          borderBottomEndRadius: 4,
          borderColor: '#FFFFFF00',
          borderWidth: 0,
        }}
        labelStyle={{
          color: '#626E7B',
          fontSize: 18,
          fontWeight: '500',
          lineHeight: 24,
        }}
        dropDownStyle={{backgroundColor: '#ad1919'}}
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
});

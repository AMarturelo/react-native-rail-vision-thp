import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function Button(props) {
  const {onPress, title = 'Save'} = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#B20610',
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: '#FFFFFF',
  },
});

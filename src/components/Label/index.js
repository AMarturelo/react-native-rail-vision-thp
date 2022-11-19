import {StyleSheet, Text} from 'react-native';

export default function Title(props) {
  const {text} = props;
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '600',
    letterSpacing: 0.25,
    textAlign: 'center',
    color: '#060F1A',
  },
});

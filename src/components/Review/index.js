import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ReviewComponent(props) {
  const {trip, date, averageSpeedInMph} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.duration}>
        {`TRIP duration 2:55h | AVG. Speed ${averageSpeedInMph}mph`}
      </Text>
      <View
        style={{
          marginTop: 32,
        }}>
        {Array.from(trip).map(value => renderStation(value))}
      </View>
    </View>
  );

  function renderStation(trip) {
    return (
      <View
        style={{
          marginBottom: trip.arrivedTime == null ? 16 : 0,
          marginTop: trip.departedTime == null ? 16 : 0,
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 8,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#060F1A',
          }}>
          {trip.id + ' - ' + trip.name + ' | '}
        </Text>
        {renderStops(trip)}
      </View>
    );
  }

  function renderStops(props) {
    const list = [];
    if (props.arrivedTime != null) {
      list.push('Arrived ' + props.arrivedTime);
    }
    if (props.departedTime != null) {
      list.push('Departed ' + props.departedTime);
    }
    return (
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#626E7B',
          }}>
          {list.join(' | ')}
        </Text>
        {}
      </View>
    );

    //return <Text>{'Text' + trip}</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  date: {
    fontSize: 20,
    color: '#060F1A',
  },
  duration: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '600',
    color: '#060F1A',
  },
});

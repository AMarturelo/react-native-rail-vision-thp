import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ReviewComponent(props) {
  const {trip} = props;
  console.log("as"+trip);

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{trip.formattedDate()}</Text>
      <Text style={styles.duration}>
        {`TRIP duration ${trip.formattedDuration()} | AVG. Speed ${trip.formattedSpeed()}`}
      </Text>
      <View
        style={{
          marginTop: 32,
        }}>
        {Array.from(trip.tripDetails).map(stop => renderStation(stop))}
      </View>
    </View>
  );

  function renderStation(stop) {
    return (
      <View
        style={{
          marginBottom: stop.arrivedTime == null ? 16 : 0,
          marginTop: stop.departedTime == null ? 16 : 0,
          alignItems: 'center',
          flexDirection: 'row',
          paddingVertical: 8,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#060F1A',
          }}>
          {stop.id + ' - ' + stop.name + ' | '}
        </Text>
        {renderStops(stop)}
      </View>
    );
  }

  function renderStops(stop) {
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
          {stop.concatDepartedArrived()}
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

export const selectTripFilter = (filter, trips) => ({
  type: 'SELECT_TRIP_FILTER',
  filter: filter,
  trips: trips,
});

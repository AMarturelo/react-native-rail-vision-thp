import {Trip} from '../../models/Trip';

const inititalState = {filter: null, trip: null};
const tripReviewReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'SELECT_TRIP_FILTER': {
      const map = new Map(Object.entries(action.trips));
      const values = Array.from(map.values()).map(value => new Trip(value));

      let trip;
      switch (action.filter.value) {
        case '1': {
          //Longest Trip by Duration
          trip = longestTripByDuration(values);
          break;
        }
        case '2': {
          //Shortest Trip by Duration
          trip = shortestTripByDuration(values);
          break;
        }
        case '3': {
          //Highest Speed Trip
          trip = highestSpeedTrip(values);
          break;
        }
        case '4': {
          //Lowest Speed Trip
          trip = lowestSpeedTrip(values);
          break;
        }
        case '5': {
          //Most Number of Stops
          trip = mostNumberOfStops(values);
          break;
        }
        default: {
          //Least Number of Stops
          trip = leastNumberOfStops(values);
          break;
        }
      }

      return {
        ...state,
        filter: action.filter,
        trip: trip,
      };
    }
  }
  return state;
};

function longestTripByDuration(values) {
  let trip = values[0];
  values.forEach(value => {
    if (value.durationM() > trip?.durationM() ?? 0) {
      trip = value;
    }
  });
  return trip;
}

function shortestTripByDuration(values) {
  let trip = values[0];
  values.forEach(value => {
    if (value.durationM() < trip?.durationM() ?? 0) {
      trip = value;
    }
  });
  return trip;
}

function highestSpeedTrip(values) {
  let trip = values[0];
  values.forEach(value => {
    if (value.averageSpeedInMph > trip?.averageSpeedInMph ?? 0) {
      trip = value;
    }
  });
  return trip;
}

function lowestSpeedTrip(values) {
  let trip = values[0];
  values.forEach(value => {
    if (value.averageSpeedInMph < trip?.averageSpeedInMph ?? 0) {
      trip = value;
    }
  });
  return trip;
}

function mostNumberOfStops(values) {
  let trip = values[0];
  values.forEach(value => {
    if (value.tripDetails.length > trip?.tripDetails.length ?? 0) {
      trip = value;
    }
  });
  return trip;
}

function leastNumberOfStops(values) {
  let trip = values[0];
  values.forEach(value => {
    if (value.tripDetails.length < trip?.tripDetails.length ?? 0) {
      trip = value;
    }
  });
  return trip;
}

export default tripReviewReducer;

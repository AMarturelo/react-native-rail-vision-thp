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
          //Longest Trip by Duration
          trip = shortestTripByDuration(values);
          break;
        }
        default: {
          trip = new Trip({
            date: '2022-08-11',
            averageSpeedInMph: 75,
            tripDetails: [
              {
                id: 'TRTO',
                name: 'Toronto',
                arrivedTime: null,
                departedTime: '09:41',
              },
              {
                id: 'GUIL',
                name: 'Guildwood',
                arrivedTime: '11:00',
                departedTime: '11:05',
              },
              {
                id: 'OSHA',
                name: 'Oshawa',
                arrivedTime: '12:10',
                departedTime: '12:11',
              },
              {
                id: 'PHOP',
                name: 'Port Hope',
                arrivedTime: '13:20',
                departedTime: '13:24',
              },
              {
                id: 'CBRG',
                name: 'Coburg',
                arrivedTime: '14:45',
                departedTime: '14:46',
              },
              {
                id: 'KGOB',
                name: 'Kingston',
                arrivedTime: '15:02',
                departedTime: null,
              },
            ],
          });
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

export default tripReviewReducer;

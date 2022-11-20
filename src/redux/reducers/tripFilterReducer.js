const inititalState = {filter: null, trip: null};
const tripReviewReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'SELECT_TRIP_FILTER': {
      //TODO Add filter logic
      return {
        ...state,
        filter: action.filter,
        trip: {
          date: '2022-02-01',
          averageSpeedInMph: 55,
          tripDetails: [
            {
              id: 'TRTO',
              name: 'Toronto',
              arrivedTime: null,
              departedTime: '10:55',
            },
            {
              id: 'GUIL',
              name: 'Guildwood',
              arrivedTime: '11:30',
              departedTime: '11:55',
            },
            {
              id: 'OSHA',
              name: 'Oshawa',
              arrivedTime: '12:30',
              departedTime: null,
            },
          ],
        },
      };
    }
  }
  return state;
};
export default tripReviewReducer;

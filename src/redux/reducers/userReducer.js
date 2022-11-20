const inititalState = {tripReview: null};
const addUserReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'CHANGEUSERNAME': {
      return {...state, name: action.payload};
    }
    case 'CHANGEAGE': {
      return {...state, age: action.payload};
    }
  }
  return state;
};
export default addUserReducer;

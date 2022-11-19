import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TripFilter, TripReview} from './routing/routes';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={TripReview.name}
          component={TripReview.component}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={TripFilter.name}
          component={TripFilter.component}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/*

function App() {
  return MyStack();
}

export default App;*/

function App() {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );

  /*const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.name);

  return (
    <div className="App">
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <hr></hr>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(changeUsersName(name));
          dispatch(changeUsersAge(age));
        }}>
        <input
          onChange={e => setName(e.target.value)}
          placeholder="Change name"></input>
        <input
          onChange={e => setAge(e.target.value)}
          placeholder="Change age"></input>
        <input type="submit" value="Change user details" />
      </form>
    </div>
  );*/
}

export default App;

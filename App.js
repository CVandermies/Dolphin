import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import{ View, Text } from 'react-native'
import firebase from 'firebase'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDejp0hGoH52lO9JnmSDuAQT3s47BCvvMU",
  authDomain: "dolphin-dev-d7aba.firebaseapp.com",
  projectId: "dolphin-dev-d7aba",
  storageBucket: "dolphin-dev-d7aba.appspot.com",
  messagingSenderId: "56269657010",
  appId: "1:56269657010:web:82febff4b46f312264caab",
  measurementId: "G-BF2MYZB1NT"
};

//lancer firebase en etant sur qu'on n'est pas deja en train de l'utiliser
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import MainScreen from './components/Main'

const Stack = createStackNavigator();



export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

//lifecycle of React, quand notre appli se charge:
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })        
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }

    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );    
    }    

    //NavCont : container for the routes in React Native
    return(
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
              <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>      
    )
  }
}

export default App
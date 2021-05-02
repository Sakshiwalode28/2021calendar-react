import React, { useState, useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

import Modal from "react-modal"
//
import Login from './Auth/Login';
import Registration from './Auth/Registration';

import Header from './Components/Header';
import Home from './Components/Home';

import TaskReducer from "./Context/reducer";

import { UserContext } from "./Context/UserContext";

import UserCalendar from './Pages/UserFullCalendar';




//
import firebase from 'firebase/app';
import "firebase/auth";
import FirebaseConfig from './firebase/FirebaseConfig'
import EventList from './Pages/EventList';
firebase.initializeApp(FirebaseConfig)
// firebase.analytics();


Modal.setAppElement("#root")

const App = () => {
  const [events , dispatch] = useReducer(TaskReducer, [])
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Switch>

            <Route path='/register'>
              <Header />
              <Registration />
            </Route>

            <Route path='/login'>
              <Header />
              <Login />
            </Route>

            <Route path='/events'>
              <Header />
              <EventList />
            </Route>

            <Route path='/calendar'>
              <Header />
              <UserCalendar/>
            </Route>


            <Route path='/'>
              <Home />
            </Route>

          </Switch>
        </ UserContext.Provider>
        <ToastContainer/>
      </Router>
    </div>
  );
}

export default App;

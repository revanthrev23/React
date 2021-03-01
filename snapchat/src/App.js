import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import Chatview from './ChatView';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';
import Login from './Login';
import Preview from './Preview';
import Webcamcapture from './WebcamCapture';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
          <img src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" className="app__logo" alt="" />
          <div className="app__body">
            <div className="app__bodyBackground">
            <Switch>
          <Route exact path="/">
            <Webcamcapture />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/chats/view">
            <Chatview />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
        </Switch>
            </div>
      </div>
      </>
        )}
      </Router>
    </div>
  );
}

export default App;

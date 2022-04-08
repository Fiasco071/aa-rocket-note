import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation"
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import ContentBox from './components/ContentBox';
import Notes from './components/NotesNav';
import NoteDetail from './components/NoteDetail';
import NewNote from './components/NewNote'
import * as sessionActions from "./store/session";
import DigitalClock from './components/DigitalClock';
import ProtectedRoute from './ProtectedRoute';
import SplashPage from './components/SplashPage'

function App() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (

    <div className="App" id="mainBox">

      <div className="nav-bar">
        <Navigation isLoaded={isLoaded} />
      </div>

   
        <Route path="/" exact>
          {user ? <Redirect to='/home' /> : <SplashPage />}
        </Route>
        {(user) ?
          <>
        <Switch>
          <ProtectedRoute path="/home" sessionUser={user} />
            <Route path="/notes">
              <Notes />
              <NewNote />
            </Route>
            <Route path="/notebooks/:noteBookId">
              <Notes />
              <NewNote />
            </Route>
            <Route path="/notes/:noteId">
              <Notes />
              <NoteDetail />
            </Route>
            <Route>
              <h1 style={{ color: "white", fontSize: "3em", position: "absolute", left: "700px", top: "300px", }}>Currently Under Construction</h1>
            </Route>
         </Switch>
          </>
          : <Redirect to="/" />}
    </div>
  );
}

export default App;

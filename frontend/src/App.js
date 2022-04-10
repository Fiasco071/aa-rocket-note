import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation"
import { Redirect, Route, Switch } from 'react-router-dom';
import Notes from './components/NotesNav';
import NoteDetail from './components/NoteDetail';
import NewNote from './components/NewNote'
import * as sessionActions from "./store/session";
import ProtectedRoute from './ProtectedRoute';
import SplashPage from './components/SplashPage'
import SplashPageTwo from './components/SplashPageTwo';

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
      <div className='dev-box'>
          <a className="dev-link" href='https://github.com/Fiasco071/'>Developer</a>
      </div>
      <Switch>
        <Route path="/" exact>
          {user ? <Redirect to='/home' /> : <SplashPage />}
        </Route>
        <ProtectedRoute path="/home" sessionUser={user} />
        {(user) ?
          <>

          {/* double switch here... is this a bad method??????? */}
          <Switch>
            <Route path="/notes" exact>
              <Notes />
              <NewNote />
            </Route>
            <Route path="/notebooks/:noteBookId" >
              <Notes />
              <NewNote />
            </Route>
            <Route path="/notes/:noteId">
              <Notes />
              <NoteDetail />
            </Route>
            <Route >
          <h1 style={{ color: "white", fontSize: "3em", position: "absolute", left: "700px", top: "300px", }}>Currently Under Construction</h1>
          <SplashPageTwo/>
        </Route>
          </Switch>
          </>
          : <Redirect to="/" />}
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation"
import { Route, Switch, useHistory } from 'react-router-dom';
import ContentBox from './components/ContentBox';
import Notes from './components/NotesNav';
import NoteDetail from './components/NoteDetail';
import NewNote from './components/NewNote'
import * as sessionActions from "./store/session";
import DigitalClock from './components/DigitalClock';

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
      <Switch>

        <Route path="/" exact>
          <div className='main-content-box'>
            <div className='main-image-box' />
            <div className='greet-clock-bar'>
              <h1 className='greeting-message'>Good afternoon, {user?.username}</h1>
              <div>
                <DigitalClock />
              </div>
            </div>
            <ContentBox />
          </div>
        </Route>
        <Route path="/notes" exact>
          <Notes />
          <NewNote />
        </Route>
        <Route path="/notebooks/:noteBookId" exact>
          <Notes />
          <NewNote />
        </Route>
        <Route path="/notes/:noteId">
          <Notes />
          <NoteDetail />
        </Route>
        <Route>
          <h1 style={{ color: "white", fontSize: "3em", position: "absolute", left: "700px", top: "300px", }}>Currently Under Construction</h1>
          <DigitalClock />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

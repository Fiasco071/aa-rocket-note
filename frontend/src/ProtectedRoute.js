import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import ContentBox from './components/ContentBox';
import DigitalClock from './components/DigitalClock';
import { useSelector } from "react-redux";

const ProtectedRoute =({sessionUser}) => {
    const user = useSelector(state => state.session.user);

    return (
        <Route {...sessionUser}>
            {(sessionUser) ? 
            <div className='main-content-box'>
            <div className='main-image-box' />
            <div className='greet-clock-bar'>
              <h1 className='greeting-message'>Good afternoon, {user?.username}</h1>
              <div>
                <DigitalClock />
              </div>
            </div>
            <ContentBox />
          </div> : <Redirect to="/" />}
        </Route>
    )
}

export default ProtectedRoute;
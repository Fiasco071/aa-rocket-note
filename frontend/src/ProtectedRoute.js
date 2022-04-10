import React, { /*useState, useEffect*/ } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ContentBox from './components/ContentBox';
import DigitalClock from './components/DigitalClock';
import { useSelector } from "react-redux";
import titletextimgback from '../src/assets/img/ganpan.png';
import titletextimgfront from '../src/assets/img/ganpan2.png';

const ProtectedRoute = ({ sessionUser }) => {
  const user = useSelector(state => state.session.user);
  let greetMessage;
  let time = new Date();


  if (time.getHours() < 12) {
    greetMessage = 'Good morning, ';
  } else if (time.getHours() >= 12 && time.getHours() <= 16) {
    greetMessage =  'Good afternoon, ';
  } else if (time.getHours() > 16)
  greetMessage =  'Good evening, ';

  // useEffect(() => {
  // },[])

  return (
    <Route {...sessionUser}>
      {(sessionUser) ?
        <div className='main-content-box'>
          <div className='main-image-box' />
          <div className='greet-clock-bar'>
            <div className='title-text-container-main'>
              <img className='titletextfront' src={titletextimgfront} alt={titletextimgfront}></img>
              <img className='titletextback' src={titletextimgback} alt={titletextimgback}></img>
            </div>
            <h1 className='greeting-message'>{greetMessage}{user?.username}</h1>
            <div className='clock-box'>
              <DigitalClock />
            </div>
          </div>
          <ContentBox />
        </div> : <Redirect to="/" />}
    </Route>
  )
}

export default ProtectedRoute;
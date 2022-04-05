import './LoginForm.css';
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import Orbits from '../Orbits';
import { useHistory } from 'react-router-dom';


function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    let demoId = 'demo-lition';
    let demoPassword = 'password';
    return dispatch(sessionActions.login({ demoId, demoPassword })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };


  const signUpLink = (e) => {
    e.preventDefault();
    history.push("/signup");
  }


  return (
    <div className='login-box'>
      <h2>LOG IN</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className='input-box-fields'>
          <label>
            Username / Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
        </div>
        <div className='input-box-fields'>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="y-button" onClick={demoLogin} type="submit">DEMO</button>
        <button className="y-button" type="submit">Log In</button>
      </form>
      <div className='orbit-box'>
        <Orbits />
      </div>
    </div>
  );
}

export default LoginForm;

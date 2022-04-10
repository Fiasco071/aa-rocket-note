import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {resetStoreNote} from '../../store/noteReducer';
import {resetStoreNotebook} from '../../store/notebookReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = async (e) => {
    e.preventDefault();
    dispatch(resetStoreNote());
    dispatch(resetStoreNotebook());
    dispatch(sessionActions.logout());
  };

  return (
    <>
        <FontAwesomeIcon onClick={openMenu} className="nav-link" icon={faUser} />
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
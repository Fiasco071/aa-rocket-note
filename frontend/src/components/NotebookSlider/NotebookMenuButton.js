import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
import {  fetchNotebooks, deleteOneNotebook } from '../../store/notebookReducer';
import {useHistory} from 'react-router-dom';


function NotebookMenuButton({notebookId}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  
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

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    setShowMenu(false);
    dispatch(deleteOneNotebook(id));
    dispatch(fetchNotebooks(user?.id));
    history.push('/');
};

  return (
    <div className="notebook-menu-button" onClick={openMenu}>
        <FontAwesomeIcon icon={faEllipsis}/>
      {showMenu && (
        <div className='notebook-dropdown-menu'>
            <FontAwesomeIcon className="notebook-delete-icon" icon={faTrash} onClick={(e) => handleDelete(e,notebookId)}/>
        </div>
      )}
    </div>
  );
}

export default NotebookMenuButton;
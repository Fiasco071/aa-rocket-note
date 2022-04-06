import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteOneNotebook } from '../../store/notebookReducer';
import {useHistory} from 'react-router-dom';
import NotebookUpdateMenu from './NotebookUpdateMenu';


function NotebookMenuButton({notebookId}) {
  const dispatch = useDispatch();
  const [showNotebookMenu, setShowNotebookMenu] = useState(false);
  const history = useHistory();
  
  const openMenu = () => {
    if (showNotebookMenu) return;
    setShowNotebookMenu(true);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    setShowNotebookMenu(false);
    dispatch(deleteOneNotebook(id));
    history.push('/');
};

  return (
    <div className="notebook-menu-button" onClick={openMenu}>
        <FontAwesomeIcon icon={faEllipsis}/>
      {showNotebookMenu && (
        <div className='notebook-dropdown-menu'>
            <NotebookUpdateMenu notebookId={notebookId}/>
            <FontAwesomeIcon className="notebook-delete-icon" icon={faTrash} onClick={(e) => handleDelete(e,notebookId)}/>
            <FontAwesomeIcon className='menu-close-button' icon={faEllipsis} onClick={() => setShowNotebookMenu(false)}/>
        </div>
      )}
    </div>
  );
}

export default NotebookMenuButton;
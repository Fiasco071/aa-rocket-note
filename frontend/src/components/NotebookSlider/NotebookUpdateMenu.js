import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateNotebook } from '../../store/notebookReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

function NotebookUpdateMenu({notebookId}) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const notebooks = useSelector(state => state.notebooks.notebooks)
    const [showMenu, setShowMenu] = useState(false);
    const [notebookName, setNotebookName] = useState(notebooks[notebookId].name);

console.log(notebooks[notebookId].name);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: notebookName,
            userId: user.id
        }
        dispatch(updateNotebook(notebookId, data))
        setShowMenu(false);
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);

    return (
        <div className="notebook-update-button">
             <FontAwesomeIcon className='notebook-edit-icon' icon={faWrench} onClick={openMenu}/>
            {showMenu && (
                <div className='notebook-update-dropdown'>
                    <form onSubmit={handleSubmit}>
                        <input
                            value={notebookName}
                            onChange={(e) => setNotebookName(e.target.value)}
                        />
                        <div>
                            <button>submit</button>
                            <p onClick={() => setShowMenu(false)}>cancel</p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default NotebookUpdateMenu;
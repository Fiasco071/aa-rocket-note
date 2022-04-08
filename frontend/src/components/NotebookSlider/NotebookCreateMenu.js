import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createNewNotebook } from '../../store/notebookReducer';

function NotebookCreateMenu() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [showMenu, setShowMenu] = useState(false);
    const [notebookName, setNotebookName] = useState('Notebook');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: notebookName,
            userId: user.id
        }
        dispatch(createNewNotebook(data))
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

    //     document.querySelector('.notebook-slider-box').addEventListener('click', closeMenu)
    //     return () => {
    //       document.querySelector('.notebook-slider-box').removeEventListener("click", closeMenu);
    //     }
    // }, [showMenu]);

    return (
        <div className="notebook-create-button">
            <p onClick={openMenu}>+</p>
            {showMenu && (
                <div className='notebook-create-dropdown'>
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

export default NotebookCreateMenu;
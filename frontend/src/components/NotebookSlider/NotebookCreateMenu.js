import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createNewNotebook } from '../../store/notebookReducer';

function NotebookCreateMenu() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const [showMenu, setShowMenu] = useState(false);
    const [notebookName, setNotebookName] = useState('Notebook');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: notebookName,
            userId: user.id
        }

        dispatch(createNewNotebook(data))
            .then(() => {
                setShowMenu(false);
                setErrors([]);
            })
            .catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        setErrors(data.errors);
                    }
                }
            );
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.querySelector('.notebook-create-dropdown')?.addEventListener('mouseleave', closeMenu);

        return () => document.querySelector('.notebook-create-dropdown')?.removeEventListener("mouseleave", closeMenu);
    }, [showMenu]);

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
                    <div className='nb-error-message-box'>
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}><p>{error}</p></li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotebookCreateMenu;
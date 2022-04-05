import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchNotebooks, createNewNotebook } from '../../store/notebookReducer';

const NotebookSlider = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const notebooks = useSelector(state => state.notebooks.notebooks);
    const [showCreateMenu, setShowCreateMenu] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    const [notebookName, setNotebookName] = useState('Notebook');


    useEffect(() => {
        dispatch(fetchNotebooks(user?.id))
    }, [dispatch])


    const handleSubmit = () => {
        setShowCreateMenu(false);
        const data = {
            name: notebookName,
            userId: user.id
        }
        dispatch(createNewNotebook(data))
    }


    return (
        <div className="notebook-slider-box">
            <div className="notebook-slider">
                {Object.values(notebooks).map((notebook) => (
                    <div className="book1" key={notebook?.id}>
                        <div className='notebook-info-box'>
                            <p>{notebook?.name}</p>
                            <div>
                                <p>4 Notes</p>
                                <p>Last Updated</p>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className='divider2'></div>
                    </div>
                ))}

                <div className="add-book" onClick={() => setShowCreateMenu(true)}>
                    {showCreateMenu && (
                        <div className='notebook-create-box'>
                            <input
                                className='notebook-create-title-text'
                                value={notebookName}
                                onChange={(e) => setNotebookName(e.target.value)}
                            />
                            <button onClick={handleSubmit}>CREATE</button>
                        </div>
                    )}
                    <div className='notebook-info-box add-box'>
                        <p>+</p>
                        <p>New</p>
                        <p>Notebook</p>
                    </div>
                    <div className='divider'></div>
                    <div className='divider2'></div>
                </div>
            </div>
        </div>
    );
}

export default NotebookSlider;
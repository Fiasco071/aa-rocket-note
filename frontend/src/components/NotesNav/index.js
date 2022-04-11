
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /*faArrowDownWideShort, faFilter,*/ faBook } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchNotes } from '../../store/noteReducer';

const NotesNav = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { noteBookId } = useParams();
    const { noteId } = useParams();
    const user = useSelector(state => state.session.user)
    const notesObj = useSelector(state => state.notes.entries);
    const notebooks = useSelector(state => state.notebooks.notebooks);
    const [notebook, setNotebook] = useState('All')
    const [notebookList, setNotebookList] = useState();
    
    useEffect(() => {
        dispatch(fetchNotes(user.id))
    }, [dispatch, user])


    useEffect(() => {
        if (noteBookId) {
            setNotebookList(Object.values(notesObj).filter(note => +noteBookId === note.noteBookId));
            setNotebook(notebooks[noteBookId]?.id)
        } else {
            setNotebookList(Object.values(notesObj));
            setNotebook('All');
        }
    },[notesObj, noteId, noteBookId, notebooks]);

    const redirect = (e) => {
        if (notebook === 'All') {
            history.push('/notes')
        } else {
            history.push(`/notebooks/${e.target.value}`)
        }
    }

    const noteClick = (e, id) => {
        e.stopPropagation();
        document.querySelectorAll('.note').forEach(note => note.classList.remove('selected-note'))
        e.target.classList.add('selected-note');
        history.push(`/notes/${id}`);
    }

    return (
        <div className="notes-nav-bar">
            <div className="notes-nav-control-box">
                <div className="notes-nav-control-box-head">
                    <FontAwesomeIcon icon={faBook} />
                    <select
                        className='notebook-nav-select'
                        value={notebook}
                        onClick={redirect}
                        onChange={(e) => (setNotebook(e.target.value))}
                    >
                        <option value='All'>All</option>
                        {Object.values(notebooks).map(notebook => (
                            <option 
                                key={notebook.id} 
                                value={notebook.id}
                                
                            >{notebook.name}</option>
                        ))}
                    </select>
                </div>
                <div className="notes-nav-control-box-buttons-box">
                    <div>
                        <p> {`${notebookList?.length} notes`} </p>
                    </div>
                    <div className='notes-nav-control-box-buttons'>
                        {/* <FontAwesomeIcon icon={faArrowDownWideShort} />
                        <FontAwesomeIcon className="filter-icon" icon={faFilter} /> */}
                    </div>
                </div>
            </div>
            {notebookList?.map((note) => (
                <div
                    className={note.id === +noteId ? 'note selected-note' : 'note'}
                    key={note.id}
                    onClick={e => noteClick(e, note.id)}
                >
                    <p className='note-title-text'>{note.title}</p>
                    <p className='note-content-text'>{note.content.slice(0, 80)}</p>
                    <p className='note-createat-text'>{note.createAt}</p>
                </div>
            ))}
        </div>
    )
}

export default NotesNav;
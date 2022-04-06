
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faNoteSticky, faFilter, faBook } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const NotesNav = () => {
    const history = useHistory();
    const { noteBookId } = useParams();
    const notesObj = useSelector(state => state.notes.entries);
    const notebooks = useSelector(state => state.notebooks.notebooks);
    const [notebook, setNotebook] = useState('All')

    let notes;
    if (noteBookId) {
        notes = Object.values(notesObj).filter(note => +noteBookId === note.noteBookId);
        // setNotebook(Object.values(notesObj)[noteBookId])
    } else {
        notes = Object.values(notesObj);
    }

    console.log()

    return (
        <div className="notes-nav-bar">
            <div className="notes-nav-control-box">
                <div className="notes-nav-control-box-head">
                    <FontAwesomeIcon icon={faBook} />
                    <select
                        className='notebook-nav-select'
                        value={notebook}
                        onChange={(e) => (setNotebook(e.target.value))}
                    >
                        <option value='All'>All</option>
                        {Object.values(notebooks).map(notebook => (
                            <option key={notebook.id} value={notebook.id}>{notebook.name}</option>
                        ))}
                    </select>
                </div>
                <div className="notes-nav-control-box-buttons-box">
                    <div>
                        <p> {`${Object.values(notesObj).length} notes`} </p>
                    </div>
                    <div className='notes-nav-control-box-buttons'>
                        <FontAwesomeIcon icon={faArrowDownWideShort} />
                        <FontAwesomeIcon className="filter-icon" icon={faFilter} />
                    </div>
                </div>
            </div>
            {notes.map((note) => (
                <div
                    className="note"
                    key={note.id}
                    onClick={() => {
                        history.push(`/notes/${note.id}`)
                    }}
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
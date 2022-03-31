import './index.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEllipsis, faCircleExclamation, faTrash, faClock, faUpRightAndDownLeftFromCenter, faTag, faBook } from '@fortawesome/free-solid-svg-icons';
import notes from '../../mockData/notes.json';
import {useState, useEffect} from 'react';


const NoteDetail = () => {
    const { noteId } = useParams();

    ///below will need to be queried and matched and data initialized
    
    //////////////
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setTitle(notes[noteId-1].title);
        setContent(notes[noteId-1].content)
    }, [noteId])

    return (
        <div className='single-note-wrapper'>
            <div className='single-note'>
                <div className='single-note-header'>
                    <div className='single-note-header-button-box'>
                        <FontAwesomeIcon icon={faClock} />
                        
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <FontAwesomeIcon icon={faTrash} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    <div className='single-note-header-button-box-right'>
                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </div>
                </div>

                <div className='single-note-content-wrapper'>
                    <div className='single-note-content'>
                        <div className='single-note-content-header'>
                            {/* gonna have to make this dynamic once focused we load menu bar out of focus load two buttons*/}
                            <FontAwesomeIcon  className="notebook-icon" icon={faBook} />
                            {/*Name of the notebook will go here*/}
                            <FontAwesomeIcon icon={faTag} />
                            {/*list of tags will be here*/}
                        </div>
                        <div className='single-note-content-box'>
                            <textarea 
                                className='single-page-title-input'
                                placeholder='Title here...'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                className='single-page-content-input'
                                placeholder='Contents here...'
                                value={content} 
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteDetail;
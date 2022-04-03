import './index.css';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEllipsis, faCircleExclamation, faTrash, faClock, faUpRightAndDownLeftFromCenter, faTag, faBook } from '@fortawesome/free-solid-svg-icons';
import UpdateFormEditor from '../RichTxtEditor/updateFormEditor';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneNote } from '../../store/noteReducer';


const NoteDetail = () => {
    const { noteId } = useParams();
    const dispatch = useDispatch();
    const notesObj = useSelector(state => state.notes.entries);
    const history = useHistory();
    ///below will need to be queried and matched and data initialized
    
    // //////////////
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');

    // useEffect(() => {
    //     /// need to fix below because when queries are id 4,5,6 vs in array 0,1,2
    //     let content = notesObj[noteId]?.content
    //     let converted = htmlToDraft(content);
    //     setTitle(notesObj[noteId]?.title);
    //     setContent(converted);
    // }, [noteId])

    const handleDelete = (id) => {
        dispatch(deleteOneNote(noteId));
        history.push('/notes')
      };

    return (
        <div className='single-note-wrapper'>
            <div className='single-note'>
                <div className='single-note-header'>
                    <div className='single-note-header-button-box'>
                        <FontAwesomeIcon icon={faClock} />
                        
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <FontAwesomeIcon icon={faTrash} 
                        onClick={handleDelete}
                        />
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
                                <UpdateFormEditor noteId={noteId} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteDetail;
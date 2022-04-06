import './index.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEllipsis, faCircleExclamation, faTrash, faClock, faUpRightAndDownLeftFromCenter, faTag, faBook } from '@fortawesome/free-solid-svg-icons';
import UpdateFormEditor from '../RichTxtEditor/updateFormEditor';
import { useRef, useEffect } from 'react';



const NoteDetail = () => {
    const { noteId } = useParams();

    const ref = useRef();
    const scrollToTop = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
      }
      useEffect(() => {
        scrollToTop()
      }, []);

    return (
        <div className='single-note-wrapper'>
            <div ref={ref}></div>
            <div className='single-note'>
                {/* <div className='single-note-header'>
                    <div className='single-note-header-button-box'>
                        <FontAwesomeIcon icon={faClock} />
                        
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faCircleExclamation} />
                        <FontAwesomeIcon className="delete-icon" icon={faTrash} 
                        onClick={handleDelete}
                        />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    <div className='single-note-header-button-box-right'>
                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </div>
                </div> */}

                <div className='single-note-content-wrapper'>
                    <div className='single-note-content'>
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
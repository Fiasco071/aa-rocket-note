
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEllipsis, faCircleExclamation, faTrash, faClock, faUpRightAndDownLeftFromCenter, faTag, faBook } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useEffect } from 'react';
import './index.css';
import ControlledEditor from '../RichTxtEditor';



const NewNote = () => {
    const ref = useRef();
    const scrollToTop = () => {
        ref.current?.scrollIntoView()
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
                        <FontAwesomeIcon icon={faTrash} />
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    <div className='single-note-header-button-box-right'>
                        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </div>
                </div> */}

                <div className='single-note-content-wrapper'>
                    <div className='single-note-content'>
                        <div className='single-note-content-box'>
                                <ControlledEditor noteId={null}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewNote;
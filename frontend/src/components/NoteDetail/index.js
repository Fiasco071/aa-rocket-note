import './index.css';
import { useParams } from 'react-router-dom';
import UpdateFormEditor from '../RichTxtEditor/updateFormEditor';
import { useRef, useEffect } from 'react';



const NoteDetail = () => {
    const { noteId } = useParams();

    const ref = useRef();
    const scrollToTop = () => {
        ref.current?.scrollIntoView()
      }
      useEffect(() => {
        scrollToTop()
      }, []);

    return (
        <div ref={ref} className='single-note-wrapper'>
            <div className='single-note'>
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
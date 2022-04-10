import "./index.css"
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";



const NoteSlider = () => {
    // const user = useSelector(state => state.session.user);
    const notesObj = useSelector(state => state.notes.entries);
    const notes = Object.values(notesObj).slice(-6);

    // most recently updated note list 
            // grabs the date information from store -> Date class it -> sort by later
    let revListNotes = Object.values(notesObj).sort((a,b) =>  new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())

    let revListNotesDisplayList = revListNotes.slice(-6);

    const [notesfilterClicked, setNotesFilterClicked] = useState('Recent');

    let history = useHistory();
    const ref = React.createRef();

    const handleClickR = () => {
        setNotesFilterClicked('Recent')
        const div = ref.current;
        setTimeout(() => {
            div.classList.remove('appear');
        },500)
        div.classList.add('appear');
    }
    const handleClickS = () => {
        setNotesFilterClicked('Suggested')
        const div = ref.current;
        setTimeout(() => {
            div.classList.remove('appear');
        },500)
        div.classList.add('appear');
    }

    return notes && (
        <div className="box">
            <div className="content">
                <div className="note-slider-header">
                    <div>
                        Notes
                    </div>
                </div>
                <div className="note-slider-tags">
                    <p
                        on
                        className={notesfilterClicked === 'Recent' ? 'selectedFilter' : null}
                        onClick={handleClickR}
                    >In Order</p>
                    <p
                        className={notesfilterClicked === 'Suggested' ? 'selectedFilter' : null}
                        onClick={handleClickS}
                    >Recent</p>
                </div>

                <div ref={ref} className="note-slider">
                    {notesfilterClicked === 'Recent' && notes.length > 0 && (
                        notes.map((note) => (
                            <div key={note?.id} className="note-card" onClick={() => {
                                history.push(`/notes/${note?.id}`)
                            }}>
                                <div>
                                    <h2 className="card-title">{note?.title}</h2>
                                </div>
                                <div className="note-card-content-box">
                                    <p>{note?.content}</p>
                                </div>
                                <div>
                                    <p className="note-card-createAt-text">{note?.createAt}</p>
                                </div>
                            </div>
                        ))
                    )}
                    {/* Gonna need to repeat above with different filtering rule */}
                    {notesfilterClicked === 'Suggested' && notes.length > 0 && (
                        revListNotesDisplayList.map((note) => (
                            <div key={note?.id} className="note-card" onClick={() => {
                                history.push(`/notes/${note?.id}`)
                            }}>
                                <div>
                                    <h2 className="card-title">{note?.title}</h2>
                                </div>
                                <div className="note-card-content-box">
                                    <p>{note?.content}</p>
                                </div>
                                <div>
                                    <p className="note-card-createAt-text">{note?.createAt}</p>
                                </div>
                            </div>
                        ))
                    )}

                    <div
                        className="note-card-add"
                        onClick={() => history.push("/notes")}
                    >
                        <p>+</p>
                        <p>New Note</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NoteSlider
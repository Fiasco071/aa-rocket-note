import "./index.css"
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "../../store/noteReducer";


const NoteSlider = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    // console.log(user)
    const notesObj = useSelector(state => state.notes.entries);
    const notes = Object.values(notesObj).slice(-4);

    useEffect(() => {
        if (user) {
            dispatch(fetchNotes(user.id));
        }
    }, [dispatch]);

    const [notesfilterClicked, setNotesFilterClicked] = useState('Recent');

    let history = useHistory();
    const ref = React.createRef();

    const handleClickR = () => {
        setNotesFilterClicked('Recent')
        const div = ref.current;
        div.classList.toggle('appear');
    }
    const handleClickS = () => {
        setNotesFilterClicked('Suggested')
        const div = ref.current;
        div.classList.toggle('appear');
    }

    return notes && (
        <div className="box">
            <div className="content">
                <div className="note-slider-header">
                    <div>
                        Notes
                    </div>
                    <div>
                        button1 button2
                    </div>
                </div>
                <div className="note-slider-tags">
                    <p
                        className={notesfilterClicked === 'Recent' ? 'selectedFilter' : null}
                        onClick={handleClickR}
                    >Recent</p>
                    <p
                        className={notesfilterClicked === 'Suggested' ? 'selectedFilter' : null}
                        onClick={handleClickS}
                    >Suggested</p>
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
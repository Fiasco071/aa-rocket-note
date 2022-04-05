import { useState } from 'react';
//import { useHistory  } from "react-router-dom";
import NotebookSlider from '../NotebookSlider';


const SummaryBox = () => {
    const [notesfilterClicked, setNotesFilterClicked] = useState('Notebooks');
    //let history = useHistory (); 

    return (
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
                        className={notesfilterClicked=== 'Tasks' ? 'selectedFilter' : null}
                        onClick={() => setNotesFilterClicked('Tasks')}
                    >Tasks</p>
                    <p
                        className={notesfilterClicked=== 'Shortcuts' ? 'selectedFilter' : null}
                        onClick={() => setNotesFilterClicked('Shortcuts')}
                    >Shortcuts</p>
                    <p
                        className={notesfilterClicked=== 'Notebooks' ? 'selectedFilter' : null}
                        onClick={() => setNotesFilterClicked('Notebooks')}
                    >Notebooks</p>
                    <p
                        className={notesfilterClicked=== 'Tags' ? 'selectedFilter' : null}
                        onClick={() => setNotesFilterClicked('Tags')}
                    >Tags</p>
                </div>

                <div className="note-slider">
                    {notesfilterClicked === 'Notebooks' && (
                        <NotebookSlider />
                    )}
                {/* Gonna need to repeat above with different filtering rule */}


                    {/* <div 
                        className="note-card-add"
                        onClick={() => history.push("/notes")}
                    >
                            <p>+</p>
                            <p>New Note</p>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default SummaryBox
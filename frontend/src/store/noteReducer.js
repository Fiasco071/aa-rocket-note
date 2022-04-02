const LOAD_NOTES = 'notes/loadNotes';

export const loadNotes = (notes) => {
    return {
        type: LOAD_NOTES,
        notes
    };
};

export const fetchNotes = () => async (dispatch) => {
    const response = await fetch('/api/notes');
    const notes = await response.json();
    dispatch(loadNotes(notes));
};


const initialState = { entries: {}, isLoading: true };

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NOTES: {
            const newState = {}
            const entries = {}
            action.notes.forEach(note => entries[note.id] = note)
            newState.entries = entries
            return newState;
        }
        default:
            return state;
    }
};


export default noteReducer;
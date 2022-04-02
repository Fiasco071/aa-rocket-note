import {csrfFetch} from '../store/csrf';

const LOAD_NOTES = 'notes/loadNotes';
const ADD_NOTE = 'notes/addNote';


export const loadNotes = (notes) => {
    return {
        type: LOAD_NOTES,
        notes
    };
};

export const addNote = (note) => {
    return {
      type: ADD_NOTE,
      note
    };
  };

export const fetchNotes = () => async (dispatch) => {
    const response = await csrfFetch('/api/notes');
    const notes = await response.json();
    dispatch(loadNotes(notes));
};

export const createNewNote = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/notes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    
      if (response.ok) {
        const note = await response.json();
        dispatch(addNote(note));
        return note;
      }
}

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
        case ADD_NOTE : { 
            const newState = {...state}
            const entries = {...state.entries}
            entries[action.note.id] = action.note;
            newState.entries = entries;
            return newState;
        }
        default:
            return state;
    }
};


export default noteReducer;
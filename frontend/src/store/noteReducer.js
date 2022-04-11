import { csrfFetch } from '../store/csrf';

const LOAD_NOTES = 'notes/loadNotes';
const ADD_NOTE = 'notes/addNote';
const REMOVE_NOTE = 'notes/removeNote';
const DUMP_DATA = 'notes/dumpData';

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


export const deleteNote = (id) => {
    return {
        type: REMOVE_NOTE,
        id
    }
}

export const reset = () => {
    return {
        type: DUMP_DATA
    }
}

export const fetchNotes = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/notes/${userId}`);
    const notes = await response.json();
    dispatch(loadNotes(notes));
};

export const createNewNote = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/notes', {
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

export const updateNote = (id, payload) => async dispatch => {
    const response = await csrfFetch(`/api/notes/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    if(response.ok){
      const updateNote = await response.json()
      dispatch(addNote(updateNote))
      return updateNote
    }
    }



export const deleteOneNote = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/notes/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteNote(id));
    }
};


export const resetStoreNote = () => dispatch => {
    dispatch(reset());
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
        case ADD_NOTE: {
            const newState = { ...state }
            const entries = { ...state.entries }
            entries[action.note.id] = action.note;
            newState.entries = entries;
            return newState;
        }
        case REMOVE_NOTE: {
            const newState = { ...state };
            const entries = { ...state.entries }
            delete entries[action.id];
            newState.entries = entries;
            return newState;
        }
        case DUMP_DATA: {
            const newState = {};
            const entries = {}
            newState.entries = entries;
            return newState;
        }
        default:
            return state;
    }
};


export default noteReducer;
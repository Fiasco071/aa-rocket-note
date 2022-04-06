import { csrfFetch } from '../store/csrf';

const LOAD_NOTEBOOKS = 'notebooks/loadNotebooks';
const ADD_NOTEBOOK = 'notebooks/addNotebook';
const REMOVE_NOTEBOOK = 'notebooks/removeNotebook';


export const loadNotebooks = (notebooks) => {
    return {
        type: LOAD_NOTEBOOKS,
        notebooks
    };
};

export const addNotebook = (notebook) => {
    return {
        type: ADD_NOTEBOOK,
        notebook
    };
};


export const deleteNotebook = (id) => {
    return {
        type: REMOVE_NOTEBOOK,
        id
    }
}

export const fetchNotebooks = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/notebooks/${userId}`);
    const notebooks = await response.json();
    dispatch(loadNotebooks(notebooks));
};

export const createNewNotebook = (payload) => async (dispatch) => {
    const response = await csrfFetch('/api/notebooks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const notebook = await response.json();
        dispatch(addNotebook(notebook));
        return notebook;
    }
}

export const updateNotebook = (id, payload) => async dispatch => {
    const response = await csrfFetch(`/api/notebooks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const updateNote = await response.json()
        dispatch(addNotebook(updateNote)) //action passed in
        return updateNote
    }
}




export const deleteOneNotebook = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/notebooks/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(deleteNotebook(id));
    }
};

const initialState = { notebooks: {}, isLoading: true };

const notebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NOTEBOOKS: {
            const newState = {}
            const notebooks = {}
            action.notebooks.forEach(notebook => notebooks[notebook.id] = notebook)
            newState.notebooks = notebooks
            return newState;
        }
        case ADD_NOTEBOOK: {
            const newState = { ...state }
            const notebooks = { ...state.notebooks }
            notebooks[action.notebook.id] = action.notebook;
            newState.notebooks = notebooks;
            return newState;
        }
        case REMOVE_NOTEBOOK: {
            const newState = { ...state };
            const notebooks = { ...state.notebooks }
            delete notebooks[action.id];
            newState.notebooks = notebooks;
            return newState;
        }
        default:
            return state;
    }
};


export default notebookReducer;
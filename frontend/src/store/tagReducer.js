import { csrfFetch } from '../store/csrf';

const initialState = { notebooks: {}, isLoading: true };

const tagReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default tagReducer;
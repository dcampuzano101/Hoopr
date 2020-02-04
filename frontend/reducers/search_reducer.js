import { RECEIVE_SEARCH } from '../actions/search_actions';

const defaultState = Object.freeze({
    query: "",
    businessIds: []
})

const searchReducer = (state = defaultState, action) => {
    switch(action.type) {
        case RECEIVE_SEARCH:
            return Object.assign({}, state, action.payload.searchResult);
        default: 
            return state;
    }
}

export default searchReducer;
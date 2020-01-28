import { RECEIVE_SEARCH } from '../actions/search_actions';

const defaultState = Object.freeze({
    query: "",
    businessIds: []
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case RECEIVE_SEARCH:
            return action.payload.searchResult
        default: 
            return state;
    }
}
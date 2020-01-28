import { searchRequest } from '../util/search_api_util';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearch = (payload) => ({
    type: RECEIVE_SEARCH,
    payload
})

export const search = (query) => {
    return searchRequest(query).then(
        payload => dispatchEvent(receiveSearch(payload))
    )
}
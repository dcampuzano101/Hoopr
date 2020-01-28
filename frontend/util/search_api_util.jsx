import { RECEIVE_SEARCH } from "../actions/search_actions";

export const searchRequest = (query = "") => (
    $.ajax({
        // type: RECEIVE_SEARCH,
        url: `api/search/${query}`
    })
) 
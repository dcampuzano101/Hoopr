import { RECEIVE_SEARCH } from "../actions/search_actions";

export const searchRequest = (query = "") => (
    $.ajax({
        url: `api/search/${query}`
    })
) 
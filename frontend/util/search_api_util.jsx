import { RECEIVE_SEARCH } from "../actions/search_actions";

export const searchRequest = (query = "") => (
    $.ajax({
        url: `api/search/${query}`
    })
)

export const boroughRequest = (borough = "") => (
    $.ajax({
        url: `api/filter/${borough}`
    })
) 
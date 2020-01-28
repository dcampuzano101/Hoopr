export const searchRequest = (query = "") => (
    $.ajax({
        url: `api/search/${query}`
    })
) 
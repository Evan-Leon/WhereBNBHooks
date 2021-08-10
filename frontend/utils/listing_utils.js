export const fetchListings = (filters)  => {
  return(  $.ajax({
        method: 'GET',
        url: '/api/listings',
        data: { filters }
        
    }))
};

export const fetchListing = id =>(
    $.ajax({
        method: "GET",
        url: `/api/listings/${id}`
    })
)

export const fetchSearch = searchString => (
    $.ajax({
        method: "POST",
        url: `/api/search_index`,
        data: {searchString}
    })
)
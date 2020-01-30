export const selectReviewsForBiz = (review_ids = [], reviews) => {
  let result = [];
  debugger;
  review_ids.forEach(id => {
    result.push(reviews[id]);
  });
  return result;
};


export const selectBusinessesForSearch = ( businessIds = [], businesses) => {
  let result = [];
  debugger;
  businessIds.forEach(id => {
    result.push(businesses[id])
  });
  return result;
}
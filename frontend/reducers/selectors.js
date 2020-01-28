export const selectReviewsForBiz = (review_ids = [], reviews) => {
  let result = [];

  review_ids.forEach(id => {
    result.push(reviews[id]);
  });
  return result;
};


export const selectBusinessesForSearch = ( businessIds = [], businesses) => {
  let result = [];

  businessIds.forEach(id => {
    result.push(businesses[id])
  });
}
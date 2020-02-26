export const selectReviewsForBiz = (review_ids = [], reviews) => {
  let result = [];
    
  review_ids.forEach(id => {
    result.push(reviews[id]);
  });
  return result;
};

export const selectPhotosForBiz = (photo_ids = [], photos) => {
  let result = [];
    ;
  photo_ids.forEach(id => {
    result.push(photos[id]);
  });
  return result;
};

export const selectReviewsForUser = (review_ids = [], reviews) => {
  let result = [];
    ;
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
  return result;
}

export const selectBusinessesForFilter = ( businessIds = [], businesses) => {
  let result = [];
    
  businessIds.forEach(id => {
    result.push(businesses[id])
  });
  return result;
}
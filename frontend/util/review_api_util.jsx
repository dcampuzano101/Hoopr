//Review API Util

export const createReview = (review) => {
  
  return $.ajax({
    method: "POST",
    url: `/api/businesses/${review.business_id}/reviews`,
    data: { review }
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: { review }
  });
};

export const fetchReview = (reviewId) => {
  return $.ajax({
    method: "GET",
    url: `api/reviews/${reviewId}`  
  });
};


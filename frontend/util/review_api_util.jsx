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
    url: `api/businesses/${review.business_id}/reviews/${review.id}`,
    data: { review }
  });
};

export const fetchReview = (reviewId) => {
  return $.ajax({
    method: "GET",
    url: `api/reviews/${reviewId}`  
  });
};

export const deleteReview = (reviewId, businessId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/businesses/${businessId}/reviews/${reviewId}`
  });
};


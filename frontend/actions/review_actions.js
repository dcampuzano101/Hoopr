import * as ReviewAPI from '../util/review_api_util';
import {  } from './biz_actions';


export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = (review) => {
  return({
    type: RECEIVE_REVIEW,
    review
  });
};

export const requestReview = (reviewId) => dispatch => {
  return ReviewAPI.fetchReview(reviewId)
    .then((review) => dispatch(receiveReview(review)));
};

export const createReview = (review) => dispatch => {
  return ReviewAPI.createReview(review)
    .then(review => dispatch(receiveReview(review)));
};

export const updateReview = (review) => dispatch => {
  return ReviewAPI.updateReview(review)
    .then((review) => dispatch(receiveReview(review)));
};
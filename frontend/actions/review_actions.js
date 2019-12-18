import * as ReviewAPI from '../util/review_api_util';
import {  } from './biz_actions';


export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

export const receiveReview = (payload) => {
  return({
    type: RECEIVE_REVIEW,
    payload
  });
};

export const requestReview = (reviewId) => dispatch => {
  return ReviewAPI.fetchReview(reviewId)
    .then((payload) => dispatch(receiveReview(payload)));
};

export const createReview = (review) => dispatch => {
  return ReviewAPI.createReview(review)
    .then(review => dispatch(receiveReview(review)));
};

export const updateReview = (review) => dispatch => {
  return ReviewAPI.updateReview(review)
    .then((review) => dispatch(receiveReview(review)));
};
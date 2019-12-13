import * as BIZAPI from '../util/business_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_BIZS = "RECEIVE_BIZS";
export const RECEIVE_BIZ = "RECEIVE_BIZ";


export const receiveBizs = (businesses) => {
  return ({
    type: RECEIVE_BIZS,
    businesses
  });
};

export const receiveBiz = (business) => {
  return({
    type: RECEIVE_BIZ,
    business
  });
};

export const requestBizs = () => dispatch => {
  return BIZAPI.fetchBizs()
    .then(() => dispatch(receiveBizs()));
};

export const requestBiz = (bizId) => dispatch => {
  return BIZAPI.fetchBiz(bizId)
    .then((bizId) => dispatch(requestBiz(bizId)));
};

export const createBiz = (business) => dispatch => {
  debugger;
  return BIZAPI.createBiz(business)
    .then(business => dispatch(receiveBiz(business)),
      error => dispatch(receiveErrors(error))
    );
};





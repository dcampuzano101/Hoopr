import * as BIZAPI from '../util/business_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";


export const receiveBusinesses = (payload) => {
  return ({
    type: RECEIVE_BUSINESSES,
    payload
  });
};

export const receiveBusiness = (payload) => {
  return({
    type: RECEIVE_BUSINESS,
    payload
  });
};

export const requestBusinesses = () => dispatch => {
  return BIZAPI.fetchBusinesses()
    .then((payload) => dispatch(receiveBusinesses(payload)));
};


export const requestBusiness = (businessId) => dispatch => {
  return BIZAPI.fetchBusiness(businessId)
    .then((payload) => dispatch(receiveBusiness(payload)));
};

export const createBusiness = (business) => dispatch => {
  return BIZAPI.createBusiness(business)
    .then(payload => dispatch(receiveBusiness(payload))
    );
};





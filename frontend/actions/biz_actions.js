import * as BIZAPI from '../util/business_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_BUSINESSES = "RECEIVE_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";


export const receiveBusinesses = (businesses) => {
  return ({
    type: RECEIVE_BUSINESSES,
    businesses
  });
};

export const receiveBusiness = (business) => {
  return({
    type: RECEIVE_BUSINESS,
    business
  });
};

export const requestBusinesses = () => dispatch => {
  debugger;
  return BIZAPI.fetchBusinesses()
    .then((businesses) => dispatch(receiveBusinesses(businesses)));
};

export const requestBusiness = (businessId) => dispatch => {
  debugger;
  return BIZAPI.fetchBusiness(businessId)
    .then((business) => dispatch(receiveBusiness(business)));
};

export const createBusiness = (business) => dispatch => {
  debugger;
  return BIZAPI.createBusiness(business)
    .then(business => dispatch(receiveBusiness(business))
    );
};





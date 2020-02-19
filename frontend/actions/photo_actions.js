import * as PhotoAPI from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receivePhoto = (payload) => {
  return({
    type: RECEIVE_PHOTO,
    payload
  });
};

export const removePhoto = payload => {
  return({
    type: REMOVE_PHOTO,
    payload
  });
};

export const requestPhoto = (photoId) => dispatch => {
  return PhotoAPI.fetchPhoto(photoId)
    .then((payload) => dispatch(receivePhoto(payload)));
};
/////REPLACE (MAYBE dispatch payload instead of photo)
export const createPhoto = (photo, businessId) => dispatch => {
  // debugger;
  return PhotoAPI.createPhoto(photo, businessId)
    .then((photo, businessId) => dispatch(receivePhoto(photo, businessId)));
};
///////REPLACE 

export const deletePhoto = (photoId, businessId) => dispatch => {
  return PhotoAPI.deletePhoto(photoId, businessId)
    .then((payload) => dispatch(removeReview(payload)));
};
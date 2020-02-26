import * as PhotoAPI from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS"
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receivePhoto = (payload) => {
  debugger;
  return({
    type: RECEIVE_PHOTO,
    payload
  });
};

export const receivePhotos = (payload) => {
  debugger;
  return ({
    type: RECEIVE_PHOTOS,
    payload
  });
};

export const removePhoto = payload => {
  return({
    type: REMOVE_PHOTO,
    payload
  });
};

export const requestPhotos = () => dispatch => {
  debugger;
  return PhotoAPI.fetchPhotos()
    .then((payload) => dispatch(receivePhotos(payload)));
};

export const requestPhoto = (photoId) => dispatch => {
  debugger;
  return PhotoAPI.fetchPhoto(photoId)
    .then((payload) => dispatch(receivePhoto(payload)));
};
/////REPLACE (MAYBE dispatch payload instead of photo)
export const createPhoto = (photo, businessId) => dispatch => {
  debugger;
  return PhotoAPI.createPhoto(photo, businessId)
    .then(res => dispatch(receivePhoto(res)));
    
};
///////REPLACE 

export const deletePhoto = (photoId, businessId) => dispatch => {
  return PhotoAPI.deletePhoto(photoId, businessId)
    .then((payload) => dispatch(removeReview(payload)));
};
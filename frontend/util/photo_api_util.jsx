//Photo API Util

export const createPhoto = (formData, businessId) => {
    debugger
    return $.ajax({
      method: "POST",
      url: `api/businesses/${businessId}/photos`,
      data: formData,
      contentType: false,
      processData: false
    });
  };

export const fetchPhotos = () => {

  return $.ajax({
    method: "GET",
    url: "api/photos",
  });
};

export const fetchPhoto = (photoId) => {
  return $.ajax({
    method: "GET",
    url: `api/photos/${photoId}`  
  });
};

export const deletePhoto = (photoId, businessId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/businesses/${businessId}/photos/${photoId}`
  });
};

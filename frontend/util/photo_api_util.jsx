//Review API Util

export const createPhoto = (formData) => {
    return $.ajax({
      method: "POST",
      url: `api/businesses/${formData.business.id}/photos`,
      data: formData,
      contentType: false,
      processData: false
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

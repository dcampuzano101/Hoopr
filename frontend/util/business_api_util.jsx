//Business API util

export const fetchBusinesses = () => {
  return $.ajax({
    method: "GET",
    url: "api/businesses",
  });
};

export const fetchBusiness = businessId => {
  
  return $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}`
  });
};


export const createBusiness = (business) => {
  
  return $.ajax({
    method: "POST",
    url: "/api/businesses",
    data: { business }
  });
};
//Business API util

export const fetchBusinesses = () => {
  debugger;
  return $.ajax({
    method: "GET",
    url: "api/businesses",
  });
};

export const fetchBusiness = businessId => {
  debugger;
  return $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}`
  });
};


export const createBusiness = (business) => {
  debugger;
  return $.ajax({
    method: "POST",
    url: "/api/businesses",
    data: { business }
  });
};
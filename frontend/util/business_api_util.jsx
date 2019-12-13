//Business API util

export const fetchBizs = () => {
  return $.ajax({
    method: "GET",
    url: "api/businesses",
  });
};

export const fetchBiz = bizId => {
  return $.ajax({
    method: "GET",
    url: `api/businesses/${bizId}`
  });
};


export const createBiz = (business) => {
  return $.ajax({
    method: "POST",
    url: "api/businesses",
    data: { business }
  });
};
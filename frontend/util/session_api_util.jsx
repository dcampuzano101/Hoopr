//signup(user) login(user) logout()

export const signup = (formData) => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: formData,
    contentType: false,
    processData: false
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session"
  });
};




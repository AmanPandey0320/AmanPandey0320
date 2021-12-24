export const getRole = () => {
  let role = window.localStorage.getItem("role");
  if (role === undefined || role === null) {
    role = "portfolio";
  }
  return role;
};

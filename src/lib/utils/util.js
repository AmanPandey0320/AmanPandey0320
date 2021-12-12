export const getRole = () => {
  let role = "client";
  if (window.location.hostname.split(".")[0] === "www") {
    role = window.location.hostname.split(".")[1];
  } else {
    role = window.location.hostname.split(".")[0];
  }
  return role;
};

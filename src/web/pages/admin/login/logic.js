import * as Yup from "yup";

export const loginValidationScheme = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("This field is mandetory."),
  password: Yup.string()
    .min(8, "Password must contain 8-20 characters.")
    .max(20, "Password must contain 8-20 characters.")
    .required("This field is mandetory."),
});

export const forgotPasswordScheme = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("This field is mandetory."),
});

import * as Yup from "yup";

export const validateEmail = Yup.string()
  .required("Email is required")
  .email("Email is invalid");

export const validateConfirmEmail = Yup.string()
  .required("Confirm Email is required")
  .email("Confirm Email is invalid")
  .oneOf([Yup.ref("email"), null], "Confirm Email does not match");

export const validatePassword = Yup.string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters")
  .max(40, "Password must not exceed 40 characters");

export const validateConfirmPassword = Yup.string()
  .required("Confirm Password is required")
  .oneOf([Yup.ref("password"), null], "Confirm Password does not match");

export const validateAcceptTerms = Yup.bool().oneOf(
  [true],
  "Accept Terms is required"
);

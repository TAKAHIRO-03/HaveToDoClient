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
  .min(8, "Password must be at least 8 characters")
  .max(64, "Password must not exceed 64 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-/:-@¥[-`{-~])[a-zA-Z0-9!-/:-@¥[-`{-~]+$/,
    "Password must be at least one upper-case, lower-case, digit, special character"
  );

export const validateConfirmPassword = Yup.string()
  .required("Confirm Password is required")
  .min(8, "Password must be at least 8 characters")
  .max(64, "Password must not exceed 64 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-/:-@¥[-`{-~])[a-zA-Z0-9!-/:-@¥[-`{-~]+$/,
    "Password must be at least one upper-case, lower-case, digit, special character"
  )
  .oneOf([Yup.ref("password"), null], "Confirm Password does not match");

export const validateAcceptTerms = Yup.bool().oneOf(
  [true],
  "Accept Terms is required"
);

const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateSignupInput(data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.status = validText(data.status) ? data.status : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  if (!Validator.isIn(data.status, ["student", "performer", "member"])) {
    errors.status = "Please select 'student', 'performer', 'member' ";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm password";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

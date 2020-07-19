import * as yup from "yup";

const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is a required field"),
  lastName: yup.string().required("Last name is a required field"),
  phone: yup.string().length(9).required("Phone is a required field"),
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(6, "Minimum 6 characters")
    .max(40, "Maximum 40 characters"),
  passwordConfirmation: yup
    .mixed()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Repeat your password"),
});

export default userSchema;

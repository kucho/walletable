import * as yup from "yup";
import { Categories } from "../utils/common";

const TransactionSchema = yup.object().shape({
  amount: yup.number().typeError("amount must be numeric").required(),
  date: yup
    .date()
    .required()
    .max(new Date() + 1, "only past dates are permitted"),
  payee: yup.string().required(),
  description: yup.string().required(),
  category: yup
    .mixed()
    .required()
    .oneOf([...Object.keys(Categories)], "select a category"),
});

export default TransactionSchema;

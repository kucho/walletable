import * as yup from "yup";
import { Categories } from "../utils/common";
import { add } from "date-fns";

const TransactionSchema = yup.object().shape({
  amount: yup.number().typeError("amount must be numeric").required(),
  date: yup
    .date()
    .required()
    .max(add(new Date(), { days: 1 })),
  payee: yup.string().required(),
  description: yup.string().required(),
  category: yup
    .mixed()
    .required()
    .oneOf([...Object.keys(Categories)], "select a category"),
});

export default TransactionSchema;

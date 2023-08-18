import * as yup from "yup";

export const measureSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .matches(/^[^<>]*$/, "Invalid characters entered")
    .required("Required"),
});

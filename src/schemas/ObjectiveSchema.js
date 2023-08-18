import * as yup from "yup";

export const objectiveSchema = yup.object().shape({
  title: yup.string().required("Required"),
  startDate: yup.date().required("Required"),
  endDate: yup
    .date()
    .required("Required")
    .min(yup.ref("startDate"), "Invalid date"),
});

import * as yup from "yup";

export const objectiveSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .matches(/^[^<>]*$/, "Invalid characters entered")
    .required("Title is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup
    .date()
    .required("End date is required")
    .test(
      "is-after-start",
      "End date must be after start date",
      function (value) {
        const startDate = this.resolve(yup.ref("startDate"));
        return startDate && value && value > startDate;
      }
    ),
});

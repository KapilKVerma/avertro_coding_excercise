import * as yup from "yup";
import { measureSchema } from "./MeasureSchema";

export const objectiveSchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .matches(/^[^<>]*$/, "Invalid characters entered")
    .required("Objective title is required"),
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
  measures: yup
    .array()
    .of(measureSchema)
    .min(1, "Enter at least one key measure."),
});

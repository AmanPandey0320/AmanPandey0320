import * as Yup from "yup";
/**
 * @description education scheme for validation
 */
export const EducationValidationSchema = Yup.object().shape({
  course: Yup.string().required("This field is mandetory"),
  institute: Yup.string().required("This field is mandetory"),
  from: Yup.date().required("This field is mandetory"),
  to: Yup.date().required("This field is mandetory"),
  result: Yup.string().required("This field is mandetory"),
  present: Yup.boolean().default(false),
  cgpa: Yup.boolean().default(false),
});

/**
 *
 */
export const AboutMeValidatonSchema = Yup.object().shape({
  image: Yup.string().required("No image choosen"),
  about: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  skill: Yup.array()
    .of(
      Yup.object().shape({
        text: Yup.string().required("Skill name is required"),
        icon: Yup.string().required("Icon is required"),
      })
    )
    .min(1, "Atleast 1 skill is needed"),
});

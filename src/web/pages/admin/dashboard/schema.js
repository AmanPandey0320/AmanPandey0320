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
 *@description about me schema
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

/**
 * @description experience validation schema
 */
export const ExperienceSchema = Yup.object().shape({
  org: Yup.string().required("Required"),
  from: Yup.date().required("Required"),
  present: Yup.boolean().required().default(false),
  to: Yup.date().when("present", {
    is: false,
    then: Yup.date().required("Required"),
  }),
  role: Yup.string().required("Required"),
  contri: Yup.array().of(Yup.string().required("Required")),
  tech: Yup.array()
    .of(
      Yup.object().shape({
        text: Yup.string().required("Skill name is required"),
        icon: Yup.string().required("Icon is required"),
      })
    )
    .min(1, "Atleast 1 skill is needed"),
});

/**
 * @description project validation schema
 */
export const projectSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  desc: Yup.string()
    .required("Required")
    .min(10, "minimum 10 characters needed")
    .max(100, "only 100 characters allowed"),
  repo: Yup.string().required("Required"),
  link: Yup.string(),
  from: Yup.date().required("Required"),
  present: Yup.boolean().required().default(false),
  to: Yup.date().when("present", {
    is: false,
    then: Yup.date().required("Required"),
  }),
  tech: Yup.array()
    .of(
      Yup.object().shape({
        text: Yup.string().required("Skill name is required"),
        icon: Yup.string().required("Skill icon is required"),
      })
    )
    .min(1, "Atleast 1 skill is needed"),
});

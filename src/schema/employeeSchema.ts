import * as Yup from 'yup'

export const employeeSchema = Yup.object().shape({
   name: Yup.string().required("Name is required"),
   position: Yup.string().required("Position is required"),
   department: Yup.string().required("Department is required"),
   email: Yup.string().email("Invalid email").required("Email is required"),
   phone: Yup.string().matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must not exceed 15 digits"),
   dateOfBirth: Yup.date().required("Date of birth is required"),
});

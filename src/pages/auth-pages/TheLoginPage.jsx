import * as yup from "yup";

import useAuthForm from "../../hooks/useAuthForm";

import { loginFormFields } from "../../utils/form-fields";
import { NavLink } from "react-router-dom";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

const loginFormSchema = yup
  .object({
    email: yup
      .string()
      .required("Missing email")
      .email("Please enter a valid email"),
    password: yup
      .string()
      .required("Missing password")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("number"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  })
  .required();

export default function TheLoginPage() {
  const loginDefaultValues = {
    email: "",
    password: "",
  };

  const redirectToRegisterForm = (
    <p className="text-center text-sm text-gray-500">
      Don't have an account? Click{" "}
      <span className="text-blue-600 font-semibold">
        <NavLink to={"/register"}>here </NavLink>{" "}
      </span>{" "}
      to register
    </p>
  );

  const { authForm } = useAuthForm({
    formDescription: "Please enter your email and password",
    formTitle: "Login",
    submitBtnLabel: "Log in",
    formFields: loginFormFields,
    defaultValues: loginDefaultValues,
    formSchema: loginFormSchema,
    authRedirect: redirectToRegisterForm,
  });
  return <>{authForm}</>;
}

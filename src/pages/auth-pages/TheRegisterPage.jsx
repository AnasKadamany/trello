import * as yup from "yup";

import useAuthForm from "../../hooks/useAuthForm";
import { registerFormFields } from "../../utils/form-fields";
import { NavLink } from "react-router-dom";
import { useSubscriptionContext } from "@/context/useSubscriptionContext";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "@/lib/axios-requests";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

const planRadio = [
  {
    id: "Free",
    type: "Free",
  },
  {
    id: "Premium",
    type: "Premium",
  },
];

const registerFormSchema = yup
  .object({
    email: yup
      .string()
      .required("Missing email")
      .email("Please enter a valid email"),
    name: yup.string().required("Missing name").min(1),
    password: yup
      .string()
      .required("Missing password")
      .min(8, "Password must have at least 8 characters")
      .matches(/[0-9]/, getCharacterValidationError("number"))
      .matches(/[a-z]/, getCharacterValidationError("lowercase"))
      .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    // confirmPassword: yup
    //   .string()
    //   .required("Missing confirm password")
    //   .oneOf([yup.ref("password")], "Password & Confirm Password do not match"),
    // plan: yup
    //   .string()
    //   .required()
    //   .oneOf(["Free", "Premium"], "Please select a plan"),
  })
  .required();
export default function TheRegisterPage() {
  const queryClient = useQueryClient();
  const registerDefaultValues = {
    email: "",
    name: "",
    password: "",
    // confirmPassword: "",
    // plan: "" || selectedPlan,
  };

  const { mutateAsync: createUserMutation } = useMutation({
    mutationFn: async (data) => {
      createUser(data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
    },
  });

  const { selectedPlan } = useSubscriptionContext();
  console.log("radio field is", selectedPlan);

  const redirectToLoginForm = (
    <p className="text-center text-sm text-gray-500">
      Already have an account? Click{" "}
      <span className="text-blue-600 font-semibold">
        <NavLink to={"/signin"}>here </NavLink>{" "}
      </span>{" "}
      to login
    </p>
  );

  const { authForm } = useAuthForm({
    submitBtnLabel: "Register",
    formTitle: "Register",
    formDescription: "Kindly fill the form below lets Get your Account Set Up",
    formFields: registerFormFields,
    formSchema: registerFormSchema,
    defaultValues: registerDefaultValues,
    authRedirect: redirectToLoginForm,
    plan: planRadio,
    mutationFn: createUserMutation,
  });

  return <>{authForm}</>;
}

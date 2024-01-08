import { TForm } from "./Builder";

export const LoginFormSchema: TForm[] = [
  {
    id: "email",
    label: "Email",
    placeholder: "email",
    type: "email",
    value: "",
    fullWidth: true,
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [5, "email cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [50, "email cannot be more than 50 characters"],
      },
      {
        type: "matches",
        params: [/^\S+@\S+$/i, "Email is invalid"],
      },
      {
        type: "email",
        params: ["please enter a valid email"],
      },
    ],
  },
  {
    id: "password",
    label: "password",
    placeholder: "password",
    type: "password",
    value: "",
    fullWidth: true,
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [5, "Passowrd cannot be less than 5 characters"],
      },
      {
        type: "max",
        params: [50, "Passowrd cannot be more than 50 characters"],
      },
    ],
  },
];

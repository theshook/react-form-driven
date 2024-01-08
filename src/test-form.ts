import { TForm } from "./Builder";

export const TestForm: TForm[] = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "Enter full name",
    type: "text",
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
        params: [2, "Full name cannot be less than 2 characters"],
      },
      {
        type: "max",
        params: [50, "Full name cannot be more than 50 characters"],
      },
    ],
  },
  {
    id: "username",
    label: "Username",
    placeholder: "Enter username",
    type: "text",
    value: "",
    validationType: "string",
    validations: [
      {
        type: "required",
        params: ["this field is required"],
      },
      {
        type: "min",
        params: [2, "Username cannot be less than 2 characters"],
      },
      {
        type: "max",
        params: [50, "Username cannot be more than 50 characters"],
      },
    ],
  },
  {
    id: "email",
    label: "Email",
    placeholder: "email",
    type: "email",
    value: "",
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

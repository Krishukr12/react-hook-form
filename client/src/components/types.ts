import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export type formData = {
  firstName: string;
  lastName: string;
};

export type customInput = {
  label: string;
  placeholder: string;
  error: FieldError | undefined;
  htmlFor: string;
  register: UseFormRegister<formData>;
  name: keyof formData;
  className?: string;
  type?: HTMLInputTypeAttribute;
};

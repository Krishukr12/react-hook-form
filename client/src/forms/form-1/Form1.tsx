import { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomInput } from "../../components";

export const Form1 = () => {
  const [isError, setIsError] = useState<boolean>(true);
  const { register } = useForm();

  return (
    <form className="flex flex-col gap-1 shadow-md p-10">
      <CustomInput
        placeholder="First Name"
        label="First Name"
        error="First Name is required"
        htmlFor="firstName"
      />
      <CustomInput
        placeholder="Last Name"
        label="Last Name"
        error="Last Name is required"
        htmlFor="lastName"
      />
      <section>
        <input type="Submit" />
      </section>
    </form>
  );
};

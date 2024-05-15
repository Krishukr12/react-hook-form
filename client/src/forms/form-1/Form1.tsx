import { useForm } from "react-hook-form";
import { CustomInput } from "../../components";
import { zodResolver } from "@hookform/resolvers/zod";
import { formData } from "./types";

import form1Schema from "./schema";

export const Form1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(form1Schema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: formData) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-1 shadow-md p-10"
    >
      <CustomInput
        placeholder="First Name"
        label="First Name"
        error={errors.firstName}
        htmlFor="firstName"
        register={register}
        name="firstName"
        type="text"
      />
      <CustomInput
        placeholder="Last Name"
        label="Last Name"
        error={errors.lastName}
        htmlFor="lastName"
        register={register}
        name="lastName"
      />
      <section>
        <input type="Submit" />
      </section>
    </form>
  );
};

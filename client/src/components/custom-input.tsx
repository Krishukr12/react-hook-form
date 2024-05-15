import { customInput } from "./types";

export const CustomInput: React.FC<customInput> = ({
  label,
  error,
  placeholder,
  htmlFor,
  register,
  name,
  type = "text",
  className = "flex flex-col",
  ...props
}) => {
  return (
    <section className={className}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        {...register(name)}
        placeholder={placeholder}
        id={htmlFor}
        type={type}
        {...props}
      />
      {error && <span className="text-red-600">{error.message}</span>}
    </section>
  );
};

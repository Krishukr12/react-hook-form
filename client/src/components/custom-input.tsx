type customInput = {
  label: string;
  placeholder: string;
  error: string;
  htmlFor: string;
};
export const CustomInput = ({
  label,
  error,
  placeholder,
  htmlFor,
}: customInput) => {
  return (
    <section className="flex flex-col">
      <label htmlFor={htmlFor}>{label}</label>
      <input placeholder={placeholder} id={htmlFor} />
      {error && <span className="text-red-600">{error}</span>}
    </section>
  );
};

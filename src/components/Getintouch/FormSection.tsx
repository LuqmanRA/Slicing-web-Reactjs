import Button from "./Button";
import { form } from "../../data/form";
import { useState, useEffect } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const FormSection = () => {
  const initialValues: FormValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const errors = validate({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: errors[name as keyof FormErrors] });
  };

  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Field is required";
    }
    if (!emailRegex.test(values.email) || !values.email) {
      errors.email = "The email doesn't look real!";
    }
    if (!values.message) {
      errors.message = "Field is required";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      e.currentTarget.submit();
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setFormValues(initialValues);
      setFormErrors({});
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <section className="bg-white px-4 pb-20 pt-40 md:px-6 md:pb-[120px] lg:px-20 lg:pt-[200px] xl:px-[156px] xl:pt-[240px] 2xl:px-[256px]">
      <div className="mr-auto max-w-[700px] 2xl:m-auto 2xl:max-w-[1408px]">
        <div className="flex flex-col gap-10 2xl:max-w-[700px]">
          <div className="flex flex-col gap-y-6 text-black">
            <h1 className="text-[48px] md:text-[56px] lg:text-[72px] xl:text-[88px] tracking-[-2px]">
              Get in touch
            </h1>
            <p className="text-xl">
              Before we start, we would like to better understand your needs.
              We'll review your application and schedule a free estimation call.
            </p>
          </div>
          <form
            action="https://api.sheetmonkey.io/form/pSqRyK7eHe96go8o6rDLXf"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="mb-16 flex flex-col gap-12 md:mb-20">
              <div className="flex flex-col gap-8 md:gap-6">
                <div className="relative flex flex-col gap-6">
                  <input
                    className="form md:py-6"
                    type="text"
                    name="name"
                    id="name"
                    value={formValues.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    aria-label="Your name"
                  />
                  <span
                    className={
                      formErrors.name
                        ? "text-red-500 text-xs absolute duration-300 !bottom-[-17px] opacity-100 transition-all"
                        : "text-red-500 text-xs absolute duration-300 transition-all bottom-1 opacity-0"
                    }
                  >
                    {formErrors.name}
                  </span>
                </div>
                <div className="relative flex flex-col gap-6">
                  <input
                    className="form md:py-6"
                    type="text"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your email"
                    aria-label="Your email"
                  />
                  <span
                    className={
                      formErrors.email
                        ? "text-red-500 text-xs absolute duration-300 !bottom-[-17px] opacity-100 transition-all"
                        : "text-red-500 text-xs absolute duration-300 transition-all bottom-1 opacity-0"
                    }
                  >
                    {formErrors.email}
                  </span>
                </div>
                <div className="relative flex flex-col gap-6">
                  <textarea
                    name="message"
                    className="text-lg text-[#131623] bg-white md:py-6 min-h-[65px] resize-none md:min-h-[81px] rounded-none"
                    placeholder="Tell us about your project"
                    value={formValues.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="message"
                    aria-label="Your message"
                  ></textarea>
                  <span
                    className={
                      formErrors.message
                        ? "text-red-500 text-xs absolute duration-300 !bottom-[-17px] opacity-100 transition-all"
                        : "text-red-500 text-xs absolute duration-300 transition-all bottom-1 opacity-0"
                    }
                  >
                    {formErrors.message}
                  </span>
                </div>
                <input
                  type="hidden"
                  name="x-sheetmonkey-redirect"
                  value="http://localhost:5173/thanks"
                />
              </div>
              <div className="relative flex flex-col gap-6">
                <label className="text-[#131623] text-lg">Project budget</label>
                <div className="flex flex-wrap gap-[12px]">
                  {form.map((item) => (
                    <div
                      key={item.id}
                      className="radio relative cursor-pointer overflow-hidden rounded-[48px] py-2 px-4 border border-solid border-[#131623] text-[#131623]"
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={item.value}
                        className="absolute cursor-pointer left-0 top-0 h-full w-full border-0 opacity-0"
                      />
                      <label className="text-lg cursor-pointer">
                        {item.value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:flex">
              <Button />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiLock } from "react-icons/ci";
import {  logoImage, tandymImage } from "../assets";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
/*
  TODO: Refactor using the composable pattern
    - Reutilize the CSS styles for repeated components
    - Extract the repeated components into their own components
    - Remove unused code
    - extract the form schema into its own file
     
 */
const Confirmation = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      agreement: false,
      terms: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      dateOfBirth: Yup.string()
      .required("Date of Birth is required")
      .test(
        'valid-date',
        'Date of Birth must be a valid date in MM/DD/YYYY format',
        (value) => {
          if (!value) return false; // if the value is empty, let required handle it
          const date = new Date(value);
          return !isNaN(date.getTime()); // check if the date is valid
        }
      )
      .test(
        'max-date',
        'Date of Birth must be before or on 12/31/2020',
        (value) => {
          if (!value) return false; // if the value is empty, let required handle it
          const date = new Date(value);
          const maxDate = new Date(2020, 11, 31);
          return date <= maxDate;
        }
      ),
    agreement: Yup.boolean().oneOf(
      [true],
      "You must accept the Customer Agreement"
    ),
      // .matches(
      //   /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/,
      //   "Date of Birth must be in MM/DD/YYYY format"
      // ),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the Terms of Service & Privacy Policy"
      ),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {

      console.log(values);
      navigate('/user-detail')
      // Handle form submission
    },
  });

  return (
    <main className="w-full sm:w-[24rem] mx-auto">
      <div className="pt-4 text-center">
        <div className="mx-auto px-3">
          <div className="relative">
            <img src={logoImage} className="w-28 mx-auto" alt="Logo" />
          </div>
        </div>
        <div className="border-y border-gray-200 mt-5 text-sm font-medium text-gray-500 py-1 flex justify-center items-center gap-1">
          <span>
            <CiLock fontSize={15} />
          </span>
          Secured and powered by{" "}
          <img src={tandymImage} className="h-3" alt="Tandym" />
        </div>
        <section className="text-black px-3">
          <p className="text-[1.5rem] sm:text-2xl leading-8 text-black font-bold mt-8 text-left w-[80%]">
            Let’s get you a debit account! 🚀
          </p>
          <p className="mt-4 text-left text-base text-TextColor w-[90%]">
            Confirm the information below and continue to connect your bank
            account with Plaid securely.
          </p>
          <form onSubmit={formik.handleSubmit} className="mt-8">
            <section className="sm:flex justify-center align-middle gap-3">
              <div>
                <div className={InputContainerCss}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={InputCss}
                    placeholder="First Name"
                    {...formik.getFieldProps("firstName")}
                  />
                  <label htmlFor="firstName" className={InputLabelCss}>
                    First Name
                  </label>
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className={ValidateCss}>
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>

              <div className="mt-4 sm:mt-0">
                <div className={InputContainerCss}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={InputCss}
                    placeholder="Last Name"
                    {...formik.getFieldProps("lastName")}
                  />
                  <label htmlFor="lastName" className={InputLabelCss}>
                    Last Name
                  </label>
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className={ValidateCss}>
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </section>

            <div className={`${InputContainerCss} mt-4`}>
              <InputMask
                mask="99/99/9999"
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    className={InputCss}
                    placeholder="MM/DD/YYYY"
                  />
                )}
              </InputMask>
              <label
                htmlFor="dateOfBirth"
                className="absolute left-4 -top-3 text-gray-600 text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-gray-600 peer-focus:text-xs"
              >
                Date of Birth
              </label>
            </div>
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
              <div className={ValidateCss}>
                {formik.errors.dateOfBirth}
              </div>
            ) : null}

            <div className={`${InputContainerCss} mt-4`}>
              <input
                type="email"
                id="email"
                name="email"
                className={InputCss}
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              <label htmlFor="email" className={InputLabelCss}>
                Email
              </label>
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className={ValidateCss}>
                {formik.errors.email}
              </div>
            ) : null}

            <ul className="space-y-4 text-left text-black dark:text-gray-400">
              <li className="flex items-start justify-start space-x-1 sm:space-x-0 mt-4">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    {...formik.getFieldProps("agreement")}
                  />
                  <span className="checkmark"></span>

                 {/* Custom Checkbox   */}
                </label>
                {/* <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  className="w-5 h-5 sm:w-7 sm:h-7 form-checkbox rounded-full focus:ring-0"
                  {...formik.getFieldProps("agreement")}
                /> */}
                <p className="text-xs font-medium flex-1 leading-4">
                  I have reviewed and agree to the{" "}
                  <span className="text-blue-600">Customer Agreement</span> and
                  would like to open an account by connecting my bank account.
                </p>
              </li>
              {formik.touched.agreement && formik.errors.agreement ? (
                <div className={ValidateCss}>
                  {formik.errors.agreement}
                </div>
              ) : null}
              <li className="flex items-start justify-start space-x-1 sm:space-x-0 mt-4">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox"
                    {...formik.getFieldProps("terms")}
                  />
                  <span className="checkmark"></span>
                  {/* Custom Checkbox   */}
                </label>
                {/* <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="w-5 h-5 sm:w-7 sm:h-7 form-checkbox rounded-full focus:ring-0"
                  {...formik.getFieldProps("terms")}
                /> */}
                <p className="text-xs font-medium flex-1 leading-4">
                  I have reviewed and agree to the{" "}
                  <span className="text-blue-600">Terms of Service</span> &{" "}
                  <span className="text-blue-600">Privacy Policy</span> of
                  Tandym’s payment provider.
                </p>
              </li>
              {formik.touched.terms && formik.errors.terms ? (
                <div className={ValidateCss}>
                  {formik.errors.terms}
                </div>
              ) : null}
            </ul>

            <button
              type="submit"
              className={`${
                formik.isValid && formik.dirty
                  ? "bg-TextColor cursor-pointer"
                  : "bg-disableBtn opacity-[0.5] cursor-default hover:opacity-100 hover:bg-[#8a9a9b]"
              } border-none mx-auto text-base font-semibold mt-8 w-full text-white rounded-3xl py-2 mb-8`}
              disabled={!(formik.isValid && formik.dirty)}
            >
              Continue to Connect Bank Account
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Confirmation;


const InputLabelCss =
  "absolute left-4 -top-2 text-[#6A6B6B] text-sm transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-[#6A6B6B] peer-placeholder-shown:top-2 peer-focus:-top-2 peer-focus:text-[#6A6B6B] peer-focus:text-sm input-label";
const InputContainerCss =
  "relative border-t-[16px] rounded-t-md input-container ";
const InputCss =
  "peer h-10 w-full bg-transparent pl-4 text-gray-900 placeholder-transparent focus:outline-none border-b border-gray-500 focus:border-b-2 focus:border-black font-normal";
const ValidateCss = "text-red-600 text-xs text-left"

import React from "react";
import Navbar from "../components/Navbar";
import { GlobalStyles } from "../styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lighTheme, darkTheme } from "../styled/theme";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import img from "../images/bg_pexels2.jpg";
import me3 from "../images/me3.png";
import "../styles/Contact.css";

function Contact() {
  const { theme } = useSelector((state) => state.dark_theme);
  const checkCurrentTheme = theme === "light" ? lighTheme : darkTheme;
  const navigate = useNavigate();

  const name = "([A-Z])+";
  const city = "([A-Z])+";

  //formik logic; initial values

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      terms: "",
    },

    //validate the form
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(name, "Name is invalid")
        .max(25, "Name must be 20 characters or less.")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      city: Yup.string()
        .matches(city, "City is invalid")
        .max(20, "City must be 20 characters or less.")
        .required("City is required"),

      terms: Yup.array().required("Terms of service must be checked"),
    }),

    //submit the form

    onSubmit: (values) => {
      console.log(values);
      navigate("/success", { replace: true, state: values.name });
    },
  });

  console.log(formik.errors);

  console.log(formik.values);

  const hidden = {
    opacity: 0,
    y: 50,
  };

  const show = {
    opacity: 1,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  };

  const exit = {
    opacity: 0,
    transition: { duration: 0.55 },
  };
  return (
    <ThemeProvider theme={checkCurrentTheme}>
      <GlobalStyles />
      <m.div
        className="contact contact_  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <div className="contact_ w-full">
          <main className="z-50 flex h-screen items-center justify-center">
            <m.form
              initial={hidden}
              animate={show}
              exit={exit}
              onSubmit={formik.handleSubmit}
              className="form_bg form flex w-11/12 rounded-lg bg-[#000000b5] lg:w-3/5 "
            >
              <div className="flex-1 p-16">
                <h1 className="pb-2 text-3xl font-bold text-white ">
                  Get in touch!
                </h1>
                <p className="text-sm text-white sm:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, eos!
                </p>

                <div className="mt-6">
                  {/*name input field*/}
                  <div className="pb-4">
                    {/** update the label based on if i have an error or not */}
                    <label
                      htmlFor="name"
                      className={`block pb-2 text-sm font-medium text-white ${
                        formik.touched.name && formik.errors.name
                          ? "text-[#ff7256]"
                          : ""
                      }`}
                    >
                      {formik.touched.name && formik.errors.name
                        ? formik.errors.name
                        : "Name"}
                    </label>
                    {/** when i typed another start updating with error message already */}
                    <input
                      className={` m w-11/12 rounded-md  border-2 border-[#7a592b] p-2  focus:border-[#7a592b] focus:ring-[#7a592b] sm:w-3/5 ${
                        formik.touched.name && formik.errors.name
                          ? "border-[#ff7256]"
                          : " border-[#7a592b]"
                      }`}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {/*email input field*/}
                  <div className="pb-4">
                    <label
                      htmlFor="email"
                      className={`block pb-2 text-sm font-medium text-white ${
                        formik.touched.email && formik.errors.email
                          ? "text-[#ff7256]"
                          : ""
                      }`}
                    >
                      {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : "Email"}
                    </label>
                    <input
                      className={` w-11/12 rounded-md border-2 border-[#7a592b] p-2 focus:border-[#7a592b]    focus:ring-[#7a592b] sm:w-3/5 ${
                        formik.touched.email && formik.errors.email
                          ? "border-[#ff7256]"
                          : " border-[#7a592b]"
                      }`}
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {/*City input field*/}
                  <div className="pb-4">
                    <label
                      htmlFor="city"
                      className={`block pb-2 text-sm font-medium text-white ${
                        formik.touched.city && formik.errors.city
                          ? "text-[#ff7256] "
                          : ""
                      }`}
                    >
                      {formik.touched.city && formik.errors.city
                        ? formik.errors.city
                        : "City"}
                    </label>
                    <input
                      className={` w-11/12 rounded-md border-2  p-2 focus:border-[#7a592b]   focus:ring-[#7a592b] sm:w-3/5 ${
                        formik.touched.city && formik.errors.city
                          ? "border-[#ff7256]"
                          : " border-[#7a592b]"
                      }`}
                      type="text"
                      name="city"
                      placeholder="Enter your City"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  {/*terms input field*/}
                  <div className="pb-4">
                    <label
                      htmlFor="terms"
                      className={`block pb-2 text-sm font-medium  text-white ${
                        formik.touched.terms && formik.errors.terms
                          ? "text-[#ff7256]"
                          : ""
                      }`}
                    >
                      {formik.touched.terms && formik.errors.terms
                        ? formik.errors.terms
                        : "Terms of Service"}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="terms"
                        id=""
                        value="checked"
                        onChange={formik.handleChange}
                        className={`h-5 w-5 border-2 focus:border-[#7a592b] focus:ring-[#7a592b] ${
                          formik.touched.terms && formik.errors.terms
                            ? "border-[#ff7256]"
                            : " border-[#7a592b]"
                        }`}
                      />

                      <p className="sm:text-md text-sm font-medium text-white">
                        I agree with Terms and Privacy
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-11/12 rounded-lg bg-[#A18763] py-3 text-sm text-white sm:w-3/5  "
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="box2  flex-1 ">
                <img src={img} alt="image1" className="image rounded-lg " />
              </div>
            </m.form>
          </main>
        </div>
      </m.div>
    </ThemeProvider>
  );
}

export default Contact;

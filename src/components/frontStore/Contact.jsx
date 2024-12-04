import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name]) {
      validate();
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    validate();
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Field is required!";
    }
    if (!formData.message) {
      newErrors.message = "Field is required!";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  return (
    // <div
    //   className="h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center w-96 z-10"
    //   style={{ backgroundImage: "url('/assets/background.jpg')" }}
    // >
    //   <form
    //     className="bg-white bg-opacity-80 rounded-lg p-10 shadow-lg max-w-3xl w-full text-center"
    //     onSubmit={handleSubmit}
    //   >
    //     <h2
    //       className="text-3xl font-bold mb-6"
    //       style={{ fontFamily: "Poppins, sans-serif" }}
    //     >
    //       Contact Us
    //     </h2>
    //     <div className="mb-6">
    //       <input
    //         type="text"
    //         name="name"
    //         className="form-input border-b border-gray-300 focus:border-black outline-none w-full py-2 px-4"
    //         value={formData.name}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //       />
    //       <label
    //         className={`block text-gray-500 ${
    //           formData.name ? "text-xs -mt-4" : "text-base"
    //         }`}
    //       >
    //         Name
    //       </label>
    //     </div>
    //     <div className="mb-6 relative">
    //       <input
    //         type="email"
    //         name="email"
    //         className={`form-input border-b w-full border-gray-300 focus:border-black outline-none py-2 px-4 ${
    //           errors.email && "border-red-500 text-red-500"
    //         }`}
    //         value={formData.email}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         required
    //       />
    //       <label
    //         className={`block text-gray-500 ${
    //           formData.email ? "text-xs -mt-4" : "text-base"
    //         }`}
    //       >
    //         Your email *
    //       </label>
    //       {errors.email && touched.email && (
    //         <div className="absolute text-red-500 text-xs -bottom-5 right-0">
    //           {errors.email}
    //         </div>
    //       )}
    //     </div>
    //     <div className="mb-6">
    //       <input
    //         type="text"
    //         name="subject"
    //         className="form-input border-b border-gray-300 focus:border-black outline-none w-full py-2 px-4"
    //         value={formData.subject}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //       />
    //       <label
    //         className={`block text-gray-500 ${
    //           formData.subject ? "text-xs -mt-4" : "text-base"
    //         }`}
    //       >
    //         Subject
    //       </label>
    //     </div>
    //     <div className="mb-6 relative">
    //       <textarea
    //         name="message"
    //         className={`form-input border-b w-full border-gray-300 focus:border-black outline-none py-2 px-4 ${
    //           errors.message && "border-red-500 text-red-500"
    //         }`}
    //         value={formData.message}
    //         onChange={handleChange}
    //         onBlur={handleBlur}
    //         required
    //       ></textarea>
    //       <label
    //         className={`block text-gray-500 ${
    //           formData.message ? "text-xs -mt-4" : "text-base"
    //         }`}
    //       >
    //         Message
    //       </label>
    //       {errors.message && touched.message && (
    //         <div className="absolute text-red-500 text-xs -bottom-5 right-0">
    //           {errors.message}
    //         </div>
    //       )}
    //     </div>
    //     <button
    //       type="submit"
    //       style={{
    //         background: "rgba(0, 0, 0, 0.2)",
    //         boxShadow: "0 4px 30px rgba(0, 0, 0, 0.25)",
    //         border: "1px solid rgba(0, 0, 0, 0.1)",
    //         color: "black",
    //         fontWeight: "600",
    //         transition: "all 0.5s ease-in-out",
    //       }}
    //       className="bg-blue-500 text-white px-8 py-4 rounded-lg"
    //     >
    //       SUBMIT
    //     </button>
    //   </form>
    // </div>
    <div className="mt-30">
      <div
        id="FooterNewsletterSignup_TB822F692038_Col00"
        data-sf-element="Container"
        data-placeholder-label="Container"
      >
        <div>
          <div style={{ color: "black" }}>
            <h4
              style={{
                textAlign: "center",
                fontSize: 38,
                fontFamily: `"Roboto Condensed", sans-serif`,
              }}
            >
              STAY CONNECTED
            </h4>
            <p
              style={{ textAlign: "center", display: "block", fontSize: 22 }}
              class="balance-text"
            >
              You won’t want to miss our emails! You'll be the first to know
              about product
              <p data-owner="balance-text">
                launches, upcoming trade shows, and other exciting Baldwin
                Hardware news.
              </p>
            </p>
            <div className="flex justify-center">
              <p
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  fontSize: 25,
                  fontFamily: `"Roboto Condensed", sans-serif`,
                  border: "2px solid",
                  width: 400,
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a href="/email-signup" class="btn btn-outline-primary">
                  SUBSCRIBE TO OUR EMAIL LIST
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

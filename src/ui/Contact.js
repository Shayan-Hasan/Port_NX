import React, { useEffect, useState, useRef } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const inputRef = useRef(null);

  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [flag, setflag] = useState("");

  const { username, email, subject, message, country, phone } = inputFields;

  const validateValues = (inputValues) => {
    let errors = {};

    if (inputValues.username.length < 2) {
      errors.username = "userName is too short";
    }
    if (inputValues.email.length < 5) {
      errors.email = "Email is too short";
    }
    if (inputValues.subject.length < 5) {
      errors.subject = "Subject is too short";
    }
    if (inputValues.message.length < 10) {
      errors.message = "Message is too short";
    }

    if (inputValues.phone.length < 4) {
      errors.phone = "Phone no is too short";
    }
    if (inputValues.country.length < 4) {
      errors.country = "Phone no is too short";
    }
    return errors;
  };

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
    console.log(form.current);
    const emailTemplate = {
      to_name: "sss",

      from_name: "s",

      message: "ssssssssssssss",
    };
    // email configure
    emailjs.init("IarDpEIKBOU2emLwA");
    emailjs
      .sendForm(
        // "service_xahufqr",
        // "template_q7mgx7u",
        // form.current,
        // "IarDpEIKBOU2emLwA"
        "service_f6j5l2s",
        "template_j0wa5hw",
        form.current,
        "WxqMThHUeBFMBX-WB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    inputRef.current.value = "";
    setInputFields({
      username: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
      country: "",
    });
  };

  const finishSubmit = () => {
    console.log(inputFields);
    //inputRef.current.value = '';
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  const pkgfunc = (edition, pk) => {
    var str =
      `I'm interested in your inventory management services, specifically the ${edition} edition. ` +
      `Could you please provide me with more information about the features, ` +
      `pricing, and  customization options available in ${pk} package? ` +
      `Additionally, I would like to schedule a consultation meeting to discuss our specific requirements in more detail.`;
    setInputFields({ ...inputFields, message: str });
  };
  useEffect(() => {
    function fetch() {
      var e = "",
        p = "";
      if (flag) {
        if (flag === "b1") {
          e = "Business";
          p = "Essential";
        }
        if (flag === "b2") {
          e = "Business";
          p = "Standard";
        }
        if (flag === "b3") {
          e = "Business";
          p = "Advanced";
        }
        if (flag === "c1") {
          e = "Custom";
          p = "Basic";
        }
        if (flag === "c2") {
          e = "Custom";
          p = "Professional";
        }
        if (flag === "c3") {
          e = "Custom";
          p = "Enterprise";
        }

        if (flag === "s1") {
          e = "Social";
          p = "Starter";
        }
        if (flag === "s2") {
          e = "Social";
          p = "Pro";
        }
        if (flag === "s3") {
          e = "Social";
          p = "Elite";
        }
        pkgfunc(e, p);
      }
    }
    fetch();
  }, [flag]);

  useEffect(() => {
    function fetch() {
      if (!JSON.parse(localStorage.getItem("pkg"))) {
        const pkg = {
          pkg: "",
        };
        localStorage.setItem("pkg", JSON.stringify(pkg));
      }
      const pkg = JSON.parse(localStorage.getItem("pkg"));
      if (pkg["pkg"] != "") {
        setflag(pkg["pkg"]);
        const pkg1 = {
          pkg: "",
        };
        localStorage.setItem("pkg", JSON.stringify(pkg1));
      }
    }
    fetch();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Contact Us"} img={contactHeader} />
      <main id="main">
        <section id="contact" className="contact">
          <div className="container position-relative" data-aos="fade-up">
            <div className="section-header">
              <h2> Lets have a TALK </h2>
            </div>

            <div className="row gy-4 d-flex justify-content-end">
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>Location:</h4>
                    <h5>PAKISTAN</h5>
                    <p>North Nazimabad, Karachi, Pakistan.</p>
                    {/* <br /> */}
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:shayanhasan2002@gmail.com">
                        shayanhasan2002@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>Call:</h4>
                    <p>+92 - 332 - 7905929</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
                <form
                  ref={form}
                  className="php-email-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        autoFocus
                        ref={inputRef}
                        onChange={handleChange}
                        value={username}
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Your Name"
                        style={{
                          border: errors.username ? "1px solid red" : null,
                        }}
                      />
                      {errors.username ? (
                        <small className="error">
                          Username should be at least 3 characters long
                        </small>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        ref={inputRef}
                        onChange={handleChange}
                        value={email}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        style={{
                          border: errors.email ? "1px solid red" : null,
                        }}
                      />
                      {errors.email ? (
                        <small className="error">Enter valid email id </small>
                      ) : null}
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6 form-group">
                      <input
                        ref={inputRef}
                        onChange={handleChange}
                        value={phone}
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        style={{
                          border: errors.phone ? "1px solid red" : null,
                        }}
                      />
                      {errors.phone ? (
                        <small className="error">
                          Phone should be at least 3 characters long
                        </small>
                      ) : null}
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        ref={inputRef}
                        onChange={handleChange}
                        value={country}
                        type="text"
                        className="form-control"
                        name="country"
                        placeholder="Country"
                        style={{
                          border: errors.country ? "1px solid red" : null,
                        }}
                      />
                      {errors.country ? (
                        <small className="error">
                          Enter valid country name{" "}
                        </small>
                      ) : null}
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <input
                      ref={inputRef}
                      onChange={handleChange}
                      value={subject}
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      style={{
                        border: errors.message ? "1px solid red" : null,
                      }}
                    />
                    {errors.subject ? (
                      <small className="error">
                        Subject should be at least 5 characters long
                      </small>
                    ) : null}
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      ref={inputRef}
                      onChange={handleChange}
                      value={message}
                      className="form-control"
                      name="message"
                      rows="8"
                      placeholder="Message"
                      style={{
                        border: errors.message ? "1px solid red" : null,
                      }}
                    ></textarea>
                    {errors.message ? (
                      <small className="error">
                        message should be at least 10 characters long
                      </small>
                    ) : null}
                  </div>

                  <p className="text-center">
                    {Object.keys(errors).length === 0 && submitting ? (
                      <div className="alert alert-success p-2 ">
                        Successfully submitted ✓
                      </div>
                    ) : null}
                  </p>

                  <div className="text-center">
                    <button className="btn btn-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;

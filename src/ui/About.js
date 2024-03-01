import React from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import about_img from "../img/about-image.jpg";
import manag_photo1 from "../img/team/shayuu3.jpg";
import manag_photo2 from "../img/team/sallu3.jpeg";
// import manag_photo2 from "../img/team/Sundaramoorthy.png";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import abtHeader from "../img/about-header.jpg";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"About Us"} img={abtHeader} />

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Helping Clients ACHIEVE their Vision</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
              <div className="col-lg-6">
                <img
                  style={{ borderRadius: "10px" }}
                  src={about_img}
                  className="img-fluid"
                  alt="Helping Clients achieve their Vision"
                  title="Helping Clients achieve their Vision"
                />
              </div>
              <div className="col-lg-6">
                <p>
                  {" "}
                  We are a leading provider of comprehensive business solutions,
                  specializing in inventory management systems, ERP software,
                  POS systems, and customized website development services. With
                  a focus on excellence and innovation, we leverage our deep
                  understanding of industry dynamics and technological
                  advancements to deliver tailored solutions that optimize
                  business operations and drive growth.
                </p>
                <p>
                  {" "}
                  Our inventory management systems offer real-time visibility
                  into stock levels, streamline ordering processes, and enhance
                  inventory control, enabling businesses to minimize stockouts,
                  reduce carrying costs, and improve overall efficiency.
                </p>
                <p>
                  {" "}
                  Our ERP and POS solutions integrate essential business
                  functions such as finance, human resources, supply chain
                  management, and customer relationship management, providing
                  organizations with a unified platform for seamless operations
                  and informed decision-making.
                </p>
                <p>
                  {" "}
                  Driven by a commitment to excellence and customer
                  satisfaction, we strive to be the trusted partner that
                  empowers businesses to achieve their goals, innovate, and
                  succeed in an ever-evolving marketplace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          id="vision"
          className="vision aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Vision</h4>
                        <p>
                          Empowering Progress: NEXUSAN fuels global connectivity
                          to enhance lives and optimize the world's operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 aos-init">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title"> Mission</h4>
                        <p>
                          We are dedicated to delivering innovative inventory
                          management systems, ERP solutions, POS systems. By
                          harnessing the latest technologies and industry
                          expertise, we aim to streamline operations, drive
                          profitability, and foster lasting success for our
                          clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 aos-init"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="card-body">
                        <h4 className="card-title">Our Values</h4>
                        <p>
                          {" "}
                          We are a leading provider of comprehensive business
                          solutions, specializing in inventory management
                          systems, ERP software, POS systems, and customized
                          website development services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="management"
          className="management light-bg aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="section-header">
              <h2>Our Leaders</h2>
              <p>
                Our team envisions revolutionizing business through innovative
                solutions and unwavering dedication to customer success.
              </p>
            </div>
            <div className="row member d-flex align-items-center ">
              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                <div className="pic">
                  <img src={manag_photo1} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-9 col-lg-10 col-xl-10">
                <div className="member-info">
                  <h4>Syed Shayan Hasan</h4>
                  <span>Co-Founder & CEO</span>
                  <p>
                    Shayan as executive of our esteemed company, brings a wealth
                    of expertise with 4+ years of extensive experience. He is
                    avid contributor to the open-source community, passionate
                    about sharing knowledge and collaborating with like-minded
                    individuals to solve complex real world problems to make
                    life easier.
                  </p>
                  <div className="social">
                    <Link
                      to="https://www.linkedin.com/in/syed-shayan-hasan-1610a820b/"
                      className="linkedin"
                    >
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row member d-flex align-items-center ">
              <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                <div className="pic">
                  <img src={manag_photo2} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-xs-8 col-sm-8 col-md-9 col-lg-10 col-xl-10">
                <div className="member-info">
                  <h4>Salman Mehmood</h4>
                  <span>Co-Founder & COO</span>
                  <p>
                    Salman as operating officer, spearheads our organization with
                    a unique blend of talents. His exceptional communication skills
                    serve as the cornerstone of our operational efficiency. His
                    natural talent for people management fosters a thriving,
                    harmonious work environment where individuals excel under his
                    leadership.
                  </p>
                  <div className="social">
                    <Link
                      to="https://www.linkedin.com/in/salman-mehmood106"
                      className="linkedin"
                    >
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

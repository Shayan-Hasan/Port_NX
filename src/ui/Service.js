import React from "react";
import education from "../img/business.jpg";
import entertainment from "../img/custom.jpg";
import games from "../img/social.jpg";
import sports from "../img/sports-bg.png";
import { Link } from "react-router-dom";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from "../img/services-header.jpg";

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img={serviceHeader} />

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                Empowering Progress: NEXUSAN fuels global connectivity to
                enhance lives and optimize the world's operations.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  style={{ borderRadius: "10px" }}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-briefcase"
                    style={{ color: "#f57813" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Business Edition </h4>
                  <p className="description">
                    Our Business Edition offers comprehensive inventory
                    management solutions tailored to suit various business
                    needs.
                  </p>
                  <p className="description">
                    With this package, clients can access a range of services
                    hosted on our domain, ensuring reliability, security, and
                    seamless integration.
                  </p>
                  <p className="description">
                    Our Business Edition is ideal for businesses seeking a
                    cost-effective solution that streamlines inventory tracking,
                    optimizes operations, and enhances overall efficiency.
                  </p>
                  <Link
                    to="/services/BusinessEdition"
                    className="btn-get-started"
                  >
                    Select
                  </Link>
                  <p className="description">
                    <span className="fw-bold"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-tools" style={{ color: "#15a04a" }}></i>
                </div>
                <div>
                  <h4 className="title"> Custom Edition </h4>
                  <p className="description">
                    Our Custom Edition caters to clients with unique
                    requirements and preferences, offering personalized
                    inventory management solutions tailored to their specific
                    domain and business processes.
                  </p>
                  <p className="description">
                    With this package, clients have full ownership of the
                    domain, allowing for greater flexibility, customization, and
                    control. We work closely with each client to understand
                    their needs, develop customized features and
                    functionalities, and integrate them seamlessly into the
                    inventory management system.
                  </p>
                  <Link
                    to="/services/CustomEdition"
                    className="btn-get-started"
                  >
                    Select
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={entertainment}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  style={{ borderRadius: "10px" }}
                  src={games}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-people" style={{ color: "#f5cf13" }}></i>
                </div>
                <div>
                  <h4 className="title">Social Edition </h4>
                  <p className="description">
                    Introducing our Social Edition, a revolutionary inventory
                    management solution that goes beyond traditional offerings
                    by integrating social media platforms such as Amazon,
                    TikTok, and Facebook.
                  </p>
                  <p className="description">
                    In addition to the robust features available in our Business
                    Edition, the Social Edition enables seamless integration
                    with popular social media platforms, allowing businesses to
                    leverage the power of social commerce and expand their reach
                    to a wider audience.
                  </p>
                  <p className="description">
                    Whether you're a retail brand looking to enhance your online
                    presence or a social media influencer seeking to monetize
                    your platform.
                  </p>
                  <Link
                    to="/services/SocialEdition"
                    className="btn-get-started"
                  >
                    Select
                  </Link>
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

export default Service;

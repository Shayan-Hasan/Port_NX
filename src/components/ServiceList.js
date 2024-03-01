import React from "react";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we offer? </h2>
            <p>
              Empowering Progress: NEXUSAN fuels global connectivity to enhance
              lives and optimize the world's operations.
              <br />
              <br />
              Let's Get Connected!
            </p>
          </div>
          <div className="row gy-5">
            <div
              className="col-lg-4 col-md-4 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-briefcase"
                    style={{ color: "#f57813" }}
                  ></i>
                </div>

                <h4 className="title">
                  <Link
                    to="/services/BusinessEdition"
                    className="stretched-link"
                  >
                    Business Edition{" "}
                  </Link>
                </h4>
                <p className="description">
                  Efficient business management services hosted on our domain
                  for streamlined operations and enhanced efficiency.
                </p>
                <Link
                  to="/services/BusinessEdition"
                  className="btn-get-started"
                >
                  Select
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-tools" style={{ color: "#15a04a" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link
                      to="/services/CustomEdition"
                      className="stretched-link"
                    >
                      Custom Edition
                    </Link>
                  </h4>
                  <p className="description">
                    Tailored custom solutions specific to client domains,
                    offering personalized features and full domain ownership.
                  </p>
                  <Link
                    to="/services/CustomEdition"
                    className="btn-get-started"
                  >
                    Select
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="single-service">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-people" style={{ color: "#f5cf13" }}></i>
                </div>
                <div>
                  <h4 className="title">
                    <Link
                      to="/services/SocialEdition"
                      className="stretched-link"
                    >
                      Social Edition
                    </Link>
                  </h4>
                  <p className="description">
                    Seamless integration with popular social media platforms
                    like Amazon and Facebook, enhancing business with social
                    commerce capabilities.
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
        </div>
      </section>
    </>
  );
};

export default ServiceList;

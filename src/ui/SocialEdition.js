import React from "react";
import education from "../img/social.jpg";
import entertainment from "../img/entertainment-bg.png";
import games from "../img/games-bg.png";
import sports from "../img/sports-bg.png";
import { Link } from "react-router-dom";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from "../img/services-header.jpg";
import "../index.css";
import { Navigate } from "react-router-dom/dist";

const SocialEdition = () => {
  const handleClick1 = () => {
    const pkg = {
      pkg: "s1",
    };
    localStorage.setItem("pkg", JSON.stringify(pkg));
  };
  const handleClick2 = () => {
    const pkg = {
      pkg: "s2",
    };
    localStorage.setItem("pkg", JSON.stringify(pkg));
  };
  const handleClick3 = () => {
    const pkg = {
      pkg: "s3",
    };
    localStorage.setItem("pkg", JSON.stringify(pkg));
  };

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner
        name={"Services"}
        style={{ borderRadius: "10px" }}
        img={serviceHeader}
      />

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
                  <i className="bi bi-people" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Social Edition </h4>
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
                    your platform, our Social Edition provides the perfect blend
                    of inventory management and social media integration to
                    drive engagement, sales, and success.
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
                className="col-lg-4 col-md-4 service-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="single-service">
                  {/* <div className="icon flex-shrink-0">
                    <i
                      className="bi bi-collection-play"
                      style={{ color: "#15a04a" }}
                    ></i>
                  </div> */}
                  <div>
                    <h4 className="title">
                      <div
                        className="stretched-link"
                        style={{ color: "#000080" }}
                      >
                        Starter
                      </div>
                    </h4>
                    <p className="description">
                      Everything you need for your business
                    </p>
                    <br />
                    <div>
                      <div style={{ display: "inline" }}>$</div>

                      <h1
                        style={{
                          color: "#000080",
                          fontWeight: "bold",
                          display: "inline",
                        }}
                      >
                        0.00
                      </h1>
                      <div style={{ display: "inline" }}>/mo</div>
                    </div>
                    <br />
                    <Link
                      to="/contact"
                      className="btn-get-started"
                      style={{ position: "relative", zIndex: "10000" }}
                      onClick={handleClick1}
                    >
                      SELECT PACKAGE
                    </Link>

                    <br />
                    <br />
                    <hr />

                    <p className="description">
                      <ul style={{ listStyleType: "none", padding: 0 }}>
                        {/* <li
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="tick-icon green">&#10004;</span>{" "}
                       
                        Standard Performance
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="cross-icon yellow">&#10060;</span>{" "}
                     
                        100 Websites
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="tick-icon red">&#10004;</span>{" "}
                      
                        Unlimited Free SSL
                      </li> */}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 service-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="single-service">
                  {/* <div className="icon flex-shrink-0">
                    <i
                      className="bi bi-collection-play"
                      style={{ color: "#15a04a" }}
                    ></i>
                  </div> */}
                  <div>
                    <h4 className="title">
                      <div
                        className="stretched-link"
                        style={{ color: "#E8935B" }}
                      >
                        Pro
                      </div>
                    </h4>
                    <p className="description">
                      Level-up with more power and enhanced features
                    </p>
                    <br />
                    <div>
                      <div style={{ display: "inline" }}>$</div>

                      <h1
                        style={{
                          color: "#E8935B",
                          fontWeight: "bold",
                          display: "inline",
                        }}
                      >
                        0.00
                      </h1>
                      <div style={{ display: "inline" }}>/mo</div>
                    </div>
                    <br />
                    <Link
                      to="/contact"
                      className="btn-get-started1"
                      style={{ position: "relative", zIndex: "10000" }}
                      onClick={handleClick2}
                    >
                      SELECT PACKAGE
                    </Link>

                    <br />
                    <br />
                    <hr />

                    <p className="description">
                      <ul style={{ listStyleType: "none", padding: 0 }}>
                        {/* <li
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="tick-icon green">&#10004;</span>{" "}
                          Standard Performance
                        </li>
                        <li
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="cross-icon yellow">&#10060;</span>{" "}
                          100 Websites
                        </li>
                        <li
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="tick-icon red">&#10004;</span>{" "}
                          Unlimited Free SSL
                        </li> */}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-4 service-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="single-service">
                  {/* <div className="icon flex-shrink-0">
                    <i
                      className="bi bi-collection-play"
                      style={{ color: "#15a04a" }}
                    ></i>
                  </div> */}
                  <div>
                    <h4 className="title">
                      <div
                        className="stretched-link"
                        style={{ color: "#000080" }}
                      >
                        Elite
                      </div>
                    </h4>
                    <p className="description">
                      Enjoy optimized performance & powerful resources
                    </p>
                    <br />
                    <div>
                      <div style={{ display: "inline" }}>$</div>

                      <h1
                        style={{
                          color: "#000080",
                          fontWeight: "bold",
                          display: "inline",
                        }}
                      >
                        0.00
                      </h1>
                      <div style={{ display: "inline" }}>/mo</div>
                    </div>
                    <br />
                    <Link
                      to="/contact"
                      className="btn-get-started"
                      style={{ position: "relative", zIndex: "10000" }}
                      onClick={handleClick3}
                    >
                      SELECT PACKAGE
                    </Link>
                    <br />
                    <br />
                    <hr />

                    <p className="description">
                      <ul style={{ listStyleType: "none", padding: 0 }}>
                        {/* <li
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="tick-icon green">&#10004;</span>{" "}
                          Standard Performance
                        </li>
                        <li
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="cross-icon yellow">&#10060;</span>{" "}
                          100 Websites
                        </li>
                        <li
                          style={{
                            marginBottom: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span className="tick-icon red">&#10004;</span>{" "}
                          Unlimited Free SSL
                        </li> */}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  );
};

export default SocialEdition;

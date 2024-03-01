import React from "react";
import education from "../img/business.jpg";
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

const BusinessEdition = () => {
  const handleClick1 = () => {
    const pkg = {
      pkg: "b1",
    };
    localStorage.setItem("pkg", JSON.stringify(pkg));
  };
  const handleClick2 = () => {
    const pkg = {
      pkg: "b2",
    };
    localStorage.setItem("pkg", JSON.stringify(pkg));
  };
  const handleClick3 = () => {
    const pkg = {
      pkg: "b3",
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
                    seamless integration. Our Business Edition is ideal for
                    businesses seeking a cost-effective solution that
                    streamlines inventory tracking, optimizes operations, and
                    enhances overall efficiency.
                  </p>
                  <p className="description">
                    Whether you're a small startup or a large enterprise, our
                    Business Edition provides the tools and functionalities you
                    need to manage your inventory effectively and drive growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 ">
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
                        Essential
                      </div>
                    </h4>
                    <p className="description">
                      Everything you need for your business startup
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
                        34.99
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
                      Select Package
                    </Link>
                    <br />
                    <br />
                    <hr />

                    <p className="description">
                      <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Sales - POS
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Purchase
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon green">&#10134;</span>
                          Basic Overview
                        </li>
                        <li className="packages-def">
                          <span className="cross-icon yellow">&#10134;</span>
                          Single Store Inventory
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Upto 500 Products Info
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Default Invoice Design
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          General Info of Customer
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          General Info of Supplier
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Only Admin User
                        </li>
                        {/* <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Estimate
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Employee
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Account
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Accounting Report
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Receipt Voucher
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Payment Voucher
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Journal Voucher
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Expense Voucher
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
                        Standard
                      </div>
                    </h4>
                    <p className="description">
                      Level-up with more power & enhanced features
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
                        49.99
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
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Sales - POS
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Purchase
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Unlimited Products with Images
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Full Customer Info
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Full Supplier Info
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Estimate
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Expense Voucher
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon green">&#10134;</span>
                          Standard Overview
                        </li>
                        <li className="packages-def">
                          <span className="cross-icon yellow">&#10134;</span>
                          Upto 5 Store Inventory
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Standard Custom Invoice Design
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Upto 5 Users with Roles
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          General Info of Employee
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Cash and Expense Accounts
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Limited Accounting Reports
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Receipt Voucher for SO
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10134;</span>
                          Payment Voucher for PO
                        </li>
                        {/* <li className="packages-def">
                          <span className="tick-icon yellow">&#10060;</span>
                          No Journal Voucher
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
                        Advanced
                      </div>
                    </h4>
                    <p className="description">
                      Enjoy full performance & powerful resources
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
                        99.99
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
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Sales - POS
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Purchase
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Products with Images & Video
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Full Customer Info with Profile
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Full Supplier Info with Profile
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Estimate
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Expense Voucher
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon green">&#10004;</span>
                          Full Dynamic Overview
                        </li>
                        <li className="packages-def">
                          <span className="cross-icon yellow">&#10004;</span>
                          Unlimited Store Inventory
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Premium Custom Invoice Design
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Multiple Users with all Roles
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Full Employee Info
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          All types of Account
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          All Accounting Reports
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Receipt Voucher
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Payment Voucher
                        </li>
                        <li className="packages-def">
                          <span className="tick-icon yellow">&#10004;</span>
                          Journal Voucher
                        </li>
                      </ul>
                    </p>
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

export default BusinessEdition;

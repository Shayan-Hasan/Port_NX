import React from "react";
import { Link } from "react-router-dom";

import dashboard from "../img/feature.png";

const Revenue = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <div>
                  <h2>Features & Benefits</h2>
                </div>
                <h6>
                  Nexusan inventory management system offers real-time tracking,
                  automated reordering, and multi-location support to streamline
                  operations and improve efficiency.
                </h6>
                <h6>
                  {" "}
                  With features like inventory tracking, multiple stores,
                  integration capabilities, Sale & Purchase Orders, Accounting,
                  and custom reporting, businesses can optimize inventory
                  levels, reduce costs, and enhance visibility.
                </h6>
                <h6>
                  {" "}
                  Benefits include improved accuracy, better customer service,
                  regulatory compliance, and scalability, ultimately providing a
                  competitive advantage through strategic insights and enhanced
                  control over inventory processes.
                </h6>
                <h6>
                  Gain a competitive edge by optimizing inventory processes,
                  improving efficiency, and delivering superior customer
                  service.
                </h6>
                <h6>
                  The system ensures improved accuracy, enhances customer
                  service, ensures regulatory compliance, and facilitates
                  scalability, offering a comprehensive solution for strategic
                  decision-making and robust control over inventory processes,
                  thereby fortifying competitiveness and driving sustained
                  growth.
                </h6>
                {/* <Link to="/about" className="btn-get-started">
                  Read More
                </Link> */}
              </div>
              <div
                className="col-lg-5 position-relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Revenue;

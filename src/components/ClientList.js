import { Autoplay } from "swiper/modules";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import client01 from "../img/clients/client-1.jpg";
import client02 from "../img/clients/client-2.jpg";
import client03 from "../img/clients/client-3.jpg";
import client04 from "../img/clients/client-4.png";
import client05 from "../img/clients/client-5.png";
// import client06 from "../img/clients/client-6.png";
import client07 from "../img/clients/client-70.png";
import client08 from "../img/clients/client-8.ico";

// import review1 from "../img/clients/review-1.jpg";
// import review2 from "../img/clients/review-2.png";
// import review3 from "../img/clients/review-3.png";
// import review4 from "../img/clients/review-4.png";
// import review5 from "../img/clients/review-5.png";
// import review6 from "../img/clients/review-6.png";
// import review7 from "../img/clients/review-7.png";
// import review8 from "../img/clients/review-8.png";
// import review9 from "../img/clients/review-9.png";
// import review10 from "../img/clients/review-10.png";
// import review11 from "../img/clients/review-11.png";
// import review12 from "../img/clients/review-12.png";
// import review13 from "../img/clients/review-13.png";
// import review14 from "../img/clients/review-14.png";
import Flag from "react-flagkit";

const ClientList = () => {
  // const [rating, setRating] = useState(0);
  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };
  const [review] = useState([
    {
      name: "Wasco",
      review:
        "Nexusan goes the extra mile to make sure concerns and problems are addressed and if time permits they fixes the problems on the spot. They are very flexible and understanding. In my opinion they are A++ material",
      country: "US",
    },
    {
      name: "Nexos",
      review:
        "From the initial communication to the final delivery, the " +
        "experience was seamless. Nexusan team is professional and " +
        "extremely talented. They understood my requirements" +
        "delivered fine result. Thank you for their exceptional" +
        "service.",
      country: "CZ",
    },
    {
      name: "Jeffer",
      review:
        "As always amazing service and on time with amazing " +
        "communication skills. I'm very happy with them and will " +
        "recommend Nexusan to anyone who needs help with this field " +
        "and will definitely come back to them if I ever need help " +
        "with these kind of softwares.",
      country: "SG",
    },
    {
      name: "Batool Yousef",
      review:
        "Nexusan is the absolute best. They works super hard and knows everything about programming. " +
        "They communicates clearly and delivers on time. I needed their help in three different occasions " +
        " and he delivered complete work on time. I recommend this company so much in fact I wouldn't " +
        " go to anyone else when I need help with programming languages. 10/10",
      country: "AE",
    },
    {
      name: "Ktmstorm",
      review:
        "Working with them explains everything good and if they promises than they are doing " +
        " the work then they definitely finish it for you with no problem and no hesitation it " +
        "was really good work with him. I recommend working with them!!",
      country: "GB",
    },
    {
      name: "Suguno",
      review:
        "Nexusan done incredible work as always! Delivered well before the due date. Excellent job, answered quick, easy to discuss with. I definitely recommend to others. Will return in the future for sure. 10/10.",
      country: "BR",
    },
  ]);
  return (
    <>
      <section id="clients" className="clients">
        <div className="container" data-aos="zoom-out">
          <div className="section-header">
            <h2>Our Clients</h2>
          </div>
          <div className="clients-slider swiper">
            <Swiper
              modules={[Autoplay]}
              //spaceBetween={15}
              //slidesPerView={6}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {/* <SwiperSlide>
                <img src={client06} className="img-fluid" alt="" style={{ objectFit: "stretch" }} />
              </SwiperSlide> */}
              <SwiperSlide>
                <img src={client07} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client08} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client01} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client02} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client03} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client04} className="img-fluid" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={client05} className="img-fluid" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section id="clients" className="clients">
        <div className="container" data-aos="zoom-out">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p className="description">
              Clients rave about the exceptional services and cutting-edge IT
              solutions provided by Nexusan.
            </p>
          </div>

          <div className="clients-slider swiper">
            <Swiper
              modules={[Autoplay]}
              //spaceBetween={15}
              //slidesPerView={6}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                // 768: {
                //   slidesPerView: 4,
                //   spaceBetween: 5,
                // },
                // 1024: {
                //   slidesPerView: 6,
                //   spaceBetween: 10,
                // },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {review.map((item, index) => (
                <>
                  <SwiperSlide>
                    <div
                      style={{
                        border: "1px solid #eee",
                        borderRadius: "10px",
                        height: "240px",
                        padding: "32px",
                      }}
                      className="col-lg-12 col-md-12 service-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="single-service">
                        <h5 style={{ color: "#000080", fontWeight: "bold" }}>
                          {item.name}
                        </h5>

                        <div
                          style={{
                            color: "#f57813",
                            fontWeight: "bold",
                          }}
                        >
                          <Flag
                            style={{ margin: "0", border: "0", padding: "0" }}
                            country={item.country}
                            size={25}
                          />{" "}
                          {[...Array(5)].map((_, index) => (
                            <span key={index}>&#9733;</span>
                          ))}
                          {" 5"}
                        </div>
                        <p
                          style={{ paddingTop: "4px" }}
                          className="description"
                        >
                          {item.review}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientList;

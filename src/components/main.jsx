import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <>
      {/* <div className="hero border-1 pb-3"> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="card bg-dark text-white border-0 ">
            <img
              className="card-img img-fluid"
              src="./assets/main.png.jpg"
              alt="Card"
              height={500}
            />
            <div className="card-img-overlay d-flex align-items-center">
              <div className="container">
                <h5 className="card-title fs-1 text fw-lighter">
                  New Season Arrivals
                </h5>
                <p className="card-text fs-5 d-none d-sm-block ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card bg-dark text-white border-0 ">
            <img
              className="card-img img-fluid"
              src="./assets/main.png.jpg"
              alt="Card"
              height={500}
            />
            </div>
          </SwiperSlide>
        </Swiper>
      {/* </div> */}
    </>
  );
};

export default Home;

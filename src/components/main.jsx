import React, { useState } from "react";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
      <Swiper style={{maxHeight: 500}} pagination={{ clickable: true }}
      scrollbar={{ draggable: true }} mousewheel={true} navigation={true} modules={[Navigation]} autoHeight={true} className="mySwiper">
        <SwiperSlide >
          {/* <div className="card bg-dark text-white border-0 "> */}
            <img
              // className="card-img img-fluid"
              src="./assets/Group_6177.png"
              alt="Card"
              width="100%"
              height={500}
              style={{objectFit: 'cover'}}
            />
            {/* <div className="card-img-overlay d-flex align-items-center">
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
            </div> */}
          {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
          {/* <div className="card bg-dark text-white border-0 "> */}
            <img
              // className="card-img img-fluid"
              src="./assets/image_146.png"
              alt="Card"
              height={500}
              width="100%"
              style={{objectFit: 'cover'}}
            />
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
          {/* <div className="card bg-dark text-white border-0 "> */}
            <img
              // className="card-img img-fluid"
              src="./assets/image_147.png"
              alt="Card"
              height={500}
              width="100%"
              style={{objectFit: 'cover'}}
            />
            {/* </div> */}
          </SwiperSlide>
        </Swiper>
      {/* </div> */}
    </>
  );
};

export default Home;

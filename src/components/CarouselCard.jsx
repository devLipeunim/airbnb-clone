import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// mui icons
// 3rd party
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// react icons
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import {
  flexBetween,
  dFlex,
  fixedIcon,
} from "../themes/commonStyles";
import "./CarouselCard.css";

const CarouselCard = ({ location }) => {

  const maxSteps = location.locationImages.length; // so that we know how many dots

  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: "relative",
      }}
    >
      <Box sx={fixedIcon}>
        <FaRegHeart size={24} color="#fff" />
      </Box>

      {location.locationImages.length && (
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          mousewheel={true}
          cssMode={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          // index={activeStep}
          // onChangeIndex={handleStepChange}
          // enableMouseEvents
        >
          {location.locationImages.map((step, index) => {
            return (
              <SwiperSlide key={step.id}>
                <img src={step.url} style={{height: '270px', width: '100%', objectFit: 'cover', borderRadius: '0.5rem'}} alt={step.id} />
                {/* <Box
                    component="img"
                    sx={carouselImage}
                    src={step.url}
                    alt={step.id}
                  ></Box> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <Box sx={flexBetween}>
        <Box sx={{ mt: 0.5 }}>
          <Typography component="h3"><b>{location.location}</b> </Typography>
          <Typography component="h4">{location.distance}</Typography>
          <Typography component="h4"> {location.days}</Typography>
          <Typography component="h5"><b>{location.price}</b> night </Typography>
        </Box>
        <Box sx={{ mt: 0.5 }}>
          <Box sx={dFlex}>
            {location.isNew ? (
              <React.Fragment>
                <Typography component="h5">New</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography component="h5"> {location.rating}</Typography>
                <AiFillStar size={18} />
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselCard;

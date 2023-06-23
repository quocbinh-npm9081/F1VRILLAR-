import React, { useState, useEffect } from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import formula1, {
  convertXmlToJson,
  dummyHeloSlidesPC,
  dummyHeloSlidesMobile,
} from "../api/formula1";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper";

const HeroSlide = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [desktop, setDesktop] = useState<boolean>(true);

  useState(() => {
    const recentRaceResult = async () => {
      const response = await formula1.getRecentRaceResult();
      const dataJson = convertXmlToJson(String(response)).MRData.RaceTable;
      const { Race } = dataJson;
      console.log("response : ", Race);
    };
    recentRaceResult();
  });
  useEffect(() => {
    setDesktop(isDesktop);
  }, [isDesktop]);

  console.log("isMobile: ", isDesktop);
  const renderSlides = () => {
    if (desktop)
      return (
        <>
          {dummyHeloSlidesPC.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "3rem",
                    fontWeight: "700",
                    position: "absolute",
                    top: "30%",
                    left: "10%",
                    textShadow: "initial",
                    textAlign: "center",
                  }}
                >
                  {slide.title}
                </Typography>
                <img
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  src={slide.img}
                  alt={slide.img}
                />
              </Box>
            </SwiperSlide>
          ))}
        </>
      );
    return (
      <>
        {dummyHeloSlidesMobile.map((slide: any, index: number) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  position: "absolute",
                  top: "30%",
                  left: "10%",
                  textShadow: "initial",
                  textAlign: "center",
                }}
              >
                {slide.title}
              </Typography>

              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                src={slide.img}
                alt={slide.img}
              />
            </Box>
          </SwiperSlide>
        ))}
      </>
    );
  };
  return (
    <>
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper"
      >
        {renderSlides()}
      </Swiper>
    </>
  );
};
export default HeroSlide;

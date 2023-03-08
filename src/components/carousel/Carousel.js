import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectImg1, projectImg2 } from "../../assets/index";
import { Pagination, Autoplay } from "swiper";
import ProjectsCard from "../projects/ProjectsCard";

const Carousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="py-5 mx-3">
          <ProjectsCard
            src={projectImg1}
            title={"Sample project"}
            des={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-5 mx-3">
          <ProjectsCard
            src={projectImg2}
            title={"Sample project"}
            des={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-5 mx-3">
          <ProjectsCard
            src={projectImg1}
            title={"Sample project"}
            des={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-5 mx-3">
          <ProjectsCard
            src={projectImg2}
            title={"Sample project"}
            des={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-5 mx-3">
          <ProjectsCard
            src={projectImg1}
            title={"Sample project"}
            des={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-5 mx-3">
          <ProjectsCard
            src={projectImg2}
            title={"Sample project"}
            des={
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            }
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

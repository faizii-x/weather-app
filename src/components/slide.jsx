

import Slider from "react-slick";
import { SLIDERR_CARDs } from "../data";

const Slide = () => {


  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const cards = SLIDERR_CARDs.map((x, index) => (
    <div key={index}>
      <div className="bg-[#19202D] rounded-[20px] p-3 ml-2">
        <h1 className="text-center font-grotesk text-white text-[18px]">
          {x.day}, <span className="text-[#7F7F7F]">{x.time}</span>{" "}
        </h1>
        <img src={x.img} alt="" className="mx-auto w-[100px] h-[92px] mt-4" />
        <p className="text-center font-grotesk mt-2 text-[#7F7F7F] text-[14px]">{x.des}</p>

        <div className="flex justify-center">
          <p className="text-center font-grotesk mt-4 text-[30px] text-white">{x.degree}</p>
          <p className="mt-4 text-white font-grotesk text-[16px]">{x.zero}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-[90%] container mx-auto mt-8">
        <Slider {...settings}>{cards}</Slider>
      </div>
    </>
  );
};

export default Slide;

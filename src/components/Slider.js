import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function SimpleSlider({data}) {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <Slider {...settings} className="flex justify-center">

        {
            data.map((item,ind)=>{
                return (
      <div key={ind} className="card-slider w-full !flex flex-row justify-center border-2 border-dotted  border-text_secondary  rounded-md ">
       <Image src={item.Image} alt="Error" width={150} height={150} className="!hidden md:flex"/>
       <Image src={item.Image} alt="Error" width={140} height={140} className="!flex md:hidden"/>
      </div>
                )

            })
        }
  
    </Slider>
  );
}
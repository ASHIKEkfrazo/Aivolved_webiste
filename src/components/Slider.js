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
  };
  return (
    <Slider {...settings} className="flex justify-center">

        {
            data.map((item,ind)=>{
                return (
      <div key={ind} className="card-slider w-full !flex flex-row justify-center border-2 border-dotted  border-text_secondary  rounded-md ">
       <Image src={item.Image} alt="Error" width={150} height={150}/>
      </div>
                )

            })
        }
  
    </Slider>
  );
}
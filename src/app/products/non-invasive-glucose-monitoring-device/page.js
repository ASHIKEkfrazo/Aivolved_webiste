"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./components/Slider.module.css"
const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
       <div>
         <section className="relative w-full h-[90vh] overflow-hidden video-container ">
              
              <Image   
              alt=""
              className="absolute w-full h-[90vh] top-0 left-0 "
               src="https://aivolved.in/wp-content/uploads/2023/11/memphis_1.png"
               width={500}
               height={500}
                 />
              <div className="absolute top-0 left-0 w-full h-full z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 mx-auto w-3/4 md:w-9/10">
              <div className="flex gap-8 w-full h-full items-center justify-center">
              <div className="flex flex-col gap-2 w-[50%]">
              <div className="text-[2rem] text-left font-bold leading-9">Non Invasive Glucose <br />Monitoring Device</div>
              <div className="text-[1rem] text-left text-[#7a7a7a] pr-4">International Diabetes Federation (IDF), an estimated 537 million adults with diabetes (20-70 years). Diabetes is a major cause of blindness, kidney failure, heart attacks, stroke, and lower limb amputation. In 2019, diabetes was the direct cause of 1.5 million deaths. India has the second largest population of people with diabetes in the world, with an estimated 74.2 million adults (20-79 years)</div>
                <div className="flex items-start text-left">

                <a className="mt-5 px-6 py-3 bg-[#cf2e2e] rounded-md text-white font-bold text-center" href="#">Contact us</a>
                </div>
              </div>
              <div className="flex  rounded-md w-[38%] h-auto">
                <Image 
                alt=""
                className="flex rounded-md w-[600px] h-full"
                width={500}
                height={500}
                src="https://aivolved.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-09-at-12.08.29-PM.jpeg" />
              </div>
              </div>
              </div>
            </section>
    </div>

    <div className="flex  h-full gap-4 w-[80%] mx-auto">
    <div className={`${styles.glutrendPageContainer} w-[100%] flex items-end justify-end`}>
    <Slider {...settings} className="h-full w-[550px] max-w-[600px] mx-8 gap-[.5rem]">
      <div>
        <Image 
        className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-18.png"
        width={500}
        height={500}
        alt=""
        />
      </div>
      <div>
        <Image 
              className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-19.png"
        width={500}
        height={500}
        alt=""
        />
      </div>
      <div>
        <Image 
               className="h-full w-[100%]"
               width={500}
               height={500}
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-20.png"
        alt=""
        />
      </div>
      <div>
        <Image 
               className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-21.png"
        width={500}
        height={500}
        alt=""
        />
      </div>
      <div>
        <Image 
               className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-22.png"
        width={500}
        height={500}
        alt=""
        />
      </div>
      <div>
        <Image 
               className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-23.png"
        width={500}
        height={500}
        alt=""
        />
      </div>
      <div>
        <Image 
               className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-24.png"
        width={500}
        height={500}
        alt=""
        />
      </div>
      <div>
        <Image 
               className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-25.png"
        width={500}
        height={500}
        alt=""
        />
      </div>  
      <div>
        <Image 
               className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-26.png"
        width={500}
        height={500}
        alt=""
        />
      </div>  
      <div>
        <Image 
               className="h-full w-[100%]"
        src="https://aivolved.in/wp-content/uploads/2023/11/mobile-27.png"
        width={500}
        height={500}
        alt=""
        />
      </div>    
      
    </Slider>
    </div>
    <div className="flex h-[full] w-[100%]">
     <div className=" flex flex-col items-start justify-center gap-3 border border-dotted p-8 px-12 border-[red] rounded-lg h-full w-[100%]">

         <div className="text-[2rem] text-[#cf2e2e]  font-bold">
            Current Scenario
            </div>
            <div className="flex gap-4">
            <div >
            image
            </div>
            <div className="text-[.9rem] text-[#54595f]">
            Insulin pumps, Fingerstick Blood Glucose Monitoring, Flash Glucose Monitoring, Continuous Glucose Monitoring (CGM) are available device.
            </div>
            </div>

            <div className="flex gap-4">
            <div >
            image
            </div>
            <div className="text-[.9rem] text-[#54595f]">
            Insulin pumps, Fingerstick Blood Glucose Monitoring, Flash Glucose Monitoring, Continuous Glucose Monitoring (CGM) are available device.
            </div>
            </div>

            <div className="flex gap-4">
            <div >
            image
            </div>
            <div className="text-[.9rem] text-[#54595f]">
            Insulin pumps, Fingerstick Blood Glucose Monitoring, Flash Glucose Monitoring, Continuous Glucose Monitoring (CGM) are available device.
            </div>
            </div>

            <div className="flex gap-4">
            <div >
            image
            </div>
            <div className="text-[.9rem] text-[#54595f]">
            Insulin pumps, Fingerstick Blood Glucose Monitoring, Flash Glucose Monitoring, Continuous Glucose Monitoring (CGM) are available device.
            </div>
            </div>    
      </div> 


    </div>
    </div>


    <div className="relative my-4 py-4">
      <div className="flex p-4 items-center justify-center w-[80%] mx-auto text-[2.2rem] font-bold">Proposed Solution</div>
      <div className="flex gap-2 my-6 mx-auto w-[90%]">
      
      <div className="flex flex-col gap-2 border border-[red] text-center items-center justify-center p-8 px-12">
        <div>image</div>
        <div className="text-[1rem] text-[#54595f]">A continuous blood glucose monitoring device with trend analysis backed by our AI.</div>

        
</div>
<div className="flex flex-col gap-2 border border-[red] text-center items-center justify-center p-8 px-12">
        <div>image</div>
        <div className="text-[1rem] text-[#54595f]">A continuous blood glucose monitoring device with trend analysis backed by our AI.</div>

        
</div>
<div className="flex flex-col gap-2 border border-[red] text-center items-center justify-center p-8 px-12">
        <div>image</div>
        <div className="text-[1rem] text-[#54595f]">A continuous blood glucose monitoring device with trend analysis backed by our AI.</div>

        
</div>
<div className="flex flex-col gap-2 border border-[red] text-center items-center justify-center p-8 px-12">
        <div>image</div>
        <div className="text-[1rem] text-[#54595f]">A continuous blood glucose monitoring device with trend analysis backed by our AI.</div>

        
</div>

      </div>

    </div>

    </div>
  )
}

export default page
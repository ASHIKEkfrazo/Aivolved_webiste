"use client";
import { Carousel } from "antd";
import Image from "next/image";
import "animate.css";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState("");
  const [visible, setVisible] = useState(true);

  // const handleScroll = () => {
  //   const position = window.scrollY;
  //   console.log(position);
  //   setScrollPosition(scrollPosition);
  // };
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const vinCard = [
    {
      id: 1,
      imgSrc:
        "https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8edittextfile100_1.png",
      title: "Reduced Errors",
    },
    {
      id: 1,
      imgSrc:
        "https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8booster100.png",
      title: "Unmatched Speed",
    },
    {
      id: 1,
      imgSrc:
        "https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8search96.png",
      title: "Reduced Errors",
    },
    {
      id: 1,
      imgSrc:
        "https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8structureofprintingprogramstackedisolatedonawhitebackground96.png",
      title: "Enhanced Efficiency",
    },
  ];

  const partnerArray = [
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-31.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-30.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-28.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-29.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-27.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-25.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-26.jpg",
    },
  ];

  const ClientArray = [
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-31.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-30.jpg",
    },
    {
      img: "https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-28.jpg",
    },
  ];

  const awardArray = [
    {
      Image:
        "https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-copy-6-2.jpg",
    },
    {
      Image:
        "https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-copy-5-2.jpg",
    },
    {
      Image:
        "https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-copy-2-2.jpg",
    },
    {
      Image: "https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-2.jpg",
    },
    {
      Image:
        "https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-copy-8-2.jpg",
    },
    {
      Image:
        "https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-copy-2-2-1.jpg",
    },
    {
      Image:
        "https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-copy-7-2.jpg",
    },
  ];
  return (
    <>
      <Carousel autoplay>
        <div className="h-full pt-2 md:p-10 ">
          <div
            className="relative h-1/2 hidden md:block"
            style={{ height: "50vh" }}>
            <Image
              src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-06-1-scaled.jpg"
              alt="Aivolved Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative h-1/2 flex md:hidden"
            style={{ height: "60vh" }}>
            <Image
              src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-20.png"
              alt="Aivolved Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="h-full pt-2 md:p-10 ">
          <div
            className="relative h-1/2 hidden md:block"
            style={{ height: "50vh" }}>
            <Image
              src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-05-scaled.jpg"
              alt="Aivolved Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div
            className="relative h-1/2 flex md:hidden"
            style={{ height: "60vh" }}>
            <Image
              src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-18.png"
              alt="Aivolved Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </Carousel>

      <div className="flex justify-center items-center bg-[#f3f3f3]">
        <div className="container max-w-[1200px] flex flex-col items-center justify-around gap-5 my-10 px-5 text-xl leading-9">
          <h1 className="text-4xl font-normal">
            Our{" "}
            <span className="scale-up-center text-text_secondary pl-2">
              Products
            </span>{" "}
          </h1>
          <p className="text-2xl text-text_primary">
            Revolutionise Quality Control with AI-Powered Visual Inspection
          </p>
          <p>
            Effortlessly improve your production line with VIN, the
            next-generation visual intelligence platform. Our cutting-edge AI
            visual inspection system allows businesses across all industries to
            achieve unparalleled quality control. This powerful software
            utilises the latest advancements in visual artificial intelligence
            to automate visual inspection tasks, to improve efficiency and
            accuracy.
          </p>
        </div>
      </div>
      <div className="h-[500px] w-full relative">
        <video
          className="h-[500px] w-full object-cover md:h-full md:object-fill"
          autoPlay
          loop
          preload="auto"
          muted>
          <source
            src="https://aivolved.in/wp-content/uploads/2024/05/No-rework-no-waste%E2%80%94just-efficiency-1.mp4"
            type="video/mp4"
          />
          {/* Add additional <source> tags for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
        <div className="absolute h-full w-full top-0">
          <Image
            src="https://aivolved.in/wp-content/uploads/2024/05/Artboard-1-copy-8-2.png"
            alt="Aivolved Image"
            layout="fill"
            objectFit="cover"
            className="hidden md:flex"
          />
          <Image
            src="https://aivolved.in/wp-content/uploads/2024/06/Aivolved-19-2.png"
            alt="Aivolved Image"
            layout="fill"
            objectFit="cover"
            className="flex md:hidden"
          />
        </div>
      </div>
      <div className="flex justify-center p-5 md:p-10 ">
        <div className="container max-w-[1200px] text-center flex flex-col gap-5">
          <h3 className="text-text_primary text-4xl">
            Why <span className="text-text_secondary">VIN</span>
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            {vinCard.map((item) => (
              <div
                key={item.id}
                className="w-[100%] h-[150px] flex flex-col  items-center border-solid border-[1px] border-[#D8D8D8] rounded-md justify-around md:w-[250px]">
                <Image
                  src={item.imgSrc}
                  alt="Aivolved Image"
                  objectFit="contain"
                  width={80}
                  height={80}
                />
                <p className="text-text_primary font-bold ">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5 flex justify-center p-5 md:p-10 bg-[#f3f3f3]">
        <div className="container max-w-[1200px] text-center text-text_primary">
          <h1 className="text-3xl">
            Where can <span className="text-text_secondary"> VIN</span> be
            applied?
          </h1>
          <div className="flex gap-10 mt-3 items-center justify-center flex-col md:flex-row">
            <div className="h-full  flex  items-center justify-center">
              <Image
                src="https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-3-5.jpg"
                width={300}
                height={250}
                alt="Aivolved Image"
                className="hidden md:flex"
              />
                 <Image
                src="https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-3-5.jpg"
                width={300}
                height={100}
                alt="Aivolved Image"
                className="flex md:hidden !h-[350px] "
              />
            </div>
            <div className="text-start flex flex-col gap-5">
              <h5>
                VIN’s versatility makes it a valuable asset for object detection
                using AI in manufacturing industries. It covers a wide range of
                sectors, including:
              </h5>
              <div className="flex flex-col md:flex-row gap-3 font-bold items-center justify-center">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-5 border-solid border-2 border-[#D8D8D8] rounded-md p-2">
                  <Image
                    src="https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8car50.png"
                    width={80}
                    height={80}
                    alt="Aivolved Image"
                    objectFit="contain"
                  />
                  <h1>Automotive</h1>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-5 border-solid border-2 border-[#D8D8D8] rounded-md p-2">
                  <Image
                    src="https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8tablets64.png"
                    width={80}
                    height={80}
                    alt="Aivolved Image"
                    objectFit="contain"
                  />
                  <h1>Pharmaceuticals</h1>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3 font-bold">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row  items-center justify-center gap-5 border-solid border-2 border-[#D8D8D8] rounded-md p-2">
                  <Image
                    src="https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8food96.png"
                    width={80}
                    height={80}
                    alt="Aivolved Image"
                    objectFit="contain"
                  />
                  <h1>Food & Beverage</h1>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-5 border-solid border-2 border-[#D8D8D8] rounded-md p-2">
                  <Image
                    src="https://eimkeia.stripocdn.email/content/guids/CABINET_e8f6bf482c879c4adcd4730c14e652b08d16a01e48c7b89dd01eb73706d55aa4/images/icons8electronics64.png"
                    width={80}
                    height={80}
                    alt="Aivolved Image"
                    objectFit="contain"
                  />
                  <h1>Electronics</h1>
                </div>
              </div>
              <h5>
                Ready to experience the power of Artificial Intelligence visual
                inspection systems? Contact us today to learn more about VIN and
                schedule a demo.{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://aivolved.in/wp-content/uploads/2024/05/Untitled-design-92.png')] h-[400px] md:h-[200px] w-full bg-no-repeat bg-cover bg-fixed bg-center flex justify-center items-center">
        <div className="container text-white font-bold max-w-[1200px] flex flex-col gap-5 items-center text-center px-3 md:items-start ">
          <h1 className="text-3xl">Ready to join the AI revolution?</h1>
          <h6>
            Lets discuss how we can help your business excel in the age of
            intelligence.
          </h6>
          <button className="bg-white text-black py-2 px-5 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex justify-center  bg-[#f3f3f3] py-10">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-col md:flex-row gap-5 ">
            <div
              className={`text-3xl text-text_primary border-solid border-[1px] border-[#D8D8D8] p-3 hover:border-text_secondary ${
                visible
                  ? "text-text_secondary border-text_secondary font-bold"
                  : "text-text_primary"
              } cursor-pointer  `}
              onClick={() => setVisible(true)}>
              Our Partners
            </div>
            <div
              className={`text-3xl text-text_primary border-solid border-[1px] border-[#D8D8D8] p-3 hover:border-text_secondary ${
                !visible
                  ? "text-text_secondary border-text_secondary font-bold"
                  : "text-text_primary"
              } cursor-pointer  `}
              onClick={() => setVisible(false)}>
              Our Clients
            </div>
          </div>
          {visible ? (
            <div className="flex flex-wrap md:flex-nowrap  justify-center gap-2">
              {partnerArray.map((img, ind) => (
                <div
                  key={ind}
                  className="border-solid border-[1px] border-[#D8D8D8]">
                  <Image
                    src={img.img}
                    width={250}
                    alt=""
                    height={250}
                    className="hidden md:flex"
                  />
                  <Image
                    src={img.img}
                    width={120}
                    alt=""
                    height={160}
                    className="flex md:hidden"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center md:flex-nowrap gap-5">
              {ClientArray.map((img, ind) => (
                <div
                  key={ind}
                  className="border-solid border-[1px] border-[#D8D8D8]">
                  <Image
                    src={img.img}
                    width={250}
                    alt=""
                    height={250}
                    className="hidden md:flex"
                  />
                  <Image
                    src={img.img}
                    width={115}
                    alt=""
                    height={160}
                    className="flex md:hidden"
                  />{" "}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-10  py-10 bg-[#f3f3f3]">
        <h1 className="text-3xl text-text_primary">Our Awards</h1>
        <div className="container max-w-[1200px]">
          <Slider data={awardArray} />
        </div>
      </div>
    </>
  );
}

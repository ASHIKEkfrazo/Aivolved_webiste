"use client";
import { useEffect, useState } from 'react';
import TypingEffect from './assets/TypingEffect';
import Banner from './assets/Banner';
import TabComponent from './assets/TabComponent';
import BottomSection from './assets/BottomSection';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <section className="w-full h-full flex flex-col justify-center hero-video">
        <section className="relative w-full h-[680px] overflow-hidden video-container p-3">
          <Image
            className="absolute w-full h-[680px] top-2 left-0 object-cover"
            src="https://aivolved.in/wp-content/uploads/2024/02/Banner_ai-2.gif"
            alt="Hero Background"
            width={500}
            height={500}
          />
          <div className="absolute top-2 left-0 w-full h-full bg-black/20 z-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 mx-auto w-3/4 md:w-9/10">
            <h1 className="text-white flex flex-col gap-4 text-5xl mb-4 md:text-2xl md:leading-tight">
              <TypingEffect typingSpeed={140} typingDelay={1150} words="Better, Bigger, Faster" />
              <div className='font-semibold text-[40px]'>Quality Control</div>
              <div className='mt-4 font-medium text-[20px] px-32 leading-6'>
                AI-powered visual inspection platform for quality inspections at a large scale. Quickly train and deploy AI models for identifying defects at source.
              </div>
            </h1>
            <a className="px-6 py-3 bg-[#cf2e2e] text-white font-bold text-center rounded-md" href="#">Book a Demo</a>
          </div>
        </section>
      </section>
      <Banner />
    <TabComponent />

    <BottomSection />
    </>
  );
};

export default Page;

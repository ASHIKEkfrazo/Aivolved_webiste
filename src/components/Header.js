import React from "react";
// import styles from "../styles/Header.module.css";
import {
  InstagramFilled,
  MailFilled,
  PhoneFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";

export default function Header() {
  return (
    <header className="shadow-lg shadow-black-500/50">
      <div className=" bg-[#d3303b] flex-col items-center  md:flex-row">
        <div className="w-full md:w-1/2 sm:basis-3/4 justify-center flex flex-row h-12 items-center">
          <div className="flex flex-row justify-center basis-1/2 ">
            <MailFilled style={{ color: "#fff" }} />
            <span className="text-white pl-3">info@aivolved.in</span>
          </div>
          <div className="flex flex-row justify-center basis-1/2">
            <PhoneFilled className="text-white" />
            <span className="text-white pl-3">919902497961</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-end flex items-center">
          <div className="flex flex-row justify-center w-full items-center gap-4  md:w-1/2 p-2">
            <InstagramFilled style={{ color: "#fff" }} />
            <LinkedinFilled style={{ color: "#fff" }} />
            <YoutubeFilled style={{ color: "#fff", fontWeight: "600" }} />
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu ,AiOutlineFullscreen } from "react-icons/ai";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
    <nav className="  flex-row justify-center pt-3">
      <div className="hidden md:flex container  justify-around items-center">
        <div className="flex items-center">
          <Image
            src="https://aivolved.in/wp-content/uploads/2022/11/ai-logo.png"
            width={60}
            height={60}
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex gap-10 font-bold items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <input
                type="checkbox"
                id="sortbox"
                className="hidden absolute"
                checked={isDropdownOpen}
                onChange={toggleDropdown}
              />
              <label htmlFor="sortbox" className="flex items-center space-x-1 cursor-pointer">
                <span>Products</span>
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <div
                id="sortboxmenu"
                className={`absolute mt-1 right-1 top-full min-w-max shadow rounded ${
                  isDropdownOpen ? "opacity-100" : "opacity-0"
                } bg-white border border-gray-400 transition delay-75 ease-in-out z-10`}
              >
                <ul className="block text-right text-gray-900">
                  <li>
                    <Link
                      href="/products/visual-inspection"
                      className="block px-3 py-2 text-black border-b-black hover:bg-[#d3303b] hover:text-white transition delay-75 ease-in-out"
                      onClick={closeDropdown}
                    >
                      Visual Inspection
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/non-invasive-glucose-monitoring-device"
                      className="block px-3 py-2 text-black hover:bg-[#d3303b] hover:text-white transition delay-75 ease-in-out"
                      onClick={closeDropdown}
                    >
                      Glutrend
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <button className="bg-gradient-to-r from-[#FF5402] to-[#f2295b] px-3 py-2 rounded-md text-white">
                Request Demo
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden w-full flex justify-between">
      <div className="flex items-center px-5">
          <Image
            src="https://aivolved.in/wp-content/uploads/2022/11/ai-logo.png"
            width={60}
            height={60}
            alt="Logo"
          />
        </div>
        <div className="relative flex justify-center items-center px-5 bg-gray-100 rounded-sm cursor-pointer " >
      
          {
            !menu ?  
            <AiOutlineMenu className="text-3xl" onClick={()=>setMenu(true)} /> : <AiOutlineFullscreen className="text-3xl" onClick={()=>setMenu(false)}>x</AiOutlineFullscreen>
          }
           
        </div>

      </div>
      
      {
          menu ? 
          <div className="w-full flex justify-end gap-2 text-white px-2 transition-transform duration-500">
          <div className="w-1/3 bg-text_secondary flex flex-col text-center transform translate-x-0">
            <Link href="/" className="p-2">Home</Link>
            <Link className="p-2" href="about">About Us</Link>
            <Link className="p-2" href="product">Products</Link>
            <Link className="p-2" href="contact">Contact Us</Link>
          </div>
        </div> 
           :null
        }
    </nav>
  
 
    </>
  );
}

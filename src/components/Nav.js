import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar(){
    return (
        <nav className="flex flex-row justify-center pt-3">
            <div className="container  flex justify-around items-center">
            <div className="flex items-center ">
                <Image src="https://aivolved.in/wp-content/uploads/2022/11/ai-logo.png" width={60} height={60}  alt="error" />
            </div>
            <div className="">
            <ul className="flex gap-10 font-bold items-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>

                    <Link href="/about">About</Link>
                </li>
                    <li>
                    <Link href="/products">Products</Link>
                    </li>
                    <li>
                    <Link href="/products">Contact us</Link>
                    </li>
            <button className="bg-gradient-to-r from-[#FF5402] to-[#f2295b] px-3 py-2 rounded-md text-white" >Request Demo</button>
            </ul>
            </div>
            </div>
        </nav>
    )
}
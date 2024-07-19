import Image from "next/image"
import Link from "next/link";
import {InstagramFilled,YoutubeFilled,LinkedinFilled,PhoneFilled,EnvironmentFilled,ClockCircleFilled,MailFilled} from "@ant-design/icons"

export default  function  Footer (){
    return(
        <>
        <div className="flex justify-center flex-col items-center border-t-2 border-text_secondary mt-5">
            <div className="container max-w-[1200px] flex py-5 justify-around text-text_primary font-semibold">
                <div className="w-1/3 flex justify-center items-center flex-col gap-5">
                    <Image src={'https://aivolved.in/wp-content/uploads/2020/08/ai-logo.png'} width={100}  height={100} alt="Footer Logo Error"/>
                    <div className="flex gap-3">
                    <InstagramFilled className="text-text_secondary" />
                    <YoutubeFilled className="text-text_secondary" />
                    <LinkedinFilled className="text-text_secondary" />                    </div>
                </div>
                <div className="w-1/3 flex flex-col justify-between gap-10">
<h1 className="font-bold text-text_primary text-xl">Quick Links</h1>       
<div className="text-text_primary flex flex-col gap-3">
    <Link href="/">Home</Link>
    <Link href="/">About Us</Link>
    <Link href="/">Products</Link>
    <Link href="/">Contact Us</Link>
</div>
         </div>
                <div className="w-1/3 flex flex-col justify-between">
                    <h1 className="font-bold text-text_primary text-xl">Contact Us</h1>
                    <div className="flex items-center  gap-3">
                    <EnvironmentFilled className="text-text_secondary" />                        <h1>Ground Floor, 2nd phase, 880, Railway Parallel Rd, Nti Layout, Rajiv Gandhi Nagar, Kodigehalli, Bengaluru, Karnataka - 560097.</h1>
                    </div>
                    <div className="flex items-center  gap-3">
                    <PhoneFilled className="text-text_secondary" />                      
                      <h1>+91-9902497961 / +91-7795573875</h1>
                    </div>
                    <div className="flex items-center  gap-3">
                    <MailFilled className="text-text_secondary" />                        <h1>info@aivolved.in</h1>
                    </div>
                    <div className="flex items-center gap-3">
                    <ClockCircleFilled className="text-text_secondary" />                        <h1>10.00 AM - 09.00 PM</h1>
                    </div>
                </div>
            </div>
            <div className="w-full py-1 font-bold bg-text_secondary text-white text-center">Copyright ©2024 Aivolved, All rights reserved. Developed By Ekfrazo Technologies</div>
        </div>
        </>
    )
}
import React from "react";
import { ForwardFilled, PlayCircleFilled ,LinkedinFilled} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link"
export default function about() {

const leaderShipArray = [
  {
    Image:"https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-14-2.jpg",
    leader:"Sudip Gupta",
    designation:"Aivolved-CEO"
  },
  {
    Image:"https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-16-2.jpg",
        leader:"Giridhar N R",
    designation:"Aivolved-CTO"
  },
  {
    Image:"https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-15-2.jpg",
          leader:"Nithesh Hegde",
    designation:"Aivolved-COO"
  },
  {
    Image:"https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-13-2.jpg",
          leader:"Shailesh Sinha",
    designation:"Director for alliances & partnership"
  }
]


  return (
    <>
      <div className="bg-[#fbedef] py-16">
        <h1 className="text-text_secondary font-bold text-4xl px-5">About Us</h1>
      </div>
      <div className="flex justify-center">
        <div className="container max-w-[1200px] flex flex-col gap-10 my-5 text-text_primary">
          <div className="">
            At AiVolved, we’re not just building AI solutions, we’re building
            the future of intelligent businesses with unparalleled industry
            expertise. In today’s businesses, staying ahead of the curve
            requires keeping updated with the latest technologies like
            Artificial Intelligence (AI). We’re not just about implementing AI,
            we’re about delivering real business value. We design solutions that
            address your specific business goals and objectives.
          </div>

          <div className="">
            With continuous monitoring and optimising, we ensure our AI
            solutions make you stronger with a clear and measurable return on
            investment (ROI). We develop AI solutions that easily integrate with
            your existing infrastructure and workflows. By leveraging
            industry-specific data sets to train and optimise our AI models, we
            provide the most relevant and impactful results.
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">
              Innovation is a Progress:
            </h1>
            <div className="flex gap-2">
              <ForwardFilled className="text-text_secondary text-2xl" />
              <h1>
                We’re not just keeping pace, we’re leading the charge in
                developing cutting-edge AI solutions.
              </h1>
            </div>
            <div className="flex gap-2">
              <ForwardFilled className="text-text_secondary text-2xl" />
              <h1>
                With access to the latest AI advancements and technologies, we
                ensure your solutions are at the forefront of the field.
              </h1>
            </div>
            <div className="flex gap-2">
              <ForwardFilled className="text-text_secondary text-2xl" />
              <h1>
                We possess the ability to leverage the most powerful AI tools to
                tackle your most complex business problems.
              </h1>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center">
              <Image
                src="https://aivolved.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-04-at-5.55.55-PM.jpeg"
                alt="About-Error-loading-image"
                width={500}
                height={500}
              />
            </div>
            <div className="flex gap-5 flex-col">
              <h1 className="font-bold">Data-Centric Approach for Scalable & Adaptable Solutions:</h1>
              <div className=" flex gap-3">
                <PlayCircleFilled className="text-text_secondary" />
                <h1>
                  Data is the lifeblood of AI. We believe in using the power of
                  data to drive intelligent business decisions. Our team of data
                  scientists are masters at taking insights from complex data
                  sets.
                </h1>
              </div>
              <div className="flex gap-3">
                <PlayCircleFilled className="text-text_secondary" />
                <h1>
                We utilise robust data analysis techniques and machine learning models tailored to your industry. This data-driven approach ensures your AI solutions are built on a foundation of actionable intelligence.
                </h1>
              </div>
              <div className="flex gap-3">
                <PlayCircleFilled  className="text-text_secondary"/>
                <h1>
                We design AI architectures that are modular and scalable, allowing your AI capabilities to grow alongside your business needs.
                </h1>
              </div>
              <div className="flex gap-3">
                <PlayCircleFilled className="text-text_secondary" />
                <h1>
                Our services are future-proofed as we adapt to changing market conditions & evolving data sets.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-2xl font-bold">Guiding Innovation: Our Leadership Panel</h1>
            <h1 className="">Building a future powered by AI, led by visionary thinkers and industry leaders.</h1>
            <div className="flex gap-4">
{
  leaderShipArray.map((img,ind)=>{
    return (
      <div key={ind} className="custom-width-transition relative w-full h-full   flex items-center justify-center cursor-pointer ">
      <Image
        src={img.Image}
        alt="leadership_image_error"
        width={250}
        height={250}
        className="image-leader rounded-[150px] !h-[250px] object-cover border-2 border-text_secondary  "
      />
  <div className="overlay_text absolute  bg-black bg-opacity-50 flex flex-col gap-3 items-center justify-center text-white font-bold">
<h1 className="text-xl">{img.leader}</h1>
<h1 className="text-[0.9rem]">{img.designation}</h1>
<Link href="" className="link-wrapper bg-white w-[40px] h-[40px] flex justify-center items-center rounded-[20px] ">
<LinkedinFilled className="link_icon text-text_secondary text-2xl" />
</Link>
</div>
    </div>
    )
  })
}
      

            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl">The Heart of Excellence: Our Dedicated Team </h1>
            <h1>A dynamic team of AI experts united by a common goal: creating groundbreaking AI solutions.</h1>
            <div className="flex gap-5 justify-center items-center">
              <Image src={"https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-25-1.jpg"} className="border-2 border-text_secondary rounded-lg p-0.5" width={500}  height={400} alt="errot_image" />
              <Image src={"https://aivolved.in/wp-content/uploads/2024/06/Artboard-1-copy-24-1.jpg"} className="border-2 border-text_secondary rounded-lg p-0.5"  width={500}  height={400} alt="error_image"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

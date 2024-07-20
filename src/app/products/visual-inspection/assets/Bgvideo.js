
const Bgvideo = () => {
  return (
    <div>
         <section className="relative w-full h-[550px] overflow-hidden video-container md:h-[325px]">
              {/* <video
                className="absolute w-full h-[550px] top-0 left-0 object-cover md:h-[325px]"
                src="https://aivolved.in/wp-content/uploads/2024/02/Banner_ai-2.gif"
                autoPlay
                loop
                playsInline
                muted
              ></video> */}
              <img   className="absolute w-full h-[550px] top-0 left-0 object-cover md:h-[325px]"
               src="https://aivolved.in/wp-content/uploads/2024/02/Banner_ai-2.gif"
                 />
              <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 mx-auto w-3/4 md:w-9/10">
                <h1 className="text-white uppercase text-5xl font-bold mb-4 md:text-2xl md:leading-tight">   <TypingEffect typingSpeed={70} typingDelay={1000} words="Better,Bigger,Faster" />
                </h1>
                <a className="mt-5 px-6 py-3 bg-[#cf2e2e] text-white font-bold uppercase text-center" href="/collections/all">SHOP ABEEGO FOOD WRAPS</a>
              </div>
            </section>
    </div>
  )
}

export default Bgvideo
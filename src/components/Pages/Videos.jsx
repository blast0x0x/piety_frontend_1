import CustomVideoPlayer from "../Common/CustomVideoPlayer"

const Videos = () => {
    return (
        <div className="pt-[80px] sm:pt-[100px] lg:pt-[25px] pb-[60px] sm:pb-[80px] lg:pb-[100px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="w-[82%] mx-auto bg-[#eab30b] my-10 h-[2px]">
                    </div>
                  <div className="text-center pb-[60px] px-[20px] max-lg:py-[50px] max-md:py-[40px] max-sm:py-[30px] max-sm:px-[15px]">
        <div className="max-w-4xl mx-auto rounded-xl border-[1px] p-[33px] bg-[#6127ad] border-[#EAB30833]
                        max-xl:p-[28px] max-lg:p-[24px] max-md:p-[20px] max-sm:p-[16px]">
          <h2 className="text-[22px] font-bold text-[#FFCF03] pb-[20px] 
                         max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] 
                         max-lg:pb-[16px] max-md:pb-[14px] max-sm:pb-[12px]">
            Discover the Blueprint to Prosperity
          </h2>
          <p className="text-[18px] text-[#D1D5DB] 
                        max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px]">
            These three short films reveal how the Piety Token, the PayChain, and the URMEVerse ecosystem work together to flip the old system, fuel unstoppable demand, and deliver once-in-a-lifetime opportunities for early investors. Watch now — your journey to abundance starts here.
          </p>
        </div>
      </div>
            <div className="rounded-xl p-[33px] max-xl:p-[28px] max-lg:p-[24px] max-md:p-[20px] max-sm:p-[16px]">
  <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px] sm:gap-[30px] lg:gap-[40px]">

    {/* Video 1 */}
    <div className="flex flex-col items-center gap-[10px] w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[620px]">
      <button
        type="button"
        className="w-[80px] h-[80px] mb-4 bg-[#EAB308] border-[1px] border-black text-black font-bold text-[32px] rounded-full flex items-center justify-center hover:bg-[#CA8A04] transition-colors duration-200"
      >
        1
      </button>
      <iframe
        className="w-full aspect-video rounded-lg"
src="/1.mp4"
        title="Video 1"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    {/* Video 2 */}
    <div className="flex flex-col items-center gap-[10px] w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[620px]">
      <button
        type="button"
        className="w-[80px] h-[80px] mb-4 bg-[#EAB308] border-[1px] border-black text-black font-bold text-[32px] rounded-full flex items-center justify-center hover:bg-[#CA8A04] transition-colors duration-200"
      >
        2
      </button>
      <iframe
        className="w-full aspect-video rounded-lg"
src="/2.mp4"        title="Video 2"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    {/* Video 3 */}
    <div className="flex flex-col items-center gap-[10px] w-full max-w-[320px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[620px]">
      <button
        type="button"
        className="w-[80px] h-[80px] mb-4 bg-[#EAB308] border-[1px] border-black text-black font-bold text-[32px] rounded-full flex items-center justify-center hover:bg-[#CA8A04] transition-colors duration-200"
      >
        3
      </button>
      <iframe
        className="w-full aspect-video rounded-lg"
src="/3.mp4"        title="Video 3"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    
  </div>
</div>

            </div>
        </div>
    )
}

export default Videos
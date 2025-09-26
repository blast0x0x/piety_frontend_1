const Gallery = () => {
    return (
        <div className="relative">
            <div className="flex justify-center">
                <div className="px-[26px] relative max-[1000px]:px-[16px] min-[1450px]:w-auto max-[1450px]:w-full max-[1450px]:overflow-hidden">
                    {/* First row */}
                    <div className="flex gap-[20px] max-[1000px]:gap-[10px] max-[768px]:flex-col max-[768px]:gap-[15px] max-[1450px]:w-full">
                        <img 
                            src="/r1.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img 
                            src="/r2.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img 
                            src="/r3.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    
                    {/* Second row */}
                    <div className="flex gap-[20px] pt-[20px] max-[1000px]:gap-[10px] max-[1000px]:pt-[10px] max-[768px]:flex-col max-[768px]:gap-[15px] max-[1450px]:w-full">
                        <img 
                            src="/r4.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img 
                            src="/r5.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img 
                            src="/r6.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                    
                    {/* Third row */}
                    <div className="flex gap-[27px] pt-[20px] max-[1000px]:gap-[10px] max-[1000px]:pt-[10px] max-[768px]:flex-col max-[768px]:gap-[15px] max-[1450px]:w-full">
                        <img 
                            src="/r7.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img 
                            src="/r8.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                        <img 
                            src="/r9.png" 
                            alt="" 
                            className="min-[1450px]:w-auto min-[1450px]:h-auto max-[1450px]:flex-1 max-[1450px]:min-w-0 max-[1450px]:w-full max-[1450px]:h-auto max-[1450px]:object-cover max-[1450px]:max-w-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            
            {/* <div className="bg-[#153245] w-[100%]">
                <img src="/BgInvest.png" alt="" className="w-full h-auto" />
            </div> */}
        </div>
    )
  }
  
  export default Gallery
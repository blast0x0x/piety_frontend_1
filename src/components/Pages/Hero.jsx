const Hero = () => {
    return (
        // <div className="flex gap-[20px] max-[1000px]:gap-[10px] max-[768px]:flex-col max-[768px]:gap-[15px] max-[1450px]:w-full">
        <div className="flex justify-between gap-1 sm:gap-2 lg:gap-0 px-2 lg:px-0 max-[768px]:flex-col">
            <div className="flex-1">
                <img
                    src="/CBF.png"
                    alt="CBF"
                    className="w-full sm:h-[120px] md:h-[180px] lg:h-auto object-cover"
                />
            </div>
            <div className="flex-1">
                <img
                    src="/Hangdog.png"
                    alt="Hangdog"
                    className="w-full sm:h-[120px] md:h-[180px] lg:h-auto object-cover"
                />
            </div>
            <div className="flex-1">
                <img
                    src="/BannerImg3.png"
                    alt="Banner"
                    className="w-full sm:h-[120px] md:h-[180px] lg:h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default Hero;
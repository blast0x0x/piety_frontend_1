import React from 'react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  backgroundImage,
  width = "395px",
  height = "245px",
  className = "" 
}) => {
  return (
    <div 
      className={`px-[34px] py-[33px] rounded-xl border-[1px] border-[#EAB30833] relative
                  max-xl:px-[28px] max-xl:py-[28px]
                  max-lg:px-[24px] max-lg:py-[24px]
                  max-md:px-[20px] max-md:py-[20px]
                  max-sm:px-[16px] max-sm:py-[16px]
                  ${className}`}
      style={{ 
        width: className.includes('w-') ? 'auto' : width, 
        height: className.includes('h-') ? 'auto' : height 
      }}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-no-repeat bg-center rounded-xl bg-cover"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        ></div>
      )}
      
      <div className="absolute inset-0 bg-[#6127ad] rounded-xl"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {Icon && (
          <div className="flex justify-center items-center mb-[20px] max-xl:mb-[16px] max-lg:mb-[14px] max-md:mb-[12px] max-sm:mb-[10px]">
            <Icon />
          </div>
        )}
        <h2 className="pb-[12px] text-[20px] font-bold
                       max-xl:pb-[10px] max-xl:text-[18px]
                       max-lg:pb-[8px] max-lg:text-[16px]
                       max-md:pb-[6px] max-md:text-[15px]
                       max-sm:pb-[5px] max-sm:text-[14px]">
          {title}
        </h2>
        <p className="text-[16px] leading-relaxed
                      max-xl:text-[15px]
                      max-lg:text-[14px] max-lg:leading-snug
                      max-md:text-[13px] max-md:leading-normal
                      max-sm:text-[12px] max-sm:leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
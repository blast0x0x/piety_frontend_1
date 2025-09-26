"use client"
import React from 'react';
import { useChainId } from "wagmi";
import {
  MAIN_NET,
  TOKEN_ADDRESS_TEST,
  TOKEN_ADDRESS_MAIN,
} from "@/config/index";

const TokenomicsSection = () => {
  const chainId = useChainId();

  const tokenomicsData = {
    header: {
      title: "Tokenomics",
      subtitle: "Understanding the Piety Token distribution, value, and growth potential."
    },
    sections: [
      {
        title: "Presale Mechanics",
        items: [
          {
            number: "1",
            title: "Here's how it works:",
            description: "• For the first $250,000 raised, any investment of $2,500 or more will receive a 1:1 match in tokens — effectively locking in the lowest possible entry point at $0.01 per token.• This window closes permanently once the $250K cap is filled, or once payroll onboarding begins."
          },
          {
            number: "2",
            title: "Preparation for November Price Jumps:",
            description: "• On November 3rd, we anticipate over 2,500 new members starting to receive their paychecks through the PayChain, averaging $4,000 per month. With payroll doubling month over month, demand for tokens will accelerate rapidly."
          },
          {
            number: "3",
            title: "Price Progression:",
            description: "• By December 15th, we project token value to reach $0.25 — a 25x jump from today's matched-entry level."
          },
          {
            number: "4",
            title: "Fundraising Goal:",
            description: "• Our target is to raise $31M to build the complete ecosystem infrastructure, connecting all assets and launching the full Piety Token platform."
          },
          {
            number: "5",
            title: "Vesting Parameters:",
            description: "• Vesting Period: Tokens purchased in the early allocation remain locked until December 31st, 2025, ensuring the PayChain payroll system and retail adoption have begun generating steady demand.• Liquidation Schedule: After vesting, tokens can be gradually liquidated according to a fixed schedule, preventing mass sell-offs. This design makes Piety impervious to dumping and guarantees that value rises with adoption rather than speculation."
          }
        ]
      },
      {
        title: "Token Distribution",
        items: [
          {
            label: "Presale Allocation",
            percentage: 31
          },
          {
            label: "Ecosystem and Partner Pools",
            percentage: 25
          },
          {
            label: "Founders and Team Reserves",
            percentage: 20
          },
          {
            label: "Dividend and Staking Pools",
            percentage: 15
          },
          {
            label: "Contingency and Future Development Reserves",
            percentage: 9
          },
          // {
          //   label: "Reserve & Treasury",
          //   percentage: 5
          // }
        ]
      }
    ]
  };

  const ProgressBar = ({ percentage }) => (
    <div className="w-full h-3 border border-[#374151] rounded-full bg-[#1F2937] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#eab30b] to-[#CA8A04] rounded-full transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );

  const renderPresaleMechanics = (section) => (
    <div className="rounded-xl border-[1px] p-[33px] bg-[#6127ad] border-[#eab30b] w-full max-w-[600px]
                    max-xl:p-[28px] max-lg:p-[24px] max-md:p-[20px] max-sm:p-[16px]">
      <h2 className="text-[30px] font-bold text-[#EAB308] text-left
                     max-xl:text-[28px] max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px]">
        {section.title}
      </h2>
      {section.items.map((item, index) => (
        <div key={index} className="flex flex-col pt-[24px] max-lg:pt-[20px] max-md:pt-[16px] max-sm:pt-[14px]">
          <h3 className="font-bold text-[20px] text-left
                         max-xl:text-[18px] max-lg:text-[17px] max-md:text-[16px] max-sm:text-[15px]">
            <span className="pr-[16px] pl-[10px] text-[#FFCF03] 
                           max-md:pr-[12px] max-md:pl-[8px] max-sm:pr-[10px] max-sm:pl-[6px]">
              {item.number}
            </span>
            <span className="text-[#D1D5DB]">{item.title}</span>
          </h3>
          <div className="pl-[35px] pt-[5px] text-left
                        max-md:pl-[28px] max-sm:pl-[24px] max-sm:pt-[3px]">
            {item.description.includes('•') ? (
              <div className="space-y-[8px] max-sm:space-y-[6px]">
                {item.description.split('•').filter(part => part.trim()).map((part, partIndex) => (
                  <div key={partIndex} className="flex items-start">
                    <span className="text-[#FFCF03] mr-[8px] mt-[2px]">•</span>
                    <p className="text-[#D1D5DB] text-[16px] 
                                  max-xl:text-[15px] max-lg:text-[14px] max-md:text-[13px] max-sm:text-[12px]">
                      {part.trim()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[#D1D5DB] text-[16px] 
                            max-xl:text-[15px] max-lg:text-[14px] max-md:text-[13px] max-sm:text-[12px]">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderTokenDistribution = (section) => (
    <div className="rounded-xl border-[1px] p-[33px] bg-[#6127ad] border-[#eab30b] w-full max-w-[650px] lg:h-[650px]
                    max-xl:p-[28px] max-lg:p-[24px] max-md:p-[20px] max-sm:p-[16px]">
      <h2 className="text-[30px] font-bold text-[#eab30b] text-center sm:text-left
                     max-xl:text-[28px] max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px]">
        {section.title}
      </h2>
      {section.items.map((item, index) => (
        <div key={index} className="pt-[24px] max-lg:pt-[20px] max-md:pt-[16px] max-sm:pt-[14px]">
          <div className="flex justify-between pb-[10px] max-sm:pb-[8px]">
            <p className="text-[#D1D5DB] text-[14px] 
                          max-xl:text-[13px] max-lg:text-[12px] max-sm:text-[11px]">
              {item.label}
            </p>
            <p className="text-[#eab30b] font-semibold text-[16px]
                          max-xl:text-[15px] max-lg:text-[14px] max-md:text-[13px] max-sm:text-[12px]">
              {item.percentage}%
            </p>
          </div>
          <ProgressBar percentage={item.percentage} />
        </div>
      ))}
      <div className='bg-[#EAB30833] p-[16px] rounded-xl border-[1px] border-[#EAB3084D] mt-[32px]
                      max-lg:p-[14px] max-md:p-[12px] max-sm:p-[10px] max-lg:mt-[28px] max-md:mt-[24px] max-sm:mt-[20px]'>
        <p className='text-[14px] text-[#D1D5DB] text-center sm:text-left
                     max-xl:text-[13px] max-lg:text-[12px] max-sm:text-[11px]'>
          <span className='font-bold pr-[3px] text-[14px] text-[#FACC15]
                          max-xl:text-[13px] max-lg:text-[12px] max-sm:text-[11px]'>
            Note:
          </span>
          Token distribution will commence after the infrastructure development is complete. All presale tokens are securely held in the CBF Trust & Bank until official distribution.
        </p>
      </div>
    </div>
  );

  return (
    <div className="montserrat px-4 sm:px-6 lg:px-8" id='tokenomics'>
      <div className="text-center pt-[64px] max-lg:pt-[48px] max-md:pt-[40px] max-sm:pt-[32px]">
        <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308]
                       max-xl:text-[28px] max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px]
                       max-lg:pb-[18px] max-md:pb-[16px] max-sm:pb-[14px]">
          {tokenomicsData.header.title}
        </h2>
        <p className="text-[18px] pb-[16px] text-[#D1D5DB] max-w-4xl mx-auto
                      max-xl:text-[17px] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px]
                      max-lg:pb-[14px] max-md:pb-[12px] max-sm:pb-[10px]">
          {tokenomicsData.header.subtitle}
        </p>
        <p className="text-[18px] pb-[14px] text-[#D1D5DB] max-w-4xl mx-auto
                      text-[18px] max-[1000px]:text-[16px] max-[768px]:text-[14px] max-[480px]:text-[12px]
                      max-lg:pb-[12px] max-md:pb-[10px] max-sm:pb-[8px]">
          CA: {chainId === MAIN_NET ? TOKEN_ADDRESS_MAIN : TOKEN_ADDRESS_TEST}
        </p>
        <p className="text-[18px] text-[#D1D5DB] max-w-4xl mx-auto
                      max-xl:text-[17px] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px]
                      max-lg:pb-[56px] max-md:pb-[48px] max-sm:pb-[40px]">
          Total Supply: 3,100,000,000
        </p>
      </div>

      {/* Special Promotion Section */}
      <div className="text-center pt-[40px] px-[20px] max-lg:py-[32px] max-md:py-[28px] max-sm:py-[24px] max-sm:px-[15px]">
        <div className="max-w-4xl mx-auto rounded-xl border-[1px] p-[33px] bg-black/60 border-[#EAB30833]
                        max-xl:p-[28px] max-lg:p-[24px] max-md:p-[20px] max-sm:p-[16px]">
          <div className="mb-[20px] max-lg:mb-[16px] max-md:mb-[14px] max-sm:mb-[12px]">
            <span className="text-[52px] max-lg:text-[48px] max-md:text-[44px] max-sm:text-[40px]">🔥 </span>
            <span className="text-[32px] font-bold max-lg:text-[28px] max-md:text-[26px] max-sm:text-[24px] bg-gradient-to-r from-[#FF0E01] to-[#FFD400] bg-clip-text text-transparent" style={{ fontFamily: 'Impact, sans-serif' }}>
              $250K Matched Allocation — Last Chance at $0.01
            </span>
          </div>
          <p className="text-[18px] text-[#D1D5DB] mb-[16px] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-lg:mb-[14px] max-md:mb-[12px] max-sm:mb-[10px]" style={{ fontFamily: 'Arial, sans-serif' }}>
            Before the Piety PayChain payroll system launches on November 3rd, we are opening a $250,000 matched allocation round.
          </p>
          <p className="text-[18px] text-[#D1D5DB] max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px]" style={{ fontFamily: 'Arial, sans-serif' }}>
            This is the final opportunity to own Piety Tokens at ground floor pricing, before payroll and retail adoption propel demand into exponential growth. <span className="text-[#FFCF03] font-bold">Once this allocation closes, Piety will never be available at $0.01 again.</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center items-center gap-[48px] max-w-7xl mx-auto
                      p-[30px] max-xl:p-[24px] max-lg:p-[20px] max-md:p-[16px] max-sm:p-[12px]
                      max-lg:gap-[40px] max-md:gap-[32px] max-sm:gap-[24px]">
        {/* Left: Presale Mechanics */}
        {renderPresaleMechanics(tokenomicsData.sections[0])}

        {/* Right: Token Distribution and Security & Trust */}
        <div className="flex flex-col gap-[10px] max-lg:gap-[40px] max-md:gap-[32px] max-sm:gap-[24px] w-full max-w-[600px]">
          {renderTokenDistribution(tokenomicsData.sections[1])}

          {/* Security & Trust Section */}
          <div className="rounded-xl border-[1px] p-[23px] bg-black/60 border-[#EAB30833] w-full
                          max-xl:p-[28px] max-lg:p-[24px] max-md:p-[20px] max-sm:p-[16px]">
            <div className="space-y-[24px] max-lg:space-y-[20px] max-md:space-y-[16px] max-sm:space-y-[14px]">
              <div>
                <h3 className="font-bold text-center sm:text-left
                               text-[14px]">
                  <span className="text-[#EAB308]">Security & Trust</span>
                </h3>
                <p className="text-[#D1D5DB] text-[14px] pt-[5px] text-left 
                              max-md:pl-[28px] max-sm:pl-[24px] max-sm:pt-[3px]">
                  Security First: All presale tokens are held in cold vault custody through CBF Bank & Trust until official distribution, giving members double-layer protection and peace of mind.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-center sm:text-left
                               text-[14px]">
                  <span className="text-[#EAB308]">Scarcity & Growth</span>
                </h3>
       <p className="text-[#D1D5DB] text-[14px] pt-[5px] text-left 
                              max-md:pl-[28px] max-sm:pl-[24px] max-sm:pt-[3px]">
                  Scarcity Matters: Only 3.1B Piety Tokens will ever be minted, with just 60% in circulation. Fixed supply + rising adoption = programmed growth.
                </p>
              </div>

              <div>
                 <h3 className="font-bold text-center sm:text-left
                               text-[14px]">
                  <span className="text-[#EAB308]">Ecosystem Anchors</span>
                </h3>
               <p className="text-[#D1D5DB] text-[14px] pt-[5px] text-left 
                              max-md:pl-[28px] max-sm:pl-[24px] max-sm:pt-[3px]">
                  Asset Backed: Every token is anchored by 25% gold reserves and 75% real estate and operating business assets, ensuring value is tied to tangible growth.
                </p>
              </div>

              <div>
               <h3 className="font-bold text-center sm:text-left
                               text-[14px]">
                  <span className="text-[#EAB308]">Membership & Exclusivity</span>
                </h3>
          <p className="text-[#D1D5DB] text-[14px] pt-[5px] text-left 
                              max-md:pl-[28px] max-sm:pl-[24px] max-sm:pt-[3px]">
                  Member-Owned: Piety exists inside a Private Membership Association (PMA). Tokens circulate only within our ecosystem — immune to outside market manipulation and built to reward members first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blueprint to Prosperity Section */}
    
    </div>
  );
};

export default TokenomicsSection;
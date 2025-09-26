import React, { useState, useEffect } from 'react';
import { X, XCircle, XCircleIcon } from 'lucide-react';
import PietyMemberShip from './PietyMembership';
import Form from '@/components/Common/Form'
import FormCrypto from '@/components/Common/FormCrypto'

// Mock components for demonstration
const CheckMarkOrange = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#EAB308" />
    <path d="M12 5L7 10L4 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckMarkYellow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#FFD700" />
    <path d="M12 5L7 10L4 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Crown = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 12h12l-1-6-3 2-2-3-2 3-3-2-1 6z" fill="#FFD700" />
    <circle cx="4" cy="4" r="1" fill="#FFD700" />
    <circle cx="8" cy="2" r="1" fill="#FFD700" />
    <circle cx="12" cy="4" r="1" fill="#FFD700" />
  </svg>
);

const MemberShipBenefits = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpenCrypto, setIsPopupOpenCrypto] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openPopupCrypto = () => {
    setIsPopupOpenCrypto(true);
  };

  const closePopupCrypto = () => {
    setIsPopupOpenCrypto(false);
  };

  // Handle body scroll when popup is open
  useEffect(() => {
    if (isPopupOpen) {
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  return (
    <div className="montserrat bg-[#173444] relative">
      <div className="py-[74px] flex justify-center px-4">
        <img src="/Collage.png" alt="" className="max-w-full h-auto" />
      </div>

      <div className="text-center pt-[54px] px-4" id='membershipForm'>
        <h2 className="text-[30px] max-md:text-[24px] pb-[20px] font-bold text-[#EAB308]">
          Founding Membership Benefits
        </h2>
        <p className="text-[18px] max-md:text-[16px] pb-[64px] text-[#D1D5DB] max-w-4xl mx-auto">
          Early adopters will receive exclusive founding member status with unprecedented benefits and privileges.
        </p>
      </div>

      <div className="flex max-lg:flex-col justify-center items-center gap-[33px] max-lg:gap-[24px] pb-[24px] px-4">
        <div className="border-[1px] max-h-[466px] h-[466px] max-sm:max-h-none max-sm:h-auto overflow-hidden border-[#EAB3084D] max-w-[600px] w-full lg:w-[600px]">
          <div className="p-[24px] max-md:p-[16px]">
            <h2 className="font-bold text-[24px] max-md:text-[20px] text-white">All Access Founder's Membership</h2>
            <p className="text-[#E5E7EB] text-[20px] max-md:text-[18px] font-normal">$1,000 Investment</p>
          </div>
          <div className="h-[100%] max-sm:h-auto bg-[#468094] p-[24px] max-md:p-[16px] pb-[60px] max-md:pb-[40px]">
            <div className="pb-[24px] flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px]">
                <CheckMarkOrange />
                <p className="text-[16px] max-md:text-[14px] text-white">Access to a single luxury resort in your area</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkOrange />
                <p className="text-[16px] max-md:text-[14px] text-white">Presale token price of $0.02 per token</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkOrange />
                <p className="text-[16px] max-md:text-[14px] text-white">CBF Bank account access</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkOrange />
                <p className="text-[16px] max-md:text-[14px] text-white">Early ecosystem participation rights</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkOrange />
                <p className="text-[16px] max-md:text-[14px] text-white">Priority support and concierge services</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col justify-between gap-[12px] lg:pt-[2.4rem]">
              <button
                onClick={openPopup}
                className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors cursor-pointer"
              >
                <img src="/Card.png" alt="" />
                <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold">Pay with card</p>
              </button>
              <button
                onClick={openPopupCrypto}
                className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors cursor-pointer"
              >
                <img src="/Wallet.png" alt="" />
                <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold">Pay with crypto</p>
              </button>
            </div>
          </div>
        </div>

        <div className="border-[1px] overflow-hidden max-h-[466px] h-[466px] max-sm:max-h-none max-sm:h-auto border-[#EAB3084D] max-w-[600px] w-full lg:w-[600px]">
          <div className="p-[24px] max-md:p-[16px]">
            <h2 className="font-bold text-[24px] max-md:text-[20px] text-white">Global Founder's Membership</h2>
            <p className="text-[#E5E7EB] text-[20px] max-md:text-[18px] font-normal">$2,500 Investment</p>
          </div>
          <div className="bg-[#468094] h-full p-[24px] max-md:p-[16px] pb-[60px] max-md:pb-[40px] max-sm:h-auto">
            <div className="pb-[24px] flex flex-col gap-[12px]">
              <div className="flex items-center gap-[12px]">
                <CheckMarkYellow />
                <p className="text-[16px] max-md:text-[14px] text-white">Access to all luxury resorts worldwide</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkYellow />
                <p className="text-[16px] max-md:text-[14px] text-white">Presale token price of $0.02 per token</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkYellow />
                <p className="text-[16px] max-md:text-[14px] text-white">Premium CBF Bank account with enhanced features</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkYellow />
                <p className="text-[16px] max-md:text-[14px] text-white">Voting rights on future ecosystem developments</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkYellow />
                <p className="text-[16px] max-md:text-[14px] text-white">VIP events and networking opportunities</p>
              </div>
              <div className="flex items-center gap-[12px]">
                <CheckMarkYellow />
                <p className="text-[16px] max-md:text-[14px] text-white">Exclusive investment opportunities</p>
              </div>
            </div>
            <div className="flex max-sm:flex-col justify-between gap-[12px]">
              <button
                onClick={openPopup}
                className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors cursor-pointer"
              >
                <img src="/Card.png" alt="" />
                <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold">Pay with card</p>
              </button>
              <button
                onClick={openPopupCrypto}
                className="w-[250px] max-sm:w-full h-[48px] gap-[15px] flex justify-center items-center bg-[#EAB308] rounded-[8px] hover:bg-[#EAB308]/90 transition-colors cursor-pointer"
              >
                <img src="/Wallet.png" alt="" />
                <p className="text-[16px] max-md:text-[14px] text-[#000000] font-semibold">Pay with crypto</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex max-lg:flex-col-reverse justify-center items-center gap-[40px] max-lg:gap-[24px] px-4 pb-[60px]">
        <div className="max-lg:text-center">
          <img src="/BlackCard.png" alt="" className="max-w-full h-auto lg:hidden mb-[24px]" />
          <p className="bg-[#FFD700] font-bold text-[14px] text-[#000] rounded-full py-[4px] px-[15px] max-w-[193px] max-lg:mx-auto">LAUNCHING AUG 1ST</p>
          <h2 className="font-bold text-[24px] max-md:text-[20px] pt-[18px] pb-[28px] text-white">Founders Black Card</h2>
          <p className="pb-[24px] text-[16px] max-md:text-[14px] max-w-[500px] max-lg:mx-auto text-white">Limited to only 1,000 lifetime founding members, the exclusive Founders Black Card represents the pinnacle of our membership tiers.</p>
          <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
            <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
              <Crown />
              <p className="text-[16px] max-md:text-[14px] text-white">Token entry point between $0.05-$0.10</p>
            </div>
            <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
              <Crown />
              <p className="text-[16px] max-md:text-[14px] text-white">VIP access to all UMRE global benefits</p>
            </div>
            <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
              <Crown />
              <p className="text-[16px] max-md:text-[14px] text-white">Exclusive Black Card events and privileges</p>
            </div>
            <div className="flex max-lg:justify-center gap-[12px] pb-[21px]">
              <Crown />
              <p className="text-[16px] max-md:text-[14px] text-white">First access to new investment opportunities</p>
            </div>
          </div>
          <button className="bg-[#FFD700] text-[#000] font-semibold text-[16px] max-md:text-[14px] py-[10px] max-md:py-[8px] px-[30px] max-md:px-[20px] rounded-full border-[2px] max-md:border-[1px] border-[#EAB208] hover:bg-[#00000060] hover:text-[#FFD700] transition-colors duration-300">Join Waitlist</button>
        </div>
        <div className="max-lg:hidden">
          <img src="/BlackCard.png" alt="" className="max-w-full h-auto" />
        </div>
      </div> */}

      {/* Popup Overlay */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-transparent w-full max-w-7xl lg:w-1/2 max-h-[90vh] overflow-y-auto">
            {/* Close Button - Fixed positioning at top right */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-50 bg-[rgb(234, 179, 8)] rounded-full p-2 transition-colors"
            >
              <XCircleIcon color='#000' size={24} />
            </button>

            <div className="block">
              <Form borderRadius='rounded-xl' />
            </div>
          </div>
        </div>
      )}

      {/* Popup Overlay */}
      {isPopupOpenCrypto && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-transparent w-full max-w-7xl lg:w-1/2 max-h-[90vh] overflow-y-auto">
            {/* Close Button - Fixed positioning at top right */}
            <button
              onClick={closePopupCrypto}
              className="absolute top-4 right-4 z-50 bg-[rgb(234, 179, 8)] rounded-full p-2 transition-colors"
            >
              <XCircleIcon color='#000' size={24} />
            </button>

            <div className="block">
              <FormCrypto borderRadius='rounded-xl' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberShipBenefits;
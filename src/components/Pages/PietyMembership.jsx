import { EmailIconYellow, PhoneYellow } from "@/utils/icons";
import MembershipApplication from "../Common/Form";

const PietyMemberShip = () => {
  return (
    <div className="montserrat">
      <div className="text-center pt-[54px] max-sm:pt-[32px] px-4" id="membershipform1">
        <h2 className="text-[30px] max-sm:text-[24px] pb-[20px] max-sm:pb-[16px] font-bold text-[#EAB308]">
          Join the Piety Token Presale
        </h2>
        <p className="text-[18px] max-sm:text-[16px] pb-[64px] max-sm:pb-[40px] text-[#D1D5DB]">
          Become a founding member and secure your position in our revolutionary
          ecosystem.
        </p>
      </div>
      <div className="w-full flex max-lg:flex-col max-lg:w-full max-lg:w-full justify-center max-lg:items-center px-4 max-lg:px-4">
        <MembershipApplication 
          width="100%" 
          borderRadius="rounded-l-xl max-lg:rounded-t-xl max-lg:rounded-b-none"
        />
        <div className="max-lg:w-full max-lg:max-w-full bg-gradient-to-r from-[#000000] to-[#111827] rounded-r-xl max-lg:rounded-b-xl max-lg:rounded-t-none border-[1px] border-outset border-[#E5E7EB] max-lg:border-t-0 w-[447px] max-lg:w-full max-lg:max-w-[447px] p-[48px] max-sm:p-[24px]">
          <h2 className="font-bold text-[24px] max-sm:text-[20px] pb-[20px] max-sm:pb-[16px] text-[#FACC15]">
            How It Works
          </h2>
          <div className="pb-[80px] max-sm:pb-[40px]">
            <div className="flex gap-[16px] max-sm:gap-[12px] pb-[18px] max-sm:pb-[16px]">
              <div className="bg-[#EAB308] flex justify-center items-center w-[35px] h-[35px] min-w-[35px] min-h-[35px] max-sm:w-[28px] max-sm:h-[28px] max-sm:min-w-[28px] max-sm:min-h-[28px] rounded-full flex-shrink-0">
                <span className="font-bold text-[16px] max-sm:text-[14px] leading-none">1</span>
              </div>
              <div>
                <h2 className="text-[16px] max-sm:text-[14px] font-bold">Submit Application</h2>
                <p className="text-[#D1D5DB] text-[14px] max-sm:text-[12px] pt-[5px] max-sm:pt-[3px]">Complete the form with your details and referral code.</p>
              </div>
            </div>
            <div className="flex gap-[16px] max-sm:gap-[12px] pb-[18px] max-sm:pb-[16px]">
              <div className="bg-[#EAB308] flex justify-center items-center w-[35px] h-[35px] min-w-[35px] min-h-[35px] max-sm:w-[28px] max-sm:h-[28px] max-sm:min-w-[28px] max-sm:min-h-[28px] rounded-full flex-shrink-0">
                <span className="font-bold text-[16px] max-sm:text-[14px] leading-none">2</span>
              </div>
              <div>
                <h2 className="text-[16px] max-sm:text-[14px] font-bold">Verification</h2>
                <p className="text-[#D1D5DB] text-[14px] max-sm:text-[12px] pt-[5px] max-sm:pt-[3px]">Our team will verify your referral and contact you within 24 hours.</p>
              </div>
            </div>
            <div className="flex gap-[16px] max-sm:gap-[12px] pb-[18px] max-sm:pb-[16px]">
              <div className="bg-[#EAB308] flex justify-center items-center w-[35px] h-[35px] min-w-[35px] min-h-[35px] max-sm:w-[28px] max-sm:h-[28px] max-sm:min-w-[28px] max-sm:min-h-[28px] rounded-full flex-shrink-0">
                <span className="font-bold text-[16px] max-sm:text-[14px] leading-none">3</span>
              </div>
              <div>
                <h2 className="text-[16px] max-sm:text-[14px] font-bold">Complete Investment</h2>
                <p className="text-[#D1D5DB] text-[14px] max-sm:text-[12px] pt-[5px] max-sm:pt-[3px]">Make your investment securely through our platform.</p>
              </div>
            </div>
            <div className="flex gap-[16px] max-sm:gap-[12px] pb-[18px] max-sm:pb-[16px]">
              <div className="bg-[#EAB308] flex justify-center items-center w-[35px] h-[35px] min-w-[35px] min-h-[35px] max-sm:w-[28px] max-sm:h-[28px] max-sm:min-w-[28px] max-sm:min-h-[28px] rounded-full flex-shrink-0">
                <span className="font-bold text-[16px] max-sm:text-[14px] leading-none">4</span>
              </div>
              <div>
                <h2 className="text-[16px] max-sm:text-[14px] font-bold">Receive Confirmation</h2>
                <p className="text-[#D1D5DB] text-[14px] max-sm:text-[12px] pt-[5px] max-sm:pt-[3px]">Get your membership confirmation and token purchase receipt.</p>
              </div>
            </div>
          </div>
          <hr className="opacity-[0.5]" />
          <div>
            <p className="text-[#D1D5DB] pt-[23px] max-sm:pt-[16px] text-[14px] max-sm:text-[12px]">Need assistance? Contact our team:</p>
            <div className="flex gap-[12px] max-sm:gap-[8px] pt-[16px] max-sm:pt-[12px] pb-[9px] max-sm:pb-[6px] items-center">
                <EmailIconYellow/>
                <p className="text-[16px] max-sm:text-[14px] text-[#D1D5DB] break-all">support@pietytoken.com</p>
            </div>
            <div className="flex gap-[12px] max-sm:gap-[8px] items-center">
                <PhoneYellow/>
                <p className="text-[16px] max-sm:text-[14px] text-[#D1D5DB]">+1 (909) 362-1411</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PietyMemberShip;
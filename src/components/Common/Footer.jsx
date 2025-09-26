import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Twitter, Instagram, Hash, BookOpen, Globe } from "lucide-react";
import { SiTelegram, SiTiktok, SiX, SiInstagram, SiDiscord, SiFox } from "react-icons/si";

// Mock icon components since the original imports aren't available
const Discord = ({ color = "#EAB308", size = 24 }) => <SiDiscord color={color} size={size} />;
const EmailIconGrey = () => <Mail color="#9CA3AF" size={16} />;
const Location = () => <MapPin color="#9CA3AF" size={16} />;
const Medium = ({ color = "#EAB308", size = 24 }) => <BookOpen color={color} size={size} />;
const PhoneGrey = () => <Phone color="#9CA3AF" size={16} />;
const Telegram = ({ color = "#EAB308", size = 24 }) => <SiTelegram color={color} size={size} />;
const TwitterIcon = ({ color = "#EAB308", size = 24 }) => <SiX color={color} size={size} />;
const InstagramIcon = ({ color = "#EAB308", size = 24 }) => <SiInstagram color={color} size={size} />;
const GlobeIcon = ({ color = "#EAB308", size = 24 }) => <Globe color={color} size={size} />;
const TictokIcon = ({ color = "#EAB308", size = 24 }) => <SiTiktok color={color} size={size} />;
const FoxIcon = ({ color = "#EAB308", size = 24 }) => <SiFox color={color} size={size} />;

const Footer = () => {
  const scrollToMembershipForm = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById('membershipForm');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Element with ID "membershipForm" not found');
      }
    }, 100);


  };
  const scrollToAbout = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Element with ID "membershipForm" not found');
      }
    }, 100);

  };
  const scrollToTokenomics = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById('tokenomics');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Element with ID "membershipForm" not found');
      }
    }, 100);

  };
  const scrollToBenefits = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById('benefits');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Element with ID "membershipForm" not found');
      }
    }, 100);

  };
  const scrollToRoadmap = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById('roadmap');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Element with ID "membershipForm" not found');
      }
    }, 100);

  };
  const scrollToFaq = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById('faq');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Element with ID "membershipForm" not found');
      }
    }, 100);
  };
  const scrollToSocials = () => {
    // Add a small delay to ensure the DOM is fully rendered
    setTimeout(() => {
      const element = document.getElementById('socials');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        console.log('Element with ID "membershipForm" not found');
      }
    }, 100);
  };
  return (
    <div className="montserrat">
      {/* Header Section */}
      {/* <div className="text-center pt-[54px] px-4 sm:px-6 lg:px-0">
        <h2 className="text-[24px] sm:text-[30px] pb-[20px] font-bold text-[#FFFFFF]">
          Secure Your Position as a Founding Member
        </h2>
        <p className="text-[16px] sm:text-[18px] pb-[64px] text-[#D1D5DB] max-w-2xl mx-auto">
          Join the exclusive group of early adopters who will shape the future of asset-backed digital currency.
        </p>
      </div> */}

      {/* CTA Buttons */}
      {/* <div className="flex flex-col sm:flex-row justify-center gap-[16px] sm:gap-[24px] px-4 sm:px-0">
        <button onClick={scrollToMembershipForm} className="bg-[#FFD700] text-[#000] font-semibold text-[14px] sm:text-[16px] py-[10px] sm:py-[13px] px-[24px] sm:px-[30px] rounded-full border-[1px] sm:border-[2px] border-[#EAB208] hover:bg-[#00000060] hover:text-[#FFD700] transition-colors duration-300 w-full sm:w-auto cursor-pointer">
          Add Membership
        </button>
        <a href="/Piety.pdf" target="blank">
          <button className="bg-[#00000060] text-[#fff] font-semibold text-[14px] sm:text-[16px] py-[10px] sm:py-[13px] px-[24px] sm:px-[30px] rounded-full border-[1px] sm:border-[2px] border-[#EAB208] hover:bg-[#FFD700] hover:text-[#000] transition-colors duration-300 w-full sm:w-auto cursor-pointer">
            Read Whitepaper
          </button>
        </a>
      </div> */}

      {/* Disclaimer */}
      <div className="text-center pt-[54px] px-4 sm:px-6 lg:px-0">
        <h2 className="text-[24px] sm:text-[30px] pb-[20px] font-bold text-[#FFFFFF]">
          Disclaimer
        </h2>
        <p className="text-[16px] sm:text-[18px] text-[#D1D5DB] max-w-2xl mx-auto">
          Piety Token is administered by CBF Trust, a fiduciary entity of URME United, a Private Membership Association and Express Trust. All participation is by private agreement only. Piety Tokens are not securities, investments, or public deposits, and are not FDIC insured. No public solicitation is being made. All rights reserved under private membership association law.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center pt-[50px] gap-[24px] sm:gap-[32px] pb-[50px] sm:pb-[100px]" id="socials">
        <a href="https://x.com/PietyToken?t=rWiI1z9_vRB1cmU3pWZDIQ&s=09" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://t.me/+1UOrTNEBkzI1NWM0" target="_blank" rel="noopener noreferrer">
          <Telegram />
        </a>
        <a href="https://discord.gg/9APp9fcC" target="_blank" rel="noopener noreferrer">
          <Discord />
        </a>
        <a href="https://www.tiktok.com/@pietytoken1?_t=ZP-8yTEqwcFkBK&_r=1" target="_blank" rel="noopener noreferrer">
          <TictokIcon />
        </a>
        <a href="https://www.instagram.com/hangdogsocial?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
        {/* <a href="https://fox2now.com/business/press-releases/ein-presswire/835495808/bevtech-global-signs-agreement-to-acquire-sprizzi-drink-co-as-part-of-urme-uniteds-global-growth-strategy" target="_blank" rel="noopener noreferrer">
                <FoxIcon />
              </a> */}
        <a href="http://www.hangdogmembers.com" target="_blank" rel="noopener noreferrer">
          <GlobeIcon />
        </a>
      </div>

      {/* Footer Content */}
      <div className="px-[20px] sm:px-[30px] pb-[50px]">
        <div className="flex flex-col lg:flex-row lg:justify-evenly gap-[40px] lg:gap-[20px] max-w-7xl mx-auto">

          {/* Company Info - Always first/left */}
          <div className="flex-1 max-w-[279px] mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start mb-4">
              <img src="/Logo.png" alt="Piety Token Logo" className="h-12" />
            </div>
            <p className="text-[14px] sm:text-[16px] text-[#9CA3AF] pt-[10px] text-center lg:text-left">
              A digital currency backed by real assets, bringing stability and value to the cryptocurrency space.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-[16px] pt-[23px]">
              <a href="https://x.com/PietyToken?t=rWiI1z9_vRB1cmU3pWZDIQ&s=09" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              <a href="https://t.me/+1UOrTNEBkzI1NWM0" target="_blank" rel="noopener noreferrer">
                <Telegram />
              </a>
              <a href="https://discord.gg/9APp9fcC" target="_blank" rel="noopener noreferrer">
                <Discord />
              </a>
              <a href="https://www.tiktok.com/@pietytoken1?_t=ZP-8yTEqwcFkBK&_r=1" target="_blank" rel="noopener noreferrer">
                <TictokIcon />
              </a>
              <a href="https://www.instagram.com/hangdogsocial?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              {/* <a href="https://fox2now.com/business/press-releases/ein-presswire/835495808/bevtech-global-signs-agreement-to-acquire-sprizzi-drink-co-as-part-of-urme-uniteds-global-growth-strategy" target="_blank" rel="noopener noreferrer">
                <FoxIcon />
              </a> */}
              <a href="http://www.hangdogmembers.com" target="_blank" rel="noopener noreferrer">
                <GlobeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links - Second to stack */}
          <div className="flex-1 text-center lg:text-left lg:pl-[12rem]">
            <h2 className="text-[16px] sm:text-[18px] text-[#FFFFFF] font-bold pb-[16px]">Quick Links</h2>
            <ul className="text-[14px] sm:text-[16px] text-[#9CA3AF] flex flex-col gap-[8px]">
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors" onClick={scrollToAbout} >About</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors" onClick={scrollToBenefits} >Benefits</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors" onClick={scrollToTokenomics}>Tokenomics</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors" onClick={scrollToRoadmap}>Roadmap</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors" onClick={scrollToFaq}>FAQ</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors" onClick={scrollToSocials}>Socials</li>
            </ul>
          </div>

          {/* Resources - Third to stack */}
          {/* <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[16px] sm:text-[18px] text-[#FFFFFF] font-bold pb-[16px]">Resources</h2>
            <ul className="text-[14px] sm:text-[16px] text-[#9CA3AF] flex flex-col gap-[8px]">
              <a href="/Piety.pdf" target="blank">
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Whitepaper</li>
              </a>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-[#FFD700] cursor-pointer transition-colors">Press Kit</li>
            </ul>
          </div> */}

          {/* Contact Info - Fourth to stack */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-[16px] sm:text-[18px] text-[#FFFFFF] font-bold pb-[16px]">Contact Info</h2>
            <ul className="text-[14px] sm:text-[16px] text-[#9CA3AF] flex flex-col gap-[8px]">
              <li className="flex gap-[12px] items-center justify-center lg:justify-start hover:text-[#FFD700] cursor-pointer transition-colors">
                <EmailIconGrey />
                <span className="break-all">support@pietytoken.com</span>
              </li>
              <li className="flex gap-[12px] items-center justify-center lg:justify-start hover:text-[#FFD700] cursor-pointer transition-colors">
                <PhoneGrey />
                <span>+1 (909) 362-1411</span>
              </li>
              <li className="flex gap-[12px] items-start justify-center lg:justify-start hover:text-[#FFD700] cursor-pointer transition-colors">
                <Location />
                <span className="text-center lg:text-left">Hangdog Social & Lounge, California, USA.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#EAB3084D] pt-[30px] pb-[30px] text-center">
        <p className="text-[14px] text-[#9CA3AF] px-4">
          © 2025 Piety Token. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
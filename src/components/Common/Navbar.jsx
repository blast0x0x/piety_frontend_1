"use client"
import { useState } from 'react';
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useChainId, useAccount, useReadContract, useWriteContract, useBalance } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
    const chainId = useChainId();
    const { address, isConnected } = useAccount();
    const { data: balance, refetch: refetchBalance } = useBalance({ address: address });
    const { writeContractAsync } = useWriteContract();
    const { openConnectModal } = useConnectModal();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

        // Close mobile menu if open
        setIsMenuOpen(false);
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

        // Close mobile menu if open
        setIsMenuOpen(false);
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

        // Close mobile menu if open
        setIsMenuOpen(false);
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

        // Close mobile menu if open
        setIsMenuOpen(false);
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

        // Close mobile menu if open
        setIsMenuOpen(false);
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

        // Close mobile menu if open
        setIsMenuOpen(false);
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

        // Close mobile menu if open
        setIsMenuOpen(false);
    };
    return (
        <div className="bg-black montserrat py-[15px] sm:py-[30px] h-auto sm:h-[80px] flex items-center justify-center relative">
            <div className="flex max-w-7xl justify-between w-full  items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        src="/Logo.png"
                        alt="Logo"
                        className="h-[32px] sm:h-[40px] lg:h-auto w-auto"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex">
                    <ul className="flex font-[16px] justify-center items-center gap-[20px] text-white">
                        {/* <li className="cursor-pointer hover:text-[#EAB308] transition-colors">Dashboard</li> */}
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors"  onClick={scrollToAbout} >About</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors" onClick={scrollToBenefits}>Benefits</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors" onClick={scrollToTokenomics} >Tokenomics</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors" onClick={scrollToRoadmap} >Roadmap</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors" onClick={scrollToFaq} >FAQ</li>
                        <li className="cursor-pointer hover:text-[#EAB308] transition-colors" onClick={scrollToSocials} >Socials</li>
                    </ul>
                </div>

                {/* Desktop CTA Button */}
                {/* <div className="hidden sm:flex">
                    <button 
                        onClick={scrollToMembershipForm}
                        className="text-[#000] bg-[#EAB308] flex justify-center items-center h-[36px] sm:h-[44px] lg:h-[52px] gap-[3px] font-semibold text-[14px] sm:text-[15px] lg:text-[16px] rounded-full px-[16px] sm:px-[18px] lg:px-[20px] hover:bg-[#D97706] transition-colors"
                    >
                        Invest Here 
                        <img 
                            src="/Investment.png" 
                            alt="Investment" 
                            className="h-[16px] sm:h-[18px] lg:h-auto w-auto ml-[2px]"
                        />
                    </button>
                </div> */}
                <div className="hidden sm:flex">
                    {
                        isConnected ?
                            <>
                                <ConnectButton.Custom>
                                    {({ account, chain, openAccountModal, openChainModal, openConnectModal }) => {
                                        return (
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    className="bg-[#EAB308] px-2 py-[11px] mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                                           hover:bg-[#D4A108] transition-colors duration-200 cursor-pointer
                                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]"
                                                    onClick={openChainModal}
                                                >
                                                    {chain?.name || "⚠️ Wrong Network"}
                                                </button>
                                                <button
                                                    className="bg-[#EAB308] px-2 py-[11px] mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                                           hover:bg-[#D4A108] transition-colors duration-200 cursor-pointer
                                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]"
                                                    onClick={openAccountModal}
                                                >
                                                    {account?.displayName + " " + account?.displayBalance}
                                                </button>
                                            </div>
                                        );
                                    }}
                                </ConnectButton.Custom>
                            </>
                            :
                            <button className="bg-[#EAB308] px-2 py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                                           hover:bg-[#D4A108] transition-colors duration-200 cursor-pointer
                                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]"
                                onClick={openConnectModal}>
                                Connect Wallet
                            </button>
                    }
                </div>
                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 lg:hidden z-50">
                    <div className="px-[16px] py-[20px]">
                        <ul className="flex flex-col gap-[16px] text-white text-[16px]">
                            {/* <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800">Dashboard</li> */}
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800" onClick={scrollToAbout}>About</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800" onClick={scrollToBenefits}>Benefits</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800" onClick={scrollToTokenomics} >Tokenomics</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800" onClick={scrollToRoadmap} >Roadmap</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px] border-b border-gray-800" onClick={scrollToFaq} >FAQ</li>
                            <li className="cursor-pointer hover:text-[#EAB308] transition-colors py-[8px]" onClick={scrollToSocials} >Socials</li>
                        </ul>

                        {/* Mobile CTA Button */}
                        <div className="mt-[20px] sm:hidden">
                            {
                                isConnected ?
                                    <>
                                        <ConnectButton.Custom>
                                            {({ account, chain, openAccountModal, openChainModal, openConnectModal }) => {
                                                return (
                                                    <div className="flex flex-col gap-2">
                                                        <button
                                                            className="bg-[#EAB308] px-2 py-[11px] mt-[18px] rounded-xl font-semibold text-[15px] text-[#000] 
                                           hover:bg-[#D4A108] transition-colors duration-200 
                                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[14px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[13px]"
                                                            onClick={openChainModal}
                                                        >
                                                            {chain?.name || "⚠️ Wrong Network"}
                                                        </button>
                                                        <button
                                                            className="bg-[#EAB308] px-2 py-[11px] mt-[18px] rounded-xl font-semibold text-[15px] text-[#000] 
                                           hover:bg-[#D4A108] transition-colors duration-200 
                                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[14px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[13px]"
                                                            onClick={openAccountModal}
                                                        >
                                                            {account?.displayName + " " + account?.displayBalance}
                                                        </button>
                                                    </div>
                                                );
                                            }}
                                        </ConnectButton.Custom>
                                    </>
                                    :
                                    <button className="bg-[#EAB308] px-2 py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                                           hover:bg-[#D4A108] transition-colors duration-200 
                                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]"
                                        onClick={openConnectModal}>
                                        Connect Wallet
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
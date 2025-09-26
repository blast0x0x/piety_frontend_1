"use client"
import Link from 'next/link';
import { MoveUpRight } from "lucide-react";
import { useChainId } from "wagmi";
import {
    MAIN_NET,
    TOKEN_ADDRESS_TEST,
    TOKEN_ADDRESS_MAIN,
} from "@/config/index";

const NewToCrypto = () => {
    const chainId = useChainId();

    return (
        <div className="w-full bg-black min-h-screen">
            <div className="px-[10px]">
                {/* header */}
                <div className="w-full py-[10px] md:px-[105px] max-md:px-2">
                    <div className="z-[999] relative">
                        <div className="transition duration-300">
                            <div className="flex items-center justify-between w-full md:flex-row max-md:flex-col max-md:items-center max-md:gap-4">
                                <div className="max-md:flex max-md:w-full max-md:justify-start max-md:items-center">
                                    <img src="/Logo.png" className="md:h-[42px] max-md:w-[40%] max-md:h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* body */}
                <div className="px-[10px] flex items-center flex-col w-full gap-5 md:px-[105px] max-md:px-2">

                    <div className="flex items-center max-md:flex-col max-md:items-start text-[#334155] gap-[5px] w-full justify-between border-b-1 border-[#ffffff] opacity-80">
                        <div className="flex items-center gap-[5px]">
                            <span className="text-[92px] max-md:hidden" style={{ fontFamily: 'PassionOne' }}>01</span>
                            <span className="text-white text-[22px] font-bold" style={{ fontFamily: 'Manrope' }}>First create a crypto wallet in the Metamask Application</span>
                        </div>
                        <div className="flex items-center justify-between gap-4 max-md:w-full mb-4">
                            <Link
                                href="https://play.google.com/store/apps/details?id=io.metamask"
                                target="_blank"
                                className="flex items-center px-3 py-1 bg-gray-500 rounded-lg cursor-pointer h-full"
                            >
                                <svg className="mr-2 h-6 w-6" aria-hidden="true" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0,0h40v40H0V0z"></path><g><path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path><path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path><path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path><path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path></g></svg>
                                <div className="flex flex-col">
                                    <div className="text-[9px]">GET IT ON</div>
                                    <div className="text-sm">Google Play</div>
                                </div>
                            </Link>
                            <Link
                                href="https://apps.apple.com/us/app/metamask-crypto-wallet/id1438144202"
                                target="_blank"
                                className="flex items-center px-3 py-1 bg-gray-500 rounded-lg cursor-pointer h-full gap-2">
                                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7689 12.3007C15.7796 11.466 16.0013 10.6476 16.4134 9.92167C16.8254 9.19572 17.4143 8.58578 18.1254 8.14861C17.6737 7.50345 17.0777 6.9725 16.3849 6.59795C15.6921 6.2234 14.9215 6.01555 14.1343 5.99093C12.455 5.81467 10.8271 6.99576 9.97137 6.99576C9.0991 6.99576 7.7816 6.00843 6.36287 6.03762C5.4452 6.06726 4.55085 6.33412 3.76697 6.81218C2.98309 7.29023 2.33642 7.96319 1.88995 8.76548C-0.0440497 12.1139 1.39854 17.035 3.25115 19.7416C4.17805 21.0669 5.26133 22.5474 6.67878 22.4949C8.06584 22.4373 8.58388 21.6104 10.2582 21.6104C11.9169 21.6104 12.403 22.4949 13.8492 22.4615C15.3376 22.4373 16.2753 21.1302 17.1697 19.7923C17.8357 18.848 18.3481 17.8043 18.6881 16.6998C17.8234 16.3341 17.0855 15.7219 16.5664 14.9396C16.0472 14.1573 15.7699 13.2395 15.7689 12.3007Z" fill="white" />
                                    <path d="M13.0372 4.21088C13.8487 3.23667 14.2485 1.98449 14.1517 0.720261C12.9119 0.850481 11.7666 1.44304 10.9441 2.37987C10.542 2.83754 10.234 3.36997 10.0378 3.94674C9.84152 4.52351 9.76087 5.1333 9.80044 5.74126C10.4206 5.74765 11.0341 5.61323 11.5947 5.34815C12.1554 5.08306 12.6486 4.69421 13.0372 4.21088Z" fill="white" />
                                </svg>
                                <div className="flex flex-col">
                                    <div className="text-[9px]">Download on the</div>
                                    <div className="text-sm">App Store</div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center max-md:flex-col max-md:items-start text-[#334155] gap-[5px] w-full justify-between border-b-1 border-[#ffffff] opacity-80">
                        <div className="flex items-center gap-[5px]">
                            <span className="text-[92px] max-md:hidden" style={{ fontFamily: 'PassionOne' }}>02</span>
                            <span className="text-white text-[22px] font-bold" style={{ fontFamily: 'Manrope' }}>Buy ETH on BINANCE</span>
                        </div>
                        <Link
                            href="https://www.binance.com/en/how-to-buy/ethereum"
                            target="_blank"
                            className="bg-white rounded-lg flex items-center justify-center px-10 py-2 gap-1 cursor-pointer mb-4"
                        >
                            <span className="text-[15px] font-semibold text-black">Go To Binance</span>
                            <MoveUpRight className="w-[16px] text-black" />
                        </Link>
                    </div>

                    <div className="flex items-center max-md:flex-col max-md:items-start text-[#334155] gap-[5px] w-full justify-between border-b-1  border-[#ffffff] opacity-80">
                        <div className="flex items-center gap-[5px]">
                            <span className="text-[92px] max-md:hidden" style={{ fontFamily: 'PassionOne' }}>03</span>
                            <span className="text-white text-[22px] font-bold" style={{ fontFamily: 'Manrope' }}>Transfer ETH to your Metamask wallet</span>
                        </div>
                        <Link
                            href="https://www.youtube.com/watch?v=ohhpy2FORws&pp=0gcJCfwAo7VqN5tD"
                            target="_blank"
                            className="bg-[#FCCA7A] border-1 border-white rounded-lg flex items-center justify-center px-10 py-2 gap-1 cursor-pointer mb-4">
                            <span className="text-black text-[15px] font-semibold">Show me a video how</span>
                        </Link>
                    </div>

                    <div className="flex items-center max-md:flex-col max-md:items-start text-[#334155] gap-[5px] w-full justify-between border-b-1 border-[#ffffff] opacity-80">
                        <div className="flex items-center gap-[5px]">
                            <span className="text-[92px] max-md:hidden" style={{ fontFamily: 'PassionOne' }}>04</span>
                            <span className="text-white text-[22px] font-bold" style={{ fontFamily: 'Manrope' }}>You are almost there! Swap ETH for $PIETY</span>
                        </div>
                        <Link href="/" className="bg-white rounded-lg flex items-center justify-center px-6 py-2 gap-1 cursor-pointer mb-4">
                            <span className="text-black text-[15px] font-semibold">Presale</span>
                            <MoveUpRight className="w-[16px] text-black" />
                        </Link>
                    </div>

                    <div className="mt-[105px] flex gap-[10px] items-center justify-start w-full">
                        <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-[#9845FE]">
                            <img src="/piety.png" />
                        </div>
                        <span className="text-white text-xl font-bold font-semibold">Token Contract address:</span>
                    </div>
                    <span className="text-base text-white flex justify-start w-full pb-[60px] font-semibold">
                        {chainId === MAIN_NET ? TOKEN_ADDRESS_MAIN : TOKEN_ADDRESS_TEST}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NewToCrypto;
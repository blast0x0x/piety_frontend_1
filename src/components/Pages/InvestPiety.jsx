"use client"
import Button from "../Common/Button"
import PopupInvest from "../Common/PopupInvest"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import bannerimg1 from "../../../public/banner-img1.png";
import goldpiety from "../../../public/gold-piety.png";
import { useChainId } from "wagmi";
import {
    MAIN_NET,
    TOKEN_ADDRESS_TEST,
    TOKEN_ADDRESS_MAIN,
} from "@/config/index";
import Image from "next/image";

const InvestPiety = () => {
    const chainId = useChainId();
    const router = useRouter();

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

    async function addTokenToMetamask() {
        try {
            const wasAdded = await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: chainId === MAIN_NET ? TOKEN_ADDRESS_MAIN : TOKEN_ADDRESS_TEST,
                        symbol: "PIETY",
                        decimals: 18,
                        image: "https://piety.blast0x.xyz/piety.png",
                    },
                },
            });
            if (wasAdded) {
                // https://github.com/MetaMask/metamask-extension/issues/11377
                // We can show a toast message when the token is added to metamask but because of the bug we can't. Once the bug is fixed we can show a toast message.
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }

    return (
        <>
            <div className="text-center pt-[40px] pb-[15px] bg-gradient-to-r from-purple-900 via-cyan-500 to-indigo-900">
                <div className="container mx-auto max-w-7xl lg:grid grid-cols-3 items-start">

                    <div
                        className="rounded-3xl lg:w-[100%] lg:mb-auto mb-5 w-[80%] mx-auto p-4  bg-purple-950 text-white relative overflow-hidden"
                        style={{ boxShadow: "rgb(234, 179, 11) 2px 3px 20px 12px" }}

                    >
                        <div className="relative z-10 text-center">
                            <h1
                                className="font-bold lg:text-[36px] text-[20px] mb-6 leading-tight"
                                style={{  color: "rgb(230, 180, 23)", fontFamily: "Arial, sans-serif" }}
                            >
                                Imagine A
                                New System.
                            </h1>

                            <h2
                                className="font-bold mb-8  lg:text-[36px] text-[20px] leading-tight"
                                style={{ color: "rgb(230, 180, 23)", fontFamily: "Arial, sans-serif" }}
                            >
                                A Design So
                              
                                Simple Yet
                                
                                So Powerful
                            </h2>

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-4" style={{ color: "#e8e8f0" }}>
                                    A Payroll Revolution Where
                                    <br />
                                    Every Paycheck Grows.
                                </h3>

                                <p className="leading-relaxed" style={{ color: "#e8e8f0" }}>
                                    A system that ensures that every step
                                    <br />
                                    forward creates growth and daily
                                    <br />
                                    appreciation turns into real prosperity.
                                </p>
                            </div>

                            <div className="mt-12">
                                <h4 className="font-bold text-lg mb-2" style={{ color: "rgb(230, 180, 23)" }}>
                                    Anchored. by Real Assets
                                </h4>
                                <p style={{ color: "#e8e8f0" }}>Gold, Real Estate, and Proven Business.</p>
                            </div>
                        </div>
                    </div>

                    {/* Middle Panel - Logo and Assets */}
                    <div className="flex flex-col items-center justify-center space-y-8">

                        <Image src={bannerimg1} className="w-[250px]" />

                        <div className="relative">
                            <Image src={goldpiety} className="w-[350px]" />
                        </div>
                    </div>


                    <div className="">
                        <div className="max-w-[506px] mx-auto">
                            <PopupInvest />
                        </div>
                    </div>
                </div>


            </div>

            <div className="bg-[#340c6a]">
                <div className="container mx-auto max-w-7xl p-8">
                    <div className="max-w-7xl mx-auto bg-[#eab30b] h-[2px]">
                    </div>

                    <div className="lg:p-12 p-6 bg-[#4f2884] rounded-3xl mt-11 text-left border border-[#eab30b]" style={{ boxShadow: "rgb(234, 179, 11) 0px 4px 20px 1px" }}>
                        <h2 className="lg:text-[36px] text-[20px] font-semibold text-[#eab30b]">✨ Our Origin  </h2>
                        <p className="lg:text-[20px] text-[16px] tracking-wide text-white">Piety Token was born inside the URME United ecosystem as a solution to broken financial systems. Instead of speculation, we built a closed-loop economy where every paycheck, every transaction, and every business fuels real growth. Anchored by trust, gold, real estate, and proven businesses, our mission is simple: create a sovereign, member-owned economy where money works for people — not against them.

                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto bg-[#eab30b] lg:my-20 my-10 h-[2px]">
                    </div>
                    <h2 className="lg:text-[42px] text-[20px] font-medium text-[#eab30b] text-center">About Piety Token
                    </h2>

                    <div className="lg:p-8 p-6 bg-[#4f2884] text-left rounded-3xl lg:mt-11 mt-6  border border-[#eab30b]" style={{ boxShadow: "rgb(234, 179, 11) 0px 4px 20px 1px" }}

                    >

                        <p className="lg:text-[20px] text-[16px] text-white font-semibold">Most people think making money means grinding every day… but what if your income didn’t depend on you working at all?
                        </p>

                        <h2 className="lg:text-[32px] text-[16px] font-semibold my-6 text-[#eab30b]">GET STARTED FOR AS LITTLE AS $20</h2>
                        <p className="lg:text-[20px] text-[16px] font-medium text-white"><span className="text-[#eab30b] font-semibold">Piety Token is more than a cryptocurrency — </span>it’s the foundation of the URMEverse closed-loop economy. Every paycheck, every transaction, every business that joins adds fuel to the system. And unlike hype coins, Piety is anchored in real assets: gold, real estate, banking, hospitality, and global brands.
                        </p>

                        <h2 className="lg:text-[20px] font-semibold my-6 text-[#eab30b]">Here’s the multiplier that makes it unstoppable:

                        </h2>
                        <ul className="lg:text-[20px] font-semibold list-disc pl-5 text-[#eab30b]">

                            <li>7 new Virtual Bankers each month</li>
                            <li>Each VB recruits 7 businesses</li>
                            <li>Each business averages 7 employees</li>
                            <li>Each paycheck averages $3,100</li>

                        </ul>

                        <p className="lg:text-[20px] font-medium text-white my-6">That means every 30 days, more deposits, more transactions, and more growth automatically pour into the ecosystem — creating ever-rising demand for Piety Tokens.
                        </p>
                        <p className="lg:text-[20px] font-medium text-white"><span className="text-[#eab30b] font-semibold">
                            Founders don’t just hold tokens — </span> they own a share of the growth. The Founders Dividend Plan allocates 0.25% of all business deposits to early investors. “Founders at Large” (under $10K invested) share in a common pool, while Dedicated VB Founders (over $10K) are tied directly to the production of their Virtual Banker’s businesses — compounding earnings with every payroll cycle.</p>
                        <p className="lg:text-[20px] font-medium text-white my-6"><span className="text-[#eab30b] font-semibold">
                            With only $2.5M of tokens available in the Founders Round, </span> this is the window before the system scales. After November 3rd, the dividends vanish for new buyers, and token value accelerates with global expansion.
                        </p>
                        <p className="lg:text-[20px] font-medium text-white mt-6"><span className="text-[#eab30b] block font-semibold">
                            Piety works while you sleep.
                        </span>Not from speculation. Not from trading charts. But from a closed, sovereign economy that gets stronger every single day.
                        </p>
                    </div>

                    <div className="lg:p-8 p-6 bg-[#4f2884] text-left rounded-3xl lg:mt-24 mt-10 border border-[#eab30b]" style={{ boxShadow: "rgb(234, 179, 11) 0px 4px 20px 1px" }}
                    >
                        <p className="text-[16px] text-white"> 🌍 Our Mission: A Sovereign Economy for Humanity
                        </p>

                        <p className="lg:text-[18px] font-medium text-white my-6">For too long, money has been a tool of control — created as debt, inflated away, and locked inside systems that enrich the few while draining the many. At URME United, we chose another path.
                        </p>
                        <p className="lg:text-[18px] font-medium text-white my-6">Piety Token is not speculation. It is not hype. It is a covenant — anchored in gold, real estate, resorts, hospitality, and businesses that touch everyday life. It’s the lifeblood of a private trust economy where members own the value they create.
                        </p>
                         <p className="lg:text-[18px] font-medium text-white my-6">Every paycheck that flows through Piety PayChain, every business that joins the URMEverse, and every member that chooses sovereignty over dependence strengthens the system. Together, we are building an economy that appreciates daily, where tokens grow with every transaction, and where prosperity compounds for generations.
                        </p>

                        <p className="lg:text-[18px] font-medium text-white mt-6">This is not a dream. The model has been proven in our micro-communities. The mechanics are in place. The only question is: will you be one of the Founders who shaped history, or a spectator who watched it happen?

</p>
                    </div>


                </div>
            </div>
        </>

    )
}

export default InvestPiety
import Image from "next/image"
import Image1 from "../../../public/pietyProcess1.png"
import Image2 from "../../../public/image-gold.png"

export default function MovementAlready() {
    return (
        <>
            <main className="bg-[#340c6a]">
                <section className="min-h-[70vh] flex items-center">
                    <div className="w-full">
                        <div className="max-w-4xl mx-auto px-4 py-2">
                            <div className="border-t border-white/60"></div>

                            <div className="py-6 md:py-12 text-center space-y-6">
                                <h1 className="text-balance font-semibold text-[#eab30b] tracking-tight text-2xl md:text-4xl leading-snug">
                                    <span className="align-middle mr-2 text-3xl md:text-4xl">✅</span>
                                    Momentum Already in Motion!
                                </h1>

                                <p className="text-base md:text-lg leading-loose text-white/90 mb-0">
                                    We’ve already surpassed our projected number of Virtual Bankers{" "}
                                    <span className="text-[#eab30b] font-semibold">ahead of schedule.</span>
                                </p>

                                <p className="text-base md:text-lg leading-loose text-white/90 mb-0">
                                    With more than enough VBs signed and trained to cover the entire{" "}
                                    <span className="text-[#eab30b] font-semibold">first quarter of operations,</span>{" "}
                                    business enrollments are queued up and ready to fuel the system the moment we launch.
                                </p>

                                <p className="text-base md:text-lg leading-loose text-white/90 mb-0">
                                    This means dividends will begin compounding{" "}
                                    <span className="text-[#eab30b] font-semibold">immediately after November 3rd</span>.
                                    Founders won’t be waiting on growth, they’ll be stepping into a system that’s already scaling.
                                </p>
                            </div>

                            <div className="border-t border-white/60"></div>
                        </div>
                    </div>
                </section>
            </main>

            <section className="bg-[#6127ad]">
                <div className="container max-w-7xl mx-auto lg:p-12 p-6">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
                        <div className="bg-[#340c6a] p-8 rounded-xl">
                            <h2 className="lg:text-[22px] text-[20px] font-medium text-[#eab30b] text-left">    CBF BANK & TRUST
                            </h2>
                            <p className="lg:text-[22px] text-[20px] font-medium text-[#ffff] text-left">Take control of your credit & assets.</p>
                            <ul className="text-[16px] space-y-1 list-disc pl-4 font-medium text-[#ffff] text-left">

                                <li>Free Bank Accounts
                                </li>
                                <li>Crypto-Centric Financial Trust</li>
                                <li>Asset Fushion Dashboard</li>
                                <li>Private Credit Tools</li>
                                <li>Global Member Acess</li>
                                <li>Private Membership Association (PMA)</li>
                            </ul>
                        </div>

                        <div className="bg-[#340c6a] lg:p-4 p-2 rounded-xl">
                            <Image src={Image1} alt="" className="w-[70%] mx-auto" />
                        </div>
                        

                        <div className="bg-[#340c6a] lg:p-4 p-2 rounded-xl">
                            <Image src={Image2} alt="" className=" mx-auto" />
                        </div>
                             <div className="bg-[#340c6a] lg:p-8 p-4 rounded-xl">
                            <h2 className="lg:text-[22px] text-[20px] font-medium text-[#eab30b] text-left">   Backed by Assets, Secured by Trust


                            </h2>
                            <p className="lg:text-[18px] font-medium text-[#ffff] text-left">
                               Every Piety Token is more than digital code — it’s tethered to real deposits made into CBF Bank & Trust. Through CAP Securities, private trust instruments, and real estate holdings, our ecosystem fuses assets with tokens in a closed-loop system. Gold, property, businesses, and credit values fuel the bank, and the bank fuels Piety — giving members dividends, appreciation, and trust-protected wealth.

.</p>
                         
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

import FeatureCard from "../Common/FeautureCard"
import { Bank, Coins, Insurance } from "@/utils/icons"

const AboutPiety = () => {
    return (
        <div id="about" className="montserrats pb-[150px] max-lg:pb-[100px] max-md:pb-[80px] max-sm:pb-[60px] overflow-x-hidden">
            {/* Header Section */}
            <div className="montserrat flex flex-col items-center text-center pt-[54px] max-lg:pt-[40px] max-md:pt-[30px] max-sm:pt-[25px] px-[20px] max-sm:px-[15px]">
                <h2 className="text-[30px] pb-[20px] font-bold text-[#EAB308] 
                               max-lg:text-[26px] max-md:text-[24px] max-sm:text-[22px] 
                               max-lg:pb-[16px] max-md:pb-[14px] max-sm:pb-[12px]">
                    About Piety Token
                </h2>
                <p className="text-[18px] pb-[32px] text-[#D1D5DB] 
                              max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] 
                              max-lg:pb-[25px] max-md:pb-[20px] lg:w-[60%] max-sm:pb-[15px]">
                    <span className="text-[#FFCF03] font-bold">Piety Token is more than a cryptocurrency</span>—it is the foundation of a new borderless economy, a sovereign system designed to grow stronger with every transaction. Unlike speculative tokens that rise and fall on hype, Piety has been engineered with a patently genius formula: it can only move upward. Every investment, every payroll cycle, every point-of-sale purchase increases demand. With a fixed supply and value growth tied exclusively to our private exchange and ecosystem, Piety is impervious to dumping and pump-and-dump manipulation.
                </p>
                <p className="text-[18px] pb-[32px] text-[#D1D5DB] 
                              max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] 
                              max-lg:pb-[25px] max-md:pb-[20px] lg:w-[60%] max-sm:pb-[15px]">
                    The launch price begins at just $0.02, giving early investors a rare chance to secure ownership before mass onboarding begins. From there, value rises steadily with every inflow—no crashes, no games, just programmed growth. With only 60% of the 3.1 billion tokens ever to be released into circulation, scarcity is locked in, ensuring that rising adoption translates directly into rising value.
                </p>
                <p className="text-[18px] pb-[32px] text-[#D1D5DB] 
                              max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] 
                              max-lg:pb-[25px] max-md:pb-[20px] lg:w-[60%] max-sm:pb-[15px]">
                    Driving this demand is the Piety PayChain, operated through CBF, a crypto-centric financial trust. Employers fund payroll in fiat, employees receive Piety direct to secure vaults, retailers accept tokens at the register, and members pay bills inside the system. Each paycheck, each sale, each bill paid pushes value higher—naturally, predictably, and continuously.
                </p>
                <p className="text-[18px] pb-[32px] text-[#D1D5DB] 
                              max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] 
                              max-lg:pb-[25px] max-md:pb-[20px] lg:w-[60%] max-sm:pb-[15px]">
                    Piety is <span className="text-[#FFCF03] font-bold">backed by real-world assets</span> and ventures: Hangdog Social Resorts (31 destinations opening within 60 months), the SPRiZZi smart beverage relaunch, and three West African gold mines under acquisition. These anchors make Piety not just a token, but a currency connected to tangible growth and global adoption.
                </p>
                <p className="text-[18px] pb-[32px] text-[#D1D5DB] 
                              max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] 
                              max-lg:pb-[25px] max-md:pb-[20px] lg:w-[60%] max-sm:pb-[15px]">
                    Our target is 31 million members worldwide—a self-sustaining economy without borders. For investors, this is the moment before the floodgates open: before retailers adopt Piety as their preferred tender, before employers transition payrolls, before employees around the world hold and spend tokens daily.
                </p>
                <p className="text-[18px] pb-[64px] text-[#D1D5DB] 
                              max-lg:text-[16px] max-md:text-[15px] max-sm:text-[14px] 
                              max-lg:pb-[50px] max-md:pb-[40px] lg:w-[60%] max-sm:pb-[30px]">
                    This is not another coin. This is the currency of a new country without borders—scarce, asset-anchored, programmed to rise, and designed to benefit all who hold it. Early investors are not simply buying tokens; they are claiming ownership in the future of money itself.
                </p>
            </div>

            {/* Feature Cards Section */}
            <div className="pb-[80px] px-[20px] max-lg:pb-[60px] max-md:pb-[50px] max-sm:px-[15px] max-sm:pb-[40px]">
                <div className="flex justify-center gap-[32px] max-w-[1300px] mx-auto
                                max-lg:gap-[20px] max-lg:flex-wrap max-lg:justify-center
                                max-md:flex-col max-md:items-center max-md:gap-[20px] 
                                max-sm:gap-[16px]">
                    <FeatureCard
                        icon={Bank}
                        title={"CBF Bank & Trust"}
                        description={"All members participate by private agreement, and the Association sets the token’s exchange value for use in the private economy — not the market, not speculators."}
                        backgroundImage={'/CBFCARD.png'}
                        width="100%"
                        height="auto"
                        className="xl:w-[395px] xl:h-[245px] 
                                   max-xl:w-[350px] max-xl:h-[220px]
                                   max-lg:w-[300px] max-lg:h-[200px] max-lg:min-w-[280px]
                                   max-md:w-[100%] max-md:max-w-[400px] max-md:h-[180px]
                                   max-sm:h-[160px]"
                    />
                    <FeatureCard
                        icon={Coins}
                        title={"Gold-Backed Value"}
                        description={"Unlike volatile cryptocurrencies, Piety Token derives real value from gold reserves, ensuring stability and protection against inflation."}
                        backgroundImage={'/GoldCard.png'}
                        width="100%"
                        height="auto"
                        className="xl:w-[395px] xl:h-[245px] 
                                   max-xl:w-[350px] max-xl:h-[220px]
                                   max-lg:w-[300px] max-lg:h-[200px] max-lg:min-w-[280px]
                                   max-md:w-[100%] max-md:max-w-[400px] max-md:h-[180px]
                                   max-sm:h-[160px]"
                    />
                    <FeatureCard
                        icon={Insurance}
                        title={"Real Estate & Resorts"}
                        description={"Our token is further backed by a portfolio of premium real estate and luxury resorts, providing tangible asset support and exclusive member benefits."}
                        backgroundImage={'/HangdogCard.png'}
                        width="100%"
                        height="auto"
                        className="xl:w-[395px] xl:h-[245px] 
                                   max-xl:w-[350px] max-xl:h-[220px]
                                   max-lg:w-[300px] max-lg:h-[200px] max-lg:min-w-[280px]
                                   max-md:w-[100%] max-md:max-w-[400px] max-md:h-[180px]
                                   max-sm:h-[160px]"
                    />
                </div>
            </div>

            {/* Vision Section */}
            <div className="pb-[100px] montserrat max-lg:pb-[80px] max-md:pb-[60px] max-sm:pb-[50px] px-[20px] max-sm:px-[15px]">
                <div className="flex gap-[50px] max-w-[1230px] mx-auto justify-between px-[30px] py-[30px] 
                                bg-gradient-to-l from-[#437E90] to-transparent rounded-xl
                                max-lg:gap-[30px] max-lg:px-[20px] max-lg:py-[20px] 
                                max-md:flex-col max-md:gap-[20px] max-md:px-[16px] max-md:py-[16px] max-md:text-center 
                                max-sm:gap-[16px] max-sm:px-[12px] max-sm:py-[12px]">
                    {/* Text Content */}
                    <div className="max-w-[739px] pl-[20px] max-lg:pl-[15px] max-md:pl-[0px] max-md:max-w-none max-md:order-2">
                        <h2 className="text-[#FACC15] font-bold text-[24px] pb-[24px] 
                                       max-lg:text-[22px] max-lg:pb-[20px] 
                                       max-md:text-[20px] max-md:pb-[18px] 
                                       max-sm:text-[18px] max-sm:pb-[16px]">
                            Our Vision
                        </h2>
                        <p className="text-[18px] text-center leading-relaxed
                                      max-lg:text-[17px] 
                                      max-md:text-[16px] 
                                      max-sm:text-[15px]">
                            Our mission is to create a borderless, member-owned economy where money works for the people, not against them. Through the Piety Token and PayChain, we are building a system where every paycheck, purchase, and deposit fuels growth, backed by real assets and secured through a private financial trust. Our goal is simple: empower individuals, strengthen communities, and restore prosperity by replacing debt-driven systems with a currency designed to rise in value and serve its members.
                        </p>
                    </div>
                    {/* Image - After text on large screens, first on small screens */}
                    <div className="flex-shrink-0 max-md:flex max-md:justify-center max-md:order-1">
                        <img 
                            src="/ourvisionImage.jpeg" 
                            alt="" 
                            width={'350px'} 
                            height={"350px"} 
                            className="xl:w-[450px] xl:h-[350px]
                                       max-lg:w-[380px] max-lg:h-[280px] 
                                       max-md:w-[350px] max-md:h-[250px] 
                                       max-sm:w-[300px] max-sm:h-[200px] 
                                       rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Image Gallery Section */}
            <div className="px-[20px] max-sm:px-[15px] overflow-x-hidden">
                {/* First Row */}
                <div className="flex gap-[40px] justify-center 
                                xl:gap-[40px]
                                max-xl:gap-[30px] max-xl:flex-wrap max-xl:justify-center
                                max-lg:gap-[25px] 
                                max-md:gap-[20px] max-md:flex-wrap max-md:justify-center 
                                max-sm:gap-[15px] max-sm:flex-col max-sm:items-center">
                    <img 
                        src="/abt1.png" 
                        alt="" 
                        className="rounded-lg xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]
                                   transition-transform duration-300 hover:scale-105"
                    />
                    <img 
                        src="/abt2.png" 
                        alt="" 
                        className="rounded-lg xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]
                                   transition-transform duration-300 hover:scale-105"
                    />
                    <img 
                        src="/abt3.png" 
                        alt="" 
                        className="rounded-lg xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]
                                   transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Second Row */}
                <div className="flex gap-[40px] justify-center pt-[40px] 
                                xl:gap-[40px]
                                max-xl:gap-[30px] max-xl:pt-[30px] max-xl:flex-wrap max-xl:justify-center
                                max-lg:gap-[25px] max-lg:pt-[25px] 
                                max-md:gap-[20px] max-md:pt-[20px] max-md:flex-wrap max-md:justify-center 
                                max-sm:gap-[15px] max-sm:pt-[15px] max-sm:flex-col max-sm:items-center">
                    <img 
                        src="/abt4.png" 
                        alt="" 
                        className="rounded-lg xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]
                                   transition-transform duration-300 hover:scale-105"
                    />
                    <img 
                        src="/abt5.png" 
                        alt="" 
                        className="rounded-lg xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]
                                   transition-transform duration-300 hover:scale-105"
                    />
                    <img 
                        src="/abt6.png" 
                        alt="" 
                        className="rounded-lg xl:w-auto xl:h-auto
                                   max-xl:w-[30%] max-xl:min-w-[250px] max-xl:h-auto
                                   max-lg:w-[30%] max-lg:min-w-[200px] max-lg:h-auto 
                                   max-md:w-[45%] max-md:min-w-[200px] 
                                   max-sm:w-[90%] max-sm:max-w-[300px]
                                   transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPiety
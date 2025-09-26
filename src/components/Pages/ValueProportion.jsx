import CustomVideoPlayer from "../Common/CustomVideoPlayer"

const { Safety, GraphUp, HandShake } = require("@/utils/icons")
const { default: FeatureCard } = require("../Common/FeautureCard")

const ValueProportion = () => {
    return (
        <div className="montserrat px-4 sm:px-6 lg:px-8">
            <div className="text-center pt-[54px] sm:pt-[40px] lg:pt-[54px]">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[30px] pb-[16px] sm:pb-[18px] lg:pb-[20px] font-bold text-[#EAB308]">
                    The Piety Token Value Proposition
                </h2>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] pb-[48px] sm:pb-[56px] lg:pb-[64px] text-[#D1D5DB] max-w-4xl mx-auto">
                    Unlike most cryptocurrencies, Piety Token is backed by tangible assets providing inherent value and stability.
                </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch gap-[24px] sm:gap-[28px] lg:gap-[32px] max-w-6xl mx-auto">
                <FeatureCard
                    icon={Safety}
                    title={"Asset-Backed Security"}
                    description={"Every token is backed by real assets including member's trusts, gold, real estate, business valuation and banking ledger infrastructure."}
                    className="max-sm:w-full max-sm:max-w-[350px] max-sm:h-[200px] max-md:h-[220px]"
                />
                <FeatureCard
                    icon={GraphUp}
                    title={"Growth Potential"}
                    description={"As our ecosystem expands as more members and assets are acquired, the token value is designed to appreciate accordingly."}
                    className="max-sm:w-full max-sm:max-w-[350px] max-sm:h-[200px] max-md:h-[220px]"
                />
                <FeatureCard
                    icon={HandShake}
                    title={"Utility & Benefits"}
                    description={"Tokens provide access to exclusive financial services, resort privileges, business affiliate perks, loyalty rewards and ecosystem benefits."}
                    className="max-sm:w-full max-sm:max-w-[350px] max-sm:h-[200px] max-md:h-[220px]"
                />
            </div>
        </div>
    )
}

export default ValueProportion
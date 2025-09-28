'use client'

import Navbar from "../Common/Navbar"
import InvestPiety from "./InvestPiety"
import TokenomicsSection from "./Tokenomics"
import ValueProportion from "./ValueProportion"
import Videos from "./Videos"
import DynamicRoadmap from "./Roadmap"

import Footer from "../Common/Footer"
import ExclusivityCards from "./ExclusivityCards"
import FounderRoad from "./FounderRoad"
import MovementAlready from "./MomentumAlready"

function HomePage() {
    return (
        <div className="bg-[#340c6a]">
            <Navbar />

            <div className="w-[100%]">
                <InvestPiety />
                <ExclusivityCards />
                
                <FounderRoad />
         <MovementAlready />
                <div className="w-[100%] bg-[#340c6a]">
                    <ValueProportion />
                    <TokenomicsSection />
                    <Videos />
                    <DynamicRoadmap />
                  
                </div>
            </div>

            <Footer />

        </div>
    )
}
export default HomePage

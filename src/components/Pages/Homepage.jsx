'use client'

import Navbar from "../Common/Navbar"
import CBFTrust from "./CbfTrust"
import Gallery from "./Gallery"
import Hero from "./Hero"
import Intro from "./Introduction"
import InvestPiety from "./InvestPiety"
import AboutPiety from "./AboutPiety"
import TokenomicsSection from "./Tokenomics"
import ValueProportion from "./ValueProportion"
import Videos from "./Videos"
import { CircleEmpty, Processing, TickMark } from "@/utils/icons"
import DynamicRoadmap from "./Roadmap"
import MemberShipBenefits from "./MembershipBenefits"
import PietyMemberShip from "./PietyMembership"
import { ArrowDown, ChevronDown } from "lucide-react"
import QNA from "./Qna"
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
                    {/* <MemberShipBenefits /> */}
                    {/* <PietyMemberShip /> */}
                    {/* <QNA /> */}
                </div>
            </div>

            <Footer />

        </div>
    )
}
export default HomePage
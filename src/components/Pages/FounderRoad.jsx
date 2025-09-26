import FoundersRoiTable from "./Founder/roi-table"
import FoundersBenefits from "./Founder/benefits"
import FoundersRoiTable2 from "./Founder/roi-table2"
import FoundersRoiTable3 from "./Founder/roi-table3"
import FoundersRoiTable4 from "./Founder/roi-table4"

export default function FounderRoad() {
    return (
        <>

            <main className="bg-[#340c6a] ">
                <div className="container max-w-7xl mx-auto px-12">
                    <FoundersBenefits />
                    <div className="mt-10 md:mt-12"></div>
                    <FoundersRoiTable />
                </div>

            </main>
            <main className="bg-[#6127ad] ">
                <div className="container max-w-7xl mx-auto px-12">
                    <FoundersRoiTable2 />
                </div>
            </main>
             <main className="bg-[#340c6a]">
                <div className="container max-w-7xl mx-auto px-12">
                    <FoundersRoiTable3 />
                </div>
            </main>
              <main className="bg-[#6127ad] ">
                <div className="container max-w-7xl mx-auto px-12">
                    <FoundersRoiTable4 />
                </div>
            </main>
        </>
    )
}

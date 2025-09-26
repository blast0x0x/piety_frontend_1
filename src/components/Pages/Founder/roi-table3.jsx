export default function FoundersRoiTable3() {
  const rows = [
    { term: "12 Months", dividend: "~$1,125 annually", growth: "$6,500", combined: "$6,612" },
    { term: "24 Months", dividend: "~$4,500 annually", growth: "$150,000", combined: "$15,450" },
    { term: "36 Months", dividend: "~$10,050 annually", growth: "$425,000", combined: "$43,550" },
    { term: "60 Months", dividend: "~$30,000 annually", growth: "$1030,000", combined: "$106,000" },
  ]

  return (


    <>
        <div className="space-y-6 py-8">
      <div>
         {/* <div className="w-[82%] mx-auto bg-[#eab30b] my-11 h-[2px]">
                    </div> */}
    
        <h2 className="text-2xl md:text-3xl font-bold  text-[#eab30b]">
Dedicated VB Founder Investment Profile
        </h2>
        <div className="mt-4" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl text-[#eab30b] font-semibold">$10,000 Investment

</h3>
        <ul className="list-disc pl-6 space-y-2 text-base md:text-lg leading-relaxed">
          <li>Shares in 0.25% of deposits from your VB’s recruited businesses
</li>
          <li>Plus token appreciation
</li>
        </ul>
      </div>
    </div>
        <section className="mt-10 md:mt-12 pb-12">
      <div className="overflow-x-auto rounded-lg ring-1 ring-[var(--brand-border)]">
        <table className="w-full min-w-[720px] border-collapse">
          <thead>
            <tr className="text-sm md:text-base">
              <th className="text-left px-5 py-4 font-semibold">Timeline</th>
              <th className="text-left px-5 py-4 font-semibold">Dividend Share</th>
              <th className="text-left px-5 py-4 font-semibold">Token Value Growth*</th>
              <th className="text-left px-5 py-4 font-semibold">Combined ROI Potential</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {rows.map((r) => (
              <tr key={r.term} className="border-t border-[var(--brand-border)]">
                <td className="px-5 py-4">{r.term}</td>
                <td className="px-5 py-4">{r.dividend}</td>
                <td className="px-5 py-4">{r.growth}</td>
                <td className="px-5 py-4">{r.combined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
    
    </>
  )
}

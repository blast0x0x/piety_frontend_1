export default function FoundersRoiTable() {
  const rows = [
    { term: "12 Months", dividend: "~$112 annually", growth: "$6,500", combined: "$6,612" },
    { term: "24 Months", dividend: "~$450 annually", growth: "$15,000", combined: "$15,450" },
    { term: "36 Months", dividend: "~$1,050 annually", growth: "$42,500", combined: "$43,550" },
    { term: "60 Months", dividend: "~$3,000 annually", growth: "$103,000", combined: "$106,000" },
  ]

  return (
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
  )
}

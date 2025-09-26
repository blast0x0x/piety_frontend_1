// pages/index.js or app/page.js

export default function ExclusivityCards() {
  const features = [
    {
      title: "Exclusivity",
      subtitle: "Founders Dividend Plan — Reserved Only for Founders",
      description:
        "Founder’s Tokens aren’t just assets, they are contracts of ownership in a private sovereign trust. Only early Founders share in the perpetual dividend pool created from every business payroll deposit across the ecosystem.",
    },
    {
      title: "Monthly Dividend Engine",
      subtitle: "0.25% of Every Payroll Deposit Feeds the Founders Dividend Pool",
      description:
        "Every time a business runs payroll through Piety PayChain, a slice is set aside. For Founders at Large (under $10K), the dividend pool is shared. For Dedicated VB Founders ($10K+), you receive dividends tied directly to your recruited businesses.",
    },
    {
      title: "Two Tiered Yield",
      subtitle: "Appreciation + Dividends = Double Growth",
      description:
        "Your tokens appreciate with every purchase. Your dividends grow with every payroll cycle. Unlike any other token, Piety delivers two layers of yield — appreciation locked in the code, and dividends flowing through the trust.",
    },
    {
      title: "Limited Round",
      subtitle: "$2.5M Founder’s Round — 45 Days Only",
      description:
        "When this round closes, so does the dividend plan. Only the first $2.5M of token holders will ever have dividend rights. Once sold, they’re sealed forever.",
    },
    {
      title: "The Sovereign Advantage",
      subtitle: "Private Trust. Asset Backed. Closed-Loop.",
      description:
        "Because Piety operates inside a Private Membership Association and Trust, Founder dividends are beyond government reach, backed by gold, real estate, resorts, and global businesses.",
    },
    {
      title: "The Call",
      subtitle: "This is Your Moment.",
      description:
        "In 45 days, the Founder’s Dividend Window is gone forever. This is the one chance to be paid every time a paycheck is run inside the URMEverse economy.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#340c6a] text-white lg:p-8 p-6">
      <div className="container max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 lg:p-4 p-2 gap-6">
        {features.map((item, index) => (
            
          <div>
                      <h2 className="lg:text-[36px] text-[20px] text-center my-6 font-light  text-[#eab30b]">{item.title}</h2>
          <div key={index} className="bg-[#4e2884] p-6 rounded-2xl shadow-md">
            <h3 className="lg:text-[20px] font-semibold text-[#eab30b] mb-1">{item.subtitle}</h3>
            <p className="lg:text-[20px] text-gray-200 tracking-tighter">{item.description}</p>
          </div>
          </div>
        ))}
      </div>
    </main>
  );
}

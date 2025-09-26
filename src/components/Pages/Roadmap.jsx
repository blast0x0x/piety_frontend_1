import React from 'react';
import { CircleEmpty, Processing, TickMark } from "@/utils/icons";

function DynamicRoadmap ({ data = {} }) {
  const defaultData = {
    phase1: {
      badge: "Phase One - Current",
      title: "Charter Member & Strategic Partners",
      description: "Launch presale site with $250K matched allocation ($0.01 effective entry)\nOnboard first Charter Members, Virtual Bankers, and Business Affiliates\nEnroll Associate Members to prepare for payroll launch\nEstablish PMA membership + vault custody infrastructure\nSecure first $7.5M in presale funding",
      items: [
        { status: "completed", text: "Launch Piety Token website" },
        { status: "completed", text: "Onboard next 250 Charter Members" },
        { status: "processing", text: "Secure initial $7.5M funding" }
      ]
    },
    phase2: {
      badge: "Phase Two - November 3rd, 2025",
      title: "Launch Piety PayChain payroll system",
      description: "Launch Piety PayChain payroll system (first 2,500 employees, ~$4K avg/month)\nGenerate first $10M in payroll flow through PayChain\nToken value guidance: advance toward $0.05–$0.10 as adoption ramps\nRancho Cucamonga Hangdog Resort soft opening, accepting Piety at POS",
      items: [
        { status: "pending", text: "Launch Piety PayChain program" },
        { status: "pending", text: "Increase token price to $0.05-$0.10" },
        { status: "pending", text: "Establish CBF Payment Rails" }
      ]
    },
    phase3: {
      badge: "Phase Three — Dec 2025–Q2 2026",
      title: "Infrastructure Development - Value Growth",
      description: "Payroll doubling month-over-month; merchant onboarding expands (local + resort POS)\nGrand Opening of Rancho Cucamonga Hangdog Resort with full Piety integration\nSecure/additional real-asset backing (including West Africa gold progress)\nDevelopment of independent back office dashboard for payroll + POS + crypto banking\nPrice milestone: projected $0.25 by Dec 15, 2025 (site guidance)",
      items: [
        { status: "pending", text: "Complete new POS & CBF banking integration" },
        { status: "pending", text: "Finish Development token distribution platform" },
        { status: "pending", text: "Secure additional real asset mine backing" }
      ]
    },
    phase4: {
      badge: "Phase Four — Q3 2026–2027",
      title: "Ecosystem Expansion",
      description: "POS app launch + merchant portal live worldwide\nBroaden CBF rails to support 150+ cryptos, bill pay, and international payroll\nRelaunch SPRiZZi manufacturing for global product distribution tied to Piety\nGrow VB/BA networks internationally; POS penetration in resort hubs + local businesses\nMigrate to independent servers & sovereign infrastructure — resilient against outside shutdowns\nToken target: continued growth beyond $1.00 as ecosystem scales",
      items: [
        { status: "pending", text: "Open & Begin Redistribution of SPRiZZi Products" },
        { status: "pending", text: "Final Stage of Hangdog Resort Buildout" },
        { status: "pending", text: "Achieve Sovereign National Status for URME United" }
      ]
    },
    phase5: {
      badge: "Phase Five — Through Month 60 (Global Footprint)",
      title: "Global Footprint Expansion",
      description: "31 Hangdog Resorts open worldwide (Rancho + 30 additional)\nURMEVerse perks platform fully live (lodging, retail, experiences, rewards in Piety)\n31 million members onboard across payroll, retail, and lifestyle ecosystem\nToken value target: $5.00 goal with ecosystem maturity\nBorderless, asset-anchored, sovereign economy functioning at global scale",
      items: [
        { status: "pending", text: "30 Resort Simultaneous Grand Opening" },
        { status: "pending", text: "Reach 31M Member Plateau" },
        { status: "pending", text: "Reach $5.00 Token Goal Value" }
      ]
    }
  };

  const roadmapData = { ...defaultData, ...data };
  const phases = Object.values(roadmapData);

  const renderIcon = (status) => {
    switch (status) {
      case "completed":
        return <TickMark />;
      case "processing":
        return <Processing />;
      case "pending":
      default:
        return <CircleEmpty />;
    }
  };

  return (
    <div
      className="montserrat pb-10"
      id='roadmap'
      style={{ backgroundColor: '#6127ad', color: '#D1D5DB' }}
    >
      <div className="text-center pt-[54px]">
        <h2 className="text-[30px] pb-[20px] font-bold text-[#eab30b]">Project Roadmap</h2>
        <p className="text-[18px] pb-[64px] px-[5px] text-[#D1D5DB]">
          Our strategic plan for developing the Piety Token ecosystem.
        </p>
      </div>

      <div className="relative pb-[30px] p-8">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {phases.map((phase, index) => (
            <div key={index} className={`flex justify-center gap-[100px] ${index > 0 ? 'pt-[50px]' : ''}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="flex flex-col pt-[15px] max-w-[570px] items-end z-[100]">
                    <p className="bg-[#eab30b] font-bold text-[14px] text-black rounded-full py-[4px] px-[15px]">{phase.badge}</p>
                    <h2 className="font-bold text-[20px] pt-[6px] text-right text-white">{phase.title}</h2>
                    <p className="text-[16px] text-[#D1D5DB] pt-[10px] text-right whitespace-pre-line">{phase.description}</p>
                  </div>

                  <div className="relative max-w-[570px] w-[570px] h-[150px] flex flex-col gap-[15px] p-[25px] bg-[#340c6a] shadow-lg rounded-xl border border-[#eab30b33]">
                    {phase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-[10px] text-white">
                        {renderIcon(item.status)}
                        <p>{item.text}</p>
                      </div>
                    ))}
                    <div className="w-[40px] h-[40px] bg-[#340c6a] rounded-full border-[#FACC15] border-[4px] absolute top-[-20px] left-[50%] -translate-x-[50%]" />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative max-w-[570px] w-[570px] h-[150px] flex flex-col gap-[15px] p-[25px] bg-[#340c6a] shadow-lg rounded-xl border border-[#eab30b33]">
                    {phase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-[10px] text-white">
                        {renderIcon(item.status)}
                        <p>{item.text}</p>
                      </div>
                    ))}
                    <div className="w-[40px] h-[40px] bg-[#340c6a] rounded-full border-[#FACC15] border-[4px] absolute top-[-20px] left-[50%] -translate-x-[50%]" />
                  </div>

                  <div className="flex flex-col pt-[15px] items-start max-w-[570px] z-[100]">
                    <p className="bg-[#eab30b] font-bold text-[14px] text-black rounded-full py-[4px] px-[15px]">{phase.badge}</p>
                    <h2 className="font-bold text-[20px] pt-[6px] text-left text-white">{phase.title}</h2>
                    <p className="text-[16px] text-[#D1D5DB] pt-[10px] text-left whitespace-pre-line">{phase.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* Vertical Line */}
          <div className="absolute z-[10] top-0 left-[50%] -translate-x-[50%] h-full w-[4px] bg-[#FACC15]" />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="space-y-[30px]">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {index !== 0 && (
                  <div className="relative mb-[15px] flex justify-center">
                    <div className="w-[30px] h-[30px] bg-[#340c6a] rounded-full border-[#FACC15] border-[3px] relative z-10" />
                  </div>
                )}
                <div className="flex flex-col gap-[15px] text-center">
                  <div className="flex flex-col items-center z-[100]">
                    <p className="bg-[#eab30b] font-bold text-[14px] text-black rounded-full py-[4px] px-[15px]">{phase.badge}</p>
                    <h2 className="font-bold text-[18px] pt-[6px] text-white">{phase.title}</h2>
                    <p className="text-[14px] text-[#D1D5DB] pt-[8px] text-center px-4 whitespace-pre-line">{phase.description}</p>
                  </div>
                  <div className="relative max-w-[400px] w-full h-auto flex flex-col gap-[12px] p-[20px] bg-[#340c6a] shadow-lg rounded-xl border border-[#eab30b33] mx-auto">
                    {phase.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-[10px] text-white">
                        {renderIcon(item.status)}
                        <p className="text-[14px]">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {index !== 0 && (
                  <div className="absolute top-[-30px] left-[50%] -translate-x-[50%] w-[2px] h-[30px] bg-[#FACC15] z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicRoadmap;

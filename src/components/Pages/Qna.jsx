import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const QNA = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleAnswer = (index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const qnaData = [
    {
      question: "What is Piety Token and how is it different from other cryptocurrencies?",
      answer: "Piety Token is a cryptocurrency designed around principles of faith, community, and charitable giving. Unlike speculative tokens, it focuses on building a community centered around shared values and charitable initiatives. A portion of transactions may be allocated to charitable causes, making it a token with social impact built into its core mechanism. Rather than purely profit-driven, Piety Token emphasizes spiritual and moral values in its community governance and decision-making, with transparent governance where community members have a say in how funds are distributed and which charitable causes are supported."
    },
    {
      question: "Why do I need a referral code to join the presale?",
      answer: "The referral code system is designed to ensure that only genuine community members participate in the presale, creating a more secure and committed investor base. This approach helps prevent bots and speculative traders from entering the presale, while rewarding existing community members for bringing in new participants. The referral system also helps build stronger community connections and ensures that new members are properly onboarded with the guidance of existing supporters."
    },
    {
      question: "When will I receive my tokens after investing?",
      answer: "Token distribution typically occurs after the completion of the presale period and any necessary vesting schedules. The exact timing depends on the project's roadmap and technical requirements for token deployment. Most presale participants receive their tokens within 30-60 days after the presale concludes, though this can vary. You will receive notifications and updates about the distribution timeline through official channels, and tokens will be sent directly to your registered wallet address."
    },
    {
      question: "What are the membership benefits and how do I access them?",
      answer: "Membership benefits may include early access to new features, exclusive community events, governance voting rights, staking rewards, and access to special educational content. To access these benefits, you typically need to hold a minimum amount of tokens in your wallet and connect it to the official platform. Some benefits may be tiered based on your token holdings or participation level. Detailed information about accessing specific benefits will be provided in your member dashboard once tokens are distributed."
    },
    {
      question: "Is there a minimum investment requirement?",
      answer: "Yes, most presales have a minimum investment requirement to ensure serious participation and to manage the administrative costs of processing smaller transactions. The specific minimum amount varies by project but is typically set at a reasonable level to allow broad participation while maintaining efficiency. This information is usually clearly stated in the presale terms and conditions. Contact the official support team if you have questions about the minimum investment threshold for Piety Token's presale."
    },
    {
      question: "What happens after the 90-day presale period ends?",
      answer: "After the 90-day presale period concludes, the project moves into its next phase which typically includes token distribution to presale participants, listing on decentralized exchanges, and the launch of core platform features. The team will begin implementing the roadmap milestones, including the development of key utilities and community features. Presale participants will receive their tokens according to the distribution schedule, and the broader public will be able to purchase tokens through regular trading once exchange listings are complete."
    }
  ];

  return (
    <div className="pb-[86px] montserrat">
      <div className="text-center pt-[54px] px-4 sm:px-0" id="faq">
        <h2 className="text-[24px] sm:text-[30px] pb-[20px] font-bold text-[#EAB308]" >
          Frequently Asked Questions
        </h2>
        <p className="text-[16px] sm:text-[18px] pb-[64px] text-[#D1D5DB] px-4 sm:px-0">
          Find answers to common questions about the Piety Token presale.
        </p>
      </div>
      
      <div className="max-w-[894px] mx-auto space-y-2 px-4 sm:px-6 lg:px-0">
        {qnaData.map((item, index) => (
          <div key={index}>
            {/* Question Section */}
            <div 
              className="flex justify-between items-center p-[16px] sm:p-[24px] w-full min-h-[60px] sm:h-[76px] border-[1px] border-[#EAB3084D] rounded-xl bg-[#00000060] cursor-pointer transition-all duration-200 hover:bg-[#00000080]"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-white font-medium font-semibold text-[14px] sm:text-[18px] pr-4 leading-tight">
                {item.question}
              </span>
              {openQuestions[index] ? 
                <ChevronUp className="text-[#EAB308] w-5 h-5 flex-shrink-0" /> : 
                <ChevronDown className="text-[#EAB308] w-5 h-5 flex-shrink-0" />
              }
            </div>

            {openQuestions[index] && (
              <div className="mt-2 p-[16px] sm:p-[24px] w-full border-[1px] border-[#EAB3084D] rounded-xl bg-[#00000060]">
                <p className="text-white leading-relaxed text-[14px] sm:text-[16px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNA;
const CBFTrust = () => {
  return (
      <div id="benefits" className="flex justify-evenly items-center montserrat py-[120px] text-30px max-[1024px]:flex-col max-[1024px]:gap-[60px] max-[1024px]:py-[80px] max-[768px]:py-[60px] max-[1024px]:px-[40px] max-[768px]:px-[20px]">
          <div className="flex flex-col  justify-between h-full max-[1024px]:text-center max-[1024px]:order-1" >
              <h2 className="pb-[50px] text-[#FACC15] text-[30px] montserrat font-bold max-[768px]:text-[22px] max-[768px]:pb-[30px]">
                  CBF BANK & TRUST
              </h2>
              <div>
                  <h3 className="pb-[20px] text-[24px] font-semibold max-[768px]:text-[18px] max-[768px]:pb-[25px]">
                      Take control of your credit & assets.
                  </h3>
                  <ul className="flex pl-[30px] text-[24px] font-semibold flex-col gap-[20px] max-[1024px]:pl-0 max-[768px]:text-[18px] max-[768px]:gap-[15px] min-[1024px]:list-disc">
                      <li>Free Bank Accounts</li>
                      <li>Crypto-Centric Financial Trust</li>
                      <li>Asset Fushion Dashboard</li>
                      <li>Private Credit tools</li>
                      <li>Global Member Access</li>
                      <li>Private Membership Association (PMA)</li>
                  </ul>
              </div>
          </div>
          <div className="max-[1024px]:order-2">
              <img 
                  src="/pietyProcess1.png" 
                  alt="" 
                  className="w-full h-auto max-w-[600px] max-[768px]:max-w-[450px] max-[480px]:max-w-[380px]"
              />
          </div>
      </div>
  )
}

export default CBFTrust
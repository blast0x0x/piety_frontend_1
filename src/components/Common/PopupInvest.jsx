"use client"
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";

import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useChainId, useAccount, useReadContract, useWriteContract, useBalance } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";

import { RefreshContext } from '@/context/RefreshContext'

import {
  MAIN_NET,
  TOKEN_ADDRESS_TEST,
  TOKEN_ADDRESS_MAIN,
  USDT_ADDRESS_TEST,
  USDT_ADDRESS_MAIN,
  PRESALE_ADDRESS_TEST,
  PRESALE_ADDRESS_MAIN
} from "@/config/index";

import PRESALE_ABI from "@/config/abis/PRESALE_ABI.json";
import TOKEN_ABI from "@/config/abis/TOKEN_ABI.json";

import Timer from "@/components/Timer";

const useRefresh = () => {
  const { fast, slow } = useContext(RefreshContext)
  return { fastRefresh: fast, slowRefresh: slow }
}

const PopupInvest = () => {
  const router = useRouter();
  const { slowRefresh } = useRefresh();

  const chainId = useChainId();
  const { address, isConnected } = useAccount();
  const { data: balance, refetch: refetchBalance } = useBalance({ address: address });
  const { data: balanceContract, refetch: refetchBalanceContract } = useBalance({ address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST });
  const { writeContractAsync } = useWriteContract();
  const { openConnectModal } = useConnectModal();

  ////// Presale Contract ////////////////////////
  const { data: phase, refetch: refetchPhase } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getCurrentPhase',
    args: [],
    chainId: chainId
  });

  const { data: tokenPrice, refetch: refetchTokenPrice } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getCurrentTokenPrice',
    args: [],
    chainId: chainId
  });

  const { data: nextPrice, refetch: refetchNextPrice } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getTokenPriceByPhase',
    args: [phase !== undefined ? (parseInt(phase) + 1).toString() : "0"],
    chainId: chainId
  });

  const { data: tokenInCurrentPhase, refetch: refetchTokenInCurrentPhase } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'tokenInCurrentPhase',
    args: [],
    chainId: chainId
  });

  const { data: totalRaisedUSD, refetch: refetchTotalUSD } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getTotalRaisedUSD',
    args: [],
    chainId: chainId
  });

  const { data: tokenTotal, refetch: refetchTokenTotal } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'tokenTotal',
    args: [],
    chainId: chainId
  });

  const { data: ethPrice, refetch: refetchEthPrice } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'getLatestETHPrice',
    args: [],
    chainId: chainId
  })

  const { data: startTime, refetch: refetchStartTime } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'startTime',
    args: [],
    chainId: chainId
  })

  const { data: duration, refetch: refetchDuration } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'duration',
    args: [],
    chainId: chainId
  })

  const { data: phaseDuration, refetch: refetchPhaseDuration } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'phaseDuration',
    args: [],
    chainId: chainId
  })

  const { data: isPaused, refetch: refetchIsPaused } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'isPaused',
    args: [],
    chainId: chainId
  })

  /////// USDT Contract //////////////////////////////////////
  const { data: balanceUSDT, refetch: refetchBalanceUSDT } = useReadContract({
    address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
    abi: TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
    chainId: chainId
  });

  const { data: balanceUSDTContract, refetch: refetchBalanceUSDTContract } = useReadContract({
    address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
    abi: TOKEN_ABI,
    functionName: 'balanceOf',
    args: [chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST],
    chainId: chainId
  });

  const { data: approvedUSDTAmount, refetch: refetchApprovedUSDTAmount } = useReadContract({
    address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
    abi: TOKEN_ABI,
    functionName: 'allowance',
    args: [address, chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST],
    chainId: chainId
  });

  ////// Token Contract //////////////////////////////////////
  const { data: balanceToken, refetch: refetchBalanceToken } = useReadContract({
    address: chainId === MAIN_NET ? TOKEN_ADDRESS_MAIN : TOKEN_ADDRESS_TEST,
    abi: TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
    chainId: chainId
  });

  const currentTime = parseInt(Date.now() / 1000);

  useEffect(() => {
    refetchApprovedUSDTAmount();
    refetchBalance();
    refetchBalanceContract();
    refetchBalanceToken();
    refetchBalanceUSDT();
    refetchBalanceUSDTContract();
    refetchEthPrice();
    refetchNextPrice();
    refetchPhase();
    refetchStartTime();
    refetchTokenInCurrentPhase();
    refetchTokenPrice();
    refetchTokenTotal();
    refetchTotalUSD();
    refetchDuration();
    refetchPhaseDuration();
    refetchIsPaused();

    if (currentTime < startTime)
      setPresaleStarted(false);
    else
      setPresaleStarted(true);
  }, [slowRefresh])

  const [selectedCurrency, setSelectedCurrency] = useState('ETH');
  const [payAmount, setPayAmount] = useState(0);
  const [pietyAmount, setPietyAmount] = useState('');
  // const [totalInvestments, setTotalInvestments] = useState(0);
  // const [loading, setLoading] = useState(true);

  const [presaleStarted, setPresaleStarted] = useState(false);

  const goalAmount = 2500000; // $2.5M goal
  const totalTokens = 961000000; // 961M tokens

  const [totalUSD, setTotalUSD] = useState(0);
  const [progress, setProgress] = useState(0);

  const [countdownTime, setCountdownTime] = useState(0);

  const [isApproving, setIsApproving] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  // Fetch total investments
  // useEffect(() => {
  //   const fetchTotalInvestments = async () => {
  //     try {
  //       const response = await fetch('/api/total-investments');
  //       const total = await response.json();
  //       setTotalInvestments(total);
  //     } catch (error) {
  //       console.error('Error fetching total investments:', error);
  //       setTotalInvestments(0);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTotalInvestments();

  //   // Refresh every 30 seconds
  //   const interval = setInterval(fetchTotalInvestments, 30000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    if (totalRaisedUSD !== undefined) {
      setProgress(parseInt(ethers.formatUnits(totalRaisedUSD, 18)) / goalAmount * 100);
    }
  }, [totalRaisedUSD]);

  // useEffect(() => {
  //   if (balanceContract === undefined || balanceUSDTContract === undefined || ethPrice === undefined)
  //     return;

  //   const ethUSD = parseFloat(balanceContract.formatted) * parseFloat(ethers.formatUnits(ethPrice ? ethPrice.toString() : "0", 8));
  //   const usdtUSD = parseFloat(ethers.formatUnits(balanceUSDTContract ? balanceUSDTContract : "0", 6));

  //   setTotalUSD(ethUSD + usdtUSD);
  //   setProgress((ethUSD + usdtUSD) / goalAmount * 100);

  // }, [balanceContract, balanceUSDTContract, ethPrice])

  // Calculate piety amount based on selected currency and pay amount
  useEffect(() => {
    if (payAmount && !isNaN(payAmount) && payAmount > 0) {
      if (selectedCurrency === 'ETH') {
        setPietyAmount(payAmount * parseFloat(ethers.formatUnits(ethPrice ? ethPrice.toString() : "0", 8)) / parseFloat(ethers.formatUnits(tokenPrice ? tokenPrice.toString() : "1", 8)));
      } else if (selectedCurrency === 'USDT') {
        setPietyAmount(payAmount / parseFloat(ethers.formatUnits(tokenPrice ? tokenPrice.toString() : "1", 8)));
      }
    } else {
      setPietyAmount('');
    }
  }, [payAmount, selectedCurrency, ethPrice, tokenPrice]);

  useEffect(() => {
    if (currentTime >= startTime) {
      setPresaleStarted(true);
      setCountdownTime(startTime + 2759697n);
    } else {
      setPresaleStarted(false);
      setCountdownTime(startTime);
    }
  }, [startTime, /*duration, */presaleStarted])

  // Handle currency selection
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setPayAmount(0); // Clear input when switching currency
    setPietyAmount('');
  };

  // Handle pay amount input change
  const handlePayAmountChange = (e) => {
    const regex = /^(?:\d+(?:\.\d{0,3})?|\.|\.\d{1,3}|\d{0}\.\d{1,3})?$/;
    if (regex.test(e.target.value)) {
      let value = e.target.value;
      if (value.startsWith('.')) {
        value = '0' + value;
      }
      setPayAmount(value);
    } else if (e.target.value == '') {
      setPayAmount(0);
    }
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const formatTokens = (num) => {
    return new Intl.NumberFormat('en-US').format(Math.floor(num));
  };

  const getBuyBtnString = () => {
    if (!presaleStarted)
      return '⚠️ Presale Not Started';

    if (isPaused)
      return '⚠️ Presale Paused';

    if (parseFloat(payAmount) == 0 || payAmount == '')
      return 'Enter Amount';

    if (isBuying)
      return 'Buying ...';

    if (selectedCurrency === 'ETH') {
      if (!balance || parseFloat(balance.formatted) <= payAmount)
        return 'Insufficient Balance';
      else
        return 'Buy with ETH';
    }
    else if (selectedCurrency === 'USDT') {
      if (isApproving)
        return 'Approving ...';
      else if (parseFloat(ethers.formatUnits(balanceUSDT ? balanceUSDT : "0", 6)) < payAmount)
        return 'Insufficient Balance';
      else if (parseFloat(ethers.formatUnits(approvedUSDTAmount ? approvedUSDTAmount : "0", 6)) < payAmount)
        return 'Approve USDT';
      else
        return 'Buy with USDT';
    }
  }

  const handleBuy = async () => {
    if (!presaleStarted)
      return;

    if (isPaused)
      return;

    if (payAmount === 0 || payAmount == '')
      return;

    if (selectedCurrency === 'ETH') {
      if (!balance || parseFloat(balance.formatted) <= payAmount)
        return;

      setIsBuying(true);
      await writeContractAsync({
        address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
        abi: PRESALE_ABI,
        functionName: "buyTokenByETH",
        args: [],
        value: ethers.parseEther(payAmount.toString())
      })
        .then(() => {
          setIsBuying(false);
          setPayAmount(0);
        })
        .finally(() => {
        })
        .catch((err) => {
          console.log(err);
          setIsBuying(false);
        });
    } else if (selectedCurrency === 'USDT') {
      if (parseFloat(ethers.formatUnits(balanceUSDT ? balanceUSDT : "0", 6)) < payAmount)
        return;

      if (parseFloat(ethers.formatUnits(approvedUSDTAmount ? approvedUSDTAmount : "0", 6)) < payAmount) {
        setIsApproving(true);
        await writeContractAsync({
          address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
          abi: TOKEN_ABI,
          functionName: "approve",
          args: [chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST, ethers.parseUnits(payAmount.toString(), 6)]
        })
          .then(() => {
            refetchApprovedUSDTAmount();
            setIsApproving(false);
          })
          .catch((err) => {
            console.log(err);
            setIsApproving(false);
          });
        return;
      }

      setIsBuying(true);
      await writeContractAsync({
        address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
        abi: PRESALE_ABI,
        functionName: "buyTokenByUSDT",
        args: [ethers.parseUnits(payAmount.toString(), 6)]
      })
        .then(() => {
          setIsBuying(false);
          setPayAmount(0);
        })
        .finally(() => {
        })
        .catch((err) => {
          console.log(err);
          setIsBuying(false);
        });
    }
  }

  return (
    <div className="w-[90%] max-w-[640px] montserrat border-[2px] border-[#FACC15] bg-[#000] p-[16px] rounded-2xl my-0 mx-auto mt-[20px]">
      <div
        className="montserrat rounded-2xl px-[15px] py-[16px] my-0 mx-auto 
                   max-[1400px]:px-[16px] max-[1400px]:py-[16px]
                   max-[1200px]:px-[14px] max-[1200px]:py-[14px]
                   max-[900px]:px-[12px] max-[900px]:py-[12px]
                   max-[700px]:px-[10px] max-[700px]:py-[10px]
                   max-[500px]:px-[8px] max-[500px]:py-[8px]"
        style={{
          background:
            "linear-gradient(to right bottom, rgb(26 21 6 / 57%) 0%, rgb(15, 12, 3) 30%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)",
        }}
      >
        {/* Countdown Timer */}
        {
          !presaleStarted &&
          <h2 className="text-white montserrat font-semibold text-[14px] pt-[4px] text-left
                         max-[1400px]:text-[16px] max-[1400px]:pt-[20px]
                         max-[1200px]:text-[15px] max-[1200px]:pt-[18px]
                         max-[900px]:text-[14px] max-[900px]:pt-[16px]
                         max-[700px]:text-[13px] max-[700px]:pt-[15px]
                         max-[500px]:text-[12px] max-[500px]:pt-[12px]">
            Presale Starts In
          </h2>
        }
        <Timer timeToEnd={countdownTime} />

        {/* Title and Progress Bar */}
        <div className="flex flex-col gap-[8px] justify-start items-start 
                        max-[700px]:gap-[6px] max-[500px]:gap-[4px]">
          <h2 className="text-white montserrat font-semibold text-[14px] pt-[22px] pb-[8px] 
                         max-[1400px]:text-[19px] max-[1400px]:pt-[20px]
                         max-[1200px]:text-[18px] max-[1200px]:pt-[18px]
                         max-[900px]:text-[17px] max-[900px]:pt-[16px]
                         max-[700px]:text-[16px] max-[700px]:pt-[15px]
                         max-[500px]:text-[14px] max-[500px]:pt-[12px]">
            Buy Now,<span className="text-[#EAB208]"> Before Price Rises.</span>
          </h2>

          <div className="w-full">
            <div className="w-full h-[20px] bg-[#091f2f] 
                           max-[1200px]:h-[18px] max-[700px]:h-[16px] max-[500px]:h-[14px] 
                           relative overflow-hidden shadow-sm rounded-sm">
              <div
                className="bg-[#EAB208] h-[20px] 
                          max-[1200px]:h-[18px] max-[700px]:h-[16px] max-[500px]:h-[14px] 
                          absolute top-0 left-0 transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                  boxShadow:
                    "0 0 12px rgba(255, 255, 255, 0.5), 0 0 6px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.2), inset 1px 0 0 rgba(255, 255, 255, 0.2), inset -1px 0 0 rgba(255, 255, 255, 0.2)",
                }}
              ></div>
            </div>
            <div className="flex justify-between pt-[2px] text-[#EDC211] text-[15px] font-normal opacity-[0.6] 
                            max-[1200px]:text-[14px] max-[700px]:text-[13px] max-[500px]:text-[12px]">
              <p>{progress.toFixed(4)}%</p>
              <p>Goal: {formatNumber(goalAmount)}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-[5px] pb-[16px] font-medium text-[14px] leading-[25px] pt-[16px] 
                        max-[1400px]:text-[15px] max-[1400px]:pt-[40px]
                        max-[1200px]:text-[15px] max-[1200px]:pt-[35px]
                        max-[900px]:text-[14px] max-[900px]:pt-[30px]
                        max-[700px]:text-[14px] max-[700px]:pt-[25px] max-[700px]:pb-[12px]
                        max-[500px]:text-[13px] max-[500px]:pt-[20px] max-[500px]:pb-[10px]">
          <p>
            TOTAL RAISED : {formatNumber(parseInt(ethers.formatUnits(totalRaisedUSD ? totalRaisedUSD : "0", 18)))} / {formatNumber(goalAmount)}
          </p>
          <p>
            TOKEN SOLD : {formatTokens(parseInt(ethers.formatUnits(tokenTotal ? tokenTotal : "0", 18)))} / {formatTokens(totalTokens)}
          </p>
        </div>

        {/* Price Display */}
        <div className="flex justify-between h-[40px] px-[25px] pt-[10px] items-center 
                        max-[1200px]:h-[38px] max-[1200px]:px-[20px]
                        max-[700px]:h-[36px] max-[700px]:px-[15px]
                        max-[500px]:h-[34px] max-[500px]:px-[12px] max-[500px]:pt-[8px] max-[500px]:gap-[2px]">
          <p className="max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[12px]">1 $PTY = ${parseFloat(ethers.formatUnits(tokenPrice ? tokenPrice.toString() : "0", 8)).toFixed(4)}</p>
          <p className="text-[#EDC211] max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[12px]">Next Price: ${parseFloat(ethers.formatUnits(nextPrice ? nextPrice.toString() : "0", 8)).toFixed(4)}</p>
        </div>

        {/* Currency Selection Buttons */}
        <div className="flex justify-evenly pt-[25px] gap-[14px]
                        max-[1200px]:pt-[20px] max-[700px]:pt-[18px] max-[500px]:pt-[15px] max-[500px]:gap-[10px]">
          <button
            onClick={() => handleCurrencySelect('ETH')}
            className={`flex bg-[#0d1112] h-[50px] items-center border-[#F9FF38] border-[1px] w-[177px] rounded-xl justify-center gap-[7px] 
                       max-[1200px]:w-[160px] max-[1200px]:h-[45px]
                       max-[700px]:w-[140px] max-[700px]:h-[42px]
                       max-[500px]:w-full max-[500px]:h-[40px] cursor-pointer
                       ${selectedCurrency === 'ETH'
                ? 'text-[#f9ff38] bg-[rgba(249,255,56,0.2)]'
                : 'hover:text-[#f9ff38] hover:bg-[linear-gradient(to_right,rgba(249,255,56,0.1)_0%,rgba(21,50,69,0.5)_100%)]'
              }`}>
            <div className="w-[24px] h-[24px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold max-[500px]:w-[20px] max-[500px]:h-[20px]">
              <img src="/eth.png" alt="" />
            </div>
            <span className="max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px]">ETH</span>
          </button>
          <button
            onClick={() => handleCurrencySelect('USDT')}
            className={`flex bg-[#0d1112] h-[50px] items-center border-[#F9FF38] border-[1px] w-[177px] rounded-xl justify-center gap-[7px] 
                       max-[1200px]:w-[160px] max-[1200px]:h-[45px]
                       max-[700px]:w-[140px] max-[700px]:h-[42px]
                       max-[500px]:w-full max-[500px]:h-[40px] cursor-pointer
                       ${selectedCurrency === 'USDT'
                ? 'text-[#f9ff38] bg-[rgba(249,255,56,0.2)]'
                : 'hover:text-[#f9ff38] hover:bg-[linear-gradient(to_right,rgba(249,255,56,0.1)_0%,rgba(21,50,69,0.5)_100%)]'
              }`}>
            <div className="w-[24px] h-[24px] bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold max-[500px]:w-[20px] max-[500px]:h-[20px]">
              <img src="/usdt.png" alt="" />
            </div>
            <span className="max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px]">USDT</span>
          </button>
        </div>

        {/* Input Fields */}
        <div className="flex w-full pt-[23px] gap-[14px] justify-center 
                        max-[1200px]:pt-[20px] max-[700px]:pt-[18px] max-[700px]:gap-[10px] max-[500px]:pt-[15px] max-[500px]:gap-[8px] max-[500px]:flex-col">
          <div className="w-full">
            <h3 className="text-start pb-[7px] text-[#FACC15] 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">
              {selectedCurrency} you pay
            </h3>
            <div className="relative rounded-xl h-[49px] border-[1px] border-[#11181e] w-full 
                           max-[1200px]:h-[45px] max-[700px]:h-[42px] max-[500px]:h-[40px]">
              <input
                type="text"
                value={payAmount}
                placeholder="0"
                onChange={handlePayAmountChange}
                className="w-[100%] h-full outline-none p-[10px] bg-transparent text-white 
                          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                          [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[700px]:p-[8px] max-[500px]:text-[13px] max-[500px]:p-[6px]"
              />
              <div className="absolute top-[50%] right-[10px] transform -translate-y-1/2 w-[30px] h-[30px] bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold 
                             max-[1200px]:w-[26px] max-[1200px]:h-[26px] max-[700px]:w-[24px] max-[700px]:h-[24px] max-[500px]:w-[22px] max-[500px]:h-[22px] max-[500px]:right-[8px]">
                <img src={selectedCurrency === 'ETH' ? "/eth.png" : "/usdt.png"} alt="" />
              </div>
            </div>
            <div className="flex justify-between mt-1 text-white hover:text-[#FACC15]">
              <div className="text-start pb-[7px] max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">
                Balance:
              </div>
              <div className="text-start pb-[7px] max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">
                {selectedCurrency === 'ETH' ? parseFloat(balance ? balance.formatted : 0).toFixed(4) : parseFloat(ethers.formatUnits(balanceUSDT ? balanceUSDT : "0", 6)).toFixed(0)}
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-start pb-[7px] text-[#FACC15] 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">
              $PTY you receive
            </h3>
            <div className="relative rounded-xl h-[49px] border-[1px] border-[#11181e] w-full 
                           max-[1200px]:h-[45px] max-[700px]:h-[42px] max-[500px]:h-[40px]">
              <input
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={pietyAmount ? parseInt(pietyAmount) || 0 : ''}
                placeholder="0"
                readOnly
                className="w-[100%] h-full outline-none p-[10px] bg-transparent text-white 
                          [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none 
                          [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0 
                          max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[700px]:p-[8px] max-[500px]:text-[13px] max-[500px]:p-[6px]"
              />
              <div className="absolute top-[50%] right-[10px] transform -translate-y-1/2 w-[30px] h-[30px] bg-yellow-500 rounded-full flex items-center justify-center text-black text-xs font-bold 
                             max-[1200px]:w-[26px] max-[1200px]:h-[26px] max-[700px]:w-[24px] max-[700px]:h-[24px] max-[500px]:w-[22px] max-[500px]:h-[22px] max-[500px]:right-[8px]">
                <img src="/piety.png" alt="" />
              </div>
            </div>
            <div className="flex justify-between mt-1 text-white hover:text-[#FACC15]">
              <div className="text-start pb-[7px] max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">
                Balance:
              </div>
              <div className="text-start pb-[7px] max-[1200px]:text-[15px] max-[700px]:text-[14px] max-[500px]:text-[13px] max-[500px]:pb-[5px]">
                {parseFloat(ethers.formatUnits(balanceToken ? balanceToken : "0", 18)).toFixed(0)}
              </div>
            </div>
          </div>
        </div>
        {
          isConnected ?
            <>
              <button className="bg-[#EAB308] py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                           hover:bg-[#D4A108] transition-colors duration-200 cursor-pointer
                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]" onClick={handleBuy}>{getBuyBtnString()}</button>
            </>
            :
            <button className="bg-[#EAB308] py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                           hover:bg-[#D4A108] transition-colors duration-200 cursor-pointer
                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]"
              onClick={openConnectModal}>
              Connect Wallet
            </button>
        }
        <div className="w-full flex justify-center items-center text-[1rem] font-bold max-md:text-xl font-semibold mt-[15px]">
          NEED HELP?
        </div>
        <div className="flex items-center justify-center font-semibold mt-[8px]">
          <div
            className="flex justify-center items-center border-1 border-white text-white uppercase text-sm leading-none p-3 rounded-lg max-md:text-sm max-md:text-center cursor-pointer"
            onClick={() => { router.push("/new-to-crypto"); }}
          >
            NEW TO CRYPTO
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopupInvest;
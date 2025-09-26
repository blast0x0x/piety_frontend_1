"use client"
import { useState, useEffect, useContext } from "react";
import StripePayment from './StripePayment'; // Import the separate component
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import './phoneInput.css'
import toast from "react-hot-toast";

import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useChainId, useAccount, useReadContract, useWriteContract, useBalance } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";

import { RefreshContext } from '@/context/RefreshContext'

import PRESALE_ABI from "@/config/abis/PRESALE_ABI.json";
import TOKEN_ABI from "@/config/abis/TOKEN_ABI.json";

import {
  MAIN_NET,
  TOKEN_ADDRESS_TEST,
  TOKEN_ADDRESS_MAIN,
  USDT_ADDRESS_TEST,
  USDT_ADDRESS_MAIN,
  PRESALE_ADDRESS_TEST,
  PRESALE_ADDRESS_MAIN
} from "@/config/index";

const useRefresh = () => {
  const { fast, slow } = useContext(RefreshContext)
  return { fastRefresh: fast, slowRefresh: slow }
}

export default function MembershipApplication({
  width = "447px",
  borderRadius = "rounded-l-xl"
}) {
  const { slowRefresh } = useRefresh();

  const chainId = useChainId();
  const { address, isConnected } = useAccount();
  const { data: balance, refetch: refetchBalance } = useBalance({ address: address });
  const { writeContractAsync } = useWriteContract();
  const { openConnectModal } = useConnectModal();

  ////// Presale Contract ////////////////////////
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

  const { data: isMember, refetch: refetchIsMember } = useReadContract({
    address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
    abi: PRESALE_ABI,
    functionName: 'isMember',
    args: [isConnected ? address : "0x0000000000000000000000000000000000000000"],
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

  const { data: approvedUSDTAmount, refetch: refetchApprovedUSDTAmount } = useReadContract({
    address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
    abi: TOKEN_ABI,
    functionName: 'allowance',
    args: [address, chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST],
    chainId: chainId
  });

  useEffect(() => {
    refetchApprovedUSDTAmount();
    refetchBalance();
    refetchBalanceUSDT();
    refetchEthPrice();
    refetchStartTime();
    refetchPhaseDuration();
    refetchIsMember();
  }, [slowRefresh])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investedAmount: '',
    membershipType: '',
    coinType: 'ETH',
    referralCode: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState('form');
  const [clientSecret, setClientSecret] = useState('');
  const [isChecked, setIsChecked] = useState(true)

  const [isApproving, setIsApproving] = useState(false);
  const [isApplying, setIsApplying] = useState(false);

  const [applyAmount, setApplyAmount] = useState(0);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const membershipOptions = [
    { value: '', label: 'Select Membership Type' },
    { value: 'premium', label: 'Premium ($1000)', minAmount: 1000 },
    { value: 'vip', label: 'VIP ($2500)', minAmount: 2500 }
  ];
  const coinOptions = [
    { value: 'ETH', label: 'ETH' },
    { value: 'USDT', label: 'USDT' }
  ];

  useEffect(() => {
    if (formData.membershipType === '') {
      setApplyAmount(0);
    } else if (formData.coinType === 'ETH') {
      const payAmount = formData.membershipType === 'premium' ? 1002 : 2502;
      const ethAmount = ethers.parseUnits(payAmount.toString(), 18 + 8) / ethPrice;
      setApplyAmount(ethers.formatEther(ethAmount));
    } else if (formData.coinType === 'USDT') {
      setApplyAmount(formData.membershipType === 'premium' ? 1000 : 2500);
    }
  }, [formData])

  const getMinimumAmount = (membershipType) => {
    const membership = membershipOptions.find(option => option.value === membershipType);
    return membership ? membership.minAmount : 1000;
  };
  const handlePhoneChange = (phone, country) => {
    setFormData(prev => ({
      ...prev,
      phone: phone
    }));
    if (errors.phone) {
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Full name is required';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Please enter a valid email';
        break;
      case 'phone':
        // Updated phone validation for international format
        if (!value.trim()) error = 'Phone number is required';
        else if (value.length < 10) error = 'Please enter a valid phone number';
        break;
      case 'investedAmount':
        const amount = parseFloat(value);
        const minAmount = getMinimumAmount(formData.membershipType);
        if (!value.trim()) error = 'Investment amount is required';
        else if (isNaN(amount) || amount < minAmount) {
          error = `Amount must be at least $${minAmount}`;
        }
        break;
      case 'membershipType':
        if (!value) error = 'Please select a membership type';
        break;
      case 'zipCode':
        if (!value.trim()) error = 'Zip code is required';
        break;
      case 'referralCode':
        break;
      default:
        break;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    if (name === 'membershipType' && formData.investedAmount) {
      const investmentError = validateField('investedAmount', formData.investedAmount);
      setErrors(prev => ({
        ...prev,
        investedAmount: investmentError
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const createPaymentIntent = async () => {
    try {
      const response = await fetch('/api/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(formData.investedAmount),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          membershipType: formData.membershipType,
          referralCode: formData.referralCode
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('Payment intent creation error:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'zipCode' && key !== 'referralCode') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsProcessing(true);

      try {
        if (isChecked) {
          const paymentData = await createPaymentIntent();
          setClientSecret(paymentData.clientSecret);
          setPaymentStep('payment');
        }
      } catch (error) {
        alert('Error creating payment: ' + error.message);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const getPlaceholderText = () => {
    if (formData.membershipType) {
      const minAmount = getMinimumAmount(formData.membershipType);
      return `Enter Amount (Min: $${minAmount})`;
    }
    return "Select membership type first";
  };

  const handlePaymentSuccess = () => {
    setPaymentStep('success');
  };

  const handlePaymentBack = () => {
    setPaymentStep('form');
  };

  const handlePaymentError = (error, updatedFormData) => {
    if (updatedFormData) {
      setFormData(updatedFormData);
    }
    if (error) {
      alert(error);
    }
  };

  const getApplyBtnString = () => {
    if (formData.name === '' || formData.email === '' || formData.phone === '' || formData.membershipType === '') {
      return 'Please fill in all fields';
    }

    if (isApplying)
      return 'Applying ...';

    const payAmount = formData.membershipType === 'premium' ? 1000 : 2500;

    if (formData.coinType === 'ETH') {
      const ethAmount = payAmount / parseFloat(ethers.formatUnits(ethPrice, 8));
      if (!balance || parseFloat(balance.formatted) <= ethAmount)
        return 'Insufficient Balance';
      else
        return 'Apply with ETH';
    }
    else if (formData.coinType === 'USDT') {
      if (isApproving)
        return 'Approving ...';
      else if (parseFloat(ethers.formatUnits(balanceUSDT ? balanceUSDT : "0", 18)) <= payAmount)
        return 'Insufficient Balance';
      else if (parseFloat(ethers.formatUnits(approvedUSDTAmount ? approvedUSDTAmount : "0", 18)) < payAmount)
        return 'Approve USDT';
      else
        return 'Apply with USDT';
    }
  }

  const handleApply = async () => {
    if (isMember) {
      toast.error("You are already a member");
      return;
    }

    if (formData.name === '' || formData.email === '' || formData.phone === '' || formData.membershipType === '') {
      return;
    }
    if (formData.coinType === 'ETH') {
      if (!balance || parseFloat(balance.formatted) <= applyAmount)
        return;

      console.log("eagle ethers.parseEther(applyAmount.toString()) = ", ethers.parseEther(applyAmount.toString()))
      setIsApplying(true);
      await writeContractAsync({
        address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
        abi: PRESALE_ABI,
        functionName: "applyMembershipWithETH",
        args: [formData.name, formData.email, formData.phone, formData.membershipType === 'premium' ? 0 : 1],
        value: ethers.parseEther(applyAmount.toString())
      })
        .then(() => {
          setIsApplying(false);
          toast.success("Application successful");
        })
        .catch((err) => {
          console.log(err);
          setIsApplying(false);
          toast.error("Application failed");
        });
    } else if (formData.coinType === 'USDT') {
      if (parseFloat(ethers.formatUnits(balanceUSDT ? balanceUSDT : "0", 18)) <= applyAmount)
        return;

      if (parseFloat(ethers.formatUnits(approvedUSDTAmount ? approvedUSDTAmount : "0", 18)) < applyAmount) {
        setIsApproving(true);
        await writeContractAsync({
          address: chainId === MAIN_NET ? USDT_ADDRESS_MAIN : USDT_ADDRESS_TEST,
          abi: TOKEN_ABI,
          functionName: "approve",
          args: [chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST, ethers.parseUnits(applyAmount.toString(), 18)]
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

      setIsApplying(true);
      await writeContractAsync({
        address: chainId === MAIN_NET ? PRESALE_ADDRESS_MAIN : PRESALE_ADDRESS_TEST,
        abi: PRESALE_ABI,
        functionName: "applyMembershipWithUSDT",
        args: [formData.name, formData.email, formData.phone, formData.membershipType === 'premium' ? 0 : 1]
      })
        .then(() => {
          setIsApplying(false);
          toast.success("Application successful");
        })
        .catch((err) => {
          console.log(err);
          setIsApplying(false);
          toast.error("Application failed");
        });
    }
  }

  const SuccessMessage = () => (
    <div className="text-center w-full h-full flex flex-col justify-center">
      <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg className="w-6 h-6 max-sm:w-5 max-sm:h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-[18px] max-sm:text-[16px] font-semibold text-[#111827] mb-2">Payment Successful!</h3>
      <p className="text-[14px] max-sm:text-[12px] text-[#1F2937] mb-4 px-2">
        Your payment of ${formData.investedAmount} has been processed successfully.
      </p>
      <div className="bg-gray-50 p-3 max-sm:p-2 rounded-lg text-left mb-4">
        <h4 className="font-semibold text-[14px] max-sm:text-[12px] text-[#111827] mb-2">Application Details:</h4>
        <div className="space-y-1 text-[12px] max-sm:text-[10px]">
          <p className="text-[#111827]"><strong>Name:</strong> {formData.name}</p>
          <p className="text-[#111827]"><strong>Email:</strong> <span className="break-words">{formData.email}</span></p>
          <p className="text-[#111827]"><strong>Membership:</strong> <span className="capitalize">{formData.membershipType}</span></p>
          <p className="text-[#111827]"><strong>Amount:</strong> ${formData.investedAmount}</p>
          {formData.referralCode && <p><strong>Referral:</strong> {formData.referralCode}</p>}
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          setPaymentStep('form');
          setFormData({
            name: '',
            email: '',
            phone: '',
            investedAmount: '',
            membershipType: '',
            referralCode: '',
            zipCode: ''
          });
          setErrors({});
          setClientSecret('');
        }}
        className="pt-[12px] pb-[12px] max-sm:pt-[10px] max-sm:pb-[10px] w-full text-[16px] max-sm:text-[14px] font-semibold text-[#000000] bg-[#CA8A04] rounded-[8px] hover:bg-[#CA8A04]/90 transition-colors"
      >
        Submit Another Application
      </button>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center max-lg:w-[100%] max-sm:w-full">
      <div
        className={`w-full h-full max-lg:max-w-[480px] max-lg:max-w-full max-lg:w-[100%] p-[48px] max-sm:p-[24px] bg-[#E5E7EB] ${borderRadius} border-outset border-[1px] border-[#EAB3084D] max-sm:w-full`}
      >
        {paymentStep === 'form' && (
          <>
            <h2 className="font-bold text-[24px] max-sm:text-[20px] pb-[20px] max-sm:pb-[16px] text-[#111827]">Apply for Membership</h2>

            <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
              <label htmlFor="name" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                Full Name
              </label>
              <input
                className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl w-full ${errors.name ? 'border-red-500' : 'border-[#D1D5DB]'
                  }`}
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter Your Full Name"
              />
              {errors.name && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.name}</span>}
            </div>

            <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
              <label htmlFor="email" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                Email Address
              </label>
              <input
                className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl w-full ${errors.email ? 'border-red-500' : 'border-[#D1D5DB]'
                  }`}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter Your Email Address"
              />
              {errors.email && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.email}</span>}
            </div>

            <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
              <label htmlFor="phone" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                Phone Number
              </label>
              <PhoneInput
                placeholder="Enter Your Phone Number"
                country={'us'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputProps={{
                  name: 'phone',
                  id: 'phone',
                  className: `border-[1px] pl-[45px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl w-full ${errors.phone ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`
                }}
                containerClass="w-full"
                buttonClass="border-[1px] border-r-0 rounded-l-xl"
                dropdownClass="text-[14px]"
              />
              {errors.phone && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.phone}</span>}
            </div>

            <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
              <label htmlFor="membershipType" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                Membership Type
              </label>
              <div className="relative bg-[#E5E7EB]">
                <select
                  className={`border-[1px] bg-[#E5E7EB] outline-none text-[14px] max-sm:text-[12px] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl appearance-none w-full pr-8 ${errors.membershipType ? 'border-red-500' : 'border-[#D1D5DB]'
                    } ${!formData.membershipType ? 'text-[#ADAEBC]' : ''}`}
                  name="membershipType"
                  id="membershipType"
                  value={formData.membershipType}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                >
                  {membershipOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-[#E5E7EB] text-[#111827]">
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.membershipType && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.membershipType}</span>}
            </div>

            <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
              <label htmlFor="coinType" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                Coin Type
              </label>
              <div className="relative bg-[#E5E7EB]">
                <select
                  className={`border-[1px] bg-[#E5E7EB] outline-none text-[14px] max-sm:text-[12px] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl appearance-none w-full pr-8 ${errors.membershipType ? 'border-red-500' : 'border-[#D1D5DB]'
                    } ${!formData.coinType ? 'text-[#ADAEBC]' : ''}`}
                  name="coinType"
                  id="coinType"
                  value={formData.coinType}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                >
                  {coinOptions.map(option => (
                    <option key={option.value} value={option.value} className="bg-[#E5E7EB] text-[#111827]">
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
              <label htmlFor="coinType" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                You pay with {formData.coinType === "ETH" ? parseFloat(applyAmount).toFixed(5) : applyAmount} {formData.coinType}
              </label>
            </div>

            {/* <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
                <label htmlFor="investedAmount" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                  Investment Amount
                </label>
                <input
                  className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl w-full ${errors.investedAmount ? 'border-red-500' : 'border-[#D1D5DB]'
                    }`}
                  type="number"
                  name="investedAmount"
                  id="investedAmount"
                  value={formData.investedAmount}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder={getPlaceholderText()}
                  disabled={!formData.membershipType}
                />
                {errors.investedAmount && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.investedAmount}</span>}
              </div> */}

            {/* <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
                <label htmlFor="referralCode" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
                  Referral Code (Optional)
                </label>
                <input
                  className="border-[#D1D5DB] border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl w-full"
                  type="text"
                  name="referralCode"
                  id="referralCode"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  placeholder="Enter Referral Code"
                />
              </div> */}

            {
              isConnected ?
                <>
                  <button className="bg-[#EAB308] py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                           hover:bg-[#D4A108] transition-colors duration-200 
                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]" onClick={handleApply}>{getApplyBtnString()}</button>
                  <ConnectButton.Custom>
                    {({ account, chain, openAccountModal, openChainModal, openConnectModal }) => {
                      return (
                        <div className="flex items-center justify-center gap-2">
                          <button
                            className="bg-[#EAB308] py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                           hover:bg-[#D4A108] transition-colors duration-200 
                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]"
                            onClick={openAccountModal}
                          >
                            {account?.displayName + " " + account?.displayBalance}
                          </button>
                          <button
                            className="bg-[#EAB308] py-[11px] w-full mt-[18px] rounded-xl font-semibold text-[14px] text-[#000] 
                           hover:bg-[#D4A108] transition-colors duration-200 
                           max-[1200px]:py-[10px] max-[1200px]:mt-[16px] max-[700px]:py-[9px] max-[700px]:mt-[14px] max-[700px]:text-[13px] max-[500px]:py-[8px] max-[500px]:mt-[12px] max-[500px]:text-[12px]"
                            onClick={openChainModal}
                          >
                            {chain?.name || "⚠️ Wrong Network"}
                          </button>
                        </div>
                      );
                    }}
                  </ConnectButton.Custom>
                </>
                :
                <button
                  type="button"
                  onClick={openConnectModal}
                  className="pt-[12px] pb-[12px] max-sm:pt-[10px] max-sm:pb-[10px] w-full cursor-pointer text-[16px] max-sm:text-[14px] font-semibold text-[#000000] bg-[#CA8A04] rounded-[8px] hover:bg-[#CA8A04]/90 transition-colors disabled:opacity-50"
                >
                  Connect Wallet
                </button>
            }
          </>
        )}

        {paymentStep === 'payment' && (
          <StripePayment
            formData={formData}
            clientSecret={clientSecret}
            onPaymentSuccess={handlePaymentSuccess}
            onBack={handlePaymentBack}
            onError={handlePaymentError}
          />
        )}

        {paymentStep === 'success' && <SuccessMessage />}
      </div>
    </div>
  );
}
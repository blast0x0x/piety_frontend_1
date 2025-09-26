'use client';

import { useState, useEffect, useCallback } from 'react';

export const useEthPrice = (options = {}) => {
  const {
    autoRefresh = true,
    refreshInterval = 30000,
    onError = null
  } = options;

  const [ethPrice, setEthPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Multiple API endpoints to try
  const apiEndpoints = [
    {
      name: 'Coinbase',
      url: 'https://api.coinbase.com/v2/exchange-rates?currency=ETH',
      parser: (data) => parseFloat(data.data.rates.USD)
    },
    {
      name: 'CoinGecko',
      url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
      parser: (data) => data.ethereum.usd
    },
    {
      name: 'CryptoCompare',
      url: 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
      parser: (data) => data.USD
    }
  ];

  const fetchEthPrice = useCallback(async () => {
    setLoading(true);
    setError(null);

    for (const endpoint of apiEndpoints) {
      try {
        console.log(`Trying ${endpoint.name} API...`);
        
        const response = await fetch(endpoint.url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`${endpoint.name} response:`, data);

        const price = endpoint.parser(data);
        
        if (price && price > 0) {
          console.log(`ETH Price from ${endpoint.name}:`, price);
          setEthPrice(price);
          setLoading(false);
          return; // Success, exit the loop
        }
      } catch (err) {
        console.error(`${endpoint.name} failed:`, err);
        continue; // Try next endpoint
      }
    }

    // If all APIs fail, set error and use fallback
    const errorMessage = 'All price APIs failed';
    setError(errorMessage);
    setEthPrice(3000); // Fallback price for development
    
    if (onError) {
      onError(errorMessage);
    }
    
    setLoading(false);
  }, [onError]);

  const refreshPrice = useCallback(() => {
    fetchEthPrice();
  }, [fetchEthPrice]);

  useEffect(() => {
    fetchEthPrice();
    
    let interval;
    if (autoRefresh) {
      interval = setInterval(fetchEthPrice, refreshInterval);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [fetchEthPrice, autoRefresh, refreshInterval]);

  return {
    ethPrice,
    loading,
    error,
    refreshPrice
  };
};

export default useEthPrice;


export const useUsdtPrice = (options = {}) => {
  const {
    autoRefresh = true,
    refreshInterval = 30000,
    onError = null
  } = options;

  const [usdtPrice, setUsdtPrice] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Multiple API endpoints to try for USDT price
  const apiEndpoints = [
    {
      name: 'Coinbase',
      url: 'https://api.coinbase.com/v2/exchange-rates?currency=USDT',
      parser: (data) => parseFloat(data.data.rates.USD)
    },
    {
      name: 'CoinGecko',
      url: 'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd',
      parser: (data) => data.tether.usd
    },
    {
      name: 'CryptoCompare',
      url: 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD',
      parser: (data) => data.USD
    },
    {
      name: 'Binance',
      url: 'https://api.binance.com/api/v3/ticker/price?symbol=USDTUSD',
      parser: (data) => parseFloat(data.price)
    }
  ];

  const fetchUsdtPrice = useCallback(async () => {
    setLoading(true);
    setError(null);

    for (const endpoint of apiEndpoints) {
      try {
        console.log(`Trying ${endpoint.name} API for USDT...`);
        
        const response = await fetch(endpoint.url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`${endpoint.name} USDT response:`, data);

        const price = endpoint.parser(data);
        
        if (price && price > 0) {
          console.log(`USDT Price from ${endpoint.name}:`, price);
          setUsdtPrice(price);
          setLoading(false);
          return; // Success, exit the loop
        }
      } catch (err) {
        console.error(`${endpoint.name} failed for USDT:`, err);
        continue; // Try next endpoint
      }
    }

    // If all APIs fail, set error and use fallback
    const errorMessage = 'All USDT price APIs failed';
    setError(errorMessage);
    setUsdtPrice(1.0); // Fallback price for USDT (should be close to $1)
    
    if (onError) {
      onError(errorMessage);
    }
    
    setLoading(false);
  }, [onError]);

  const refreshPrice = useCallback(() => {
    fetchUsdtPrice();
  }, [fetchUsdtPrice]);

  useEffect(() => {
    fetchUsdtPrice();
    
    let interval;
    if (autoRefresh) {
      interval = setInterval(fetchUsdtPrice, refreshInterval);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [fetchUsdtPrice, autoRefresh, refreshInterval]);

  return {
    usdtPrice,
    loading,
    error,
    refreshPrice
  };
};


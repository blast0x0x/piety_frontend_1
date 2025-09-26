"use client";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

import { http, WagmiProvider, cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RefreshContextProvider } from '@/context/RefreshContext'
// import { ToastContainer } from "react-toastify";
// import { MAINNET_RPC, SEPOLIA_RPC } from "@/lib/config";
// import { ProfileProvider } from "@/contexts/profileContext";
// import { WebsocketProvider } from "@/contexts/websocketProvider";

const config = getDefaultConfig({
    appName: "piety",
    projectId: "367afc1776f6abd254a48a0ef621c043",
    chains: [mainnet],
    //   transports: {
    //     [mainnet.id]: http(MAINNET_RPC),
    //     [sepolia.id]: http(SEPOLIA_RPC),
    //   },
    // ssr: true, // If your dApp uses server side rendering (SSR)
    // syncConnectedChain: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
});

const queryClient = new QueryClient();

const App = ({ children }) => {
    return (
        <>
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider
                        theme={darkTheme({
                            accentColor: '#005308',
                            accentColorForeground: 'white',
                            borderRadius: 'small',
                            fontStack: 'system',
                            overlayBlur: 'small',
                        })}
                    >
                        <RefreshContextProvider>
                            {children}
                        </RefreshContextProvider>
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
            {/* <ToastContainer /> */}
        </>
    );
};

export default App;

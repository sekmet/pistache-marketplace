import '../styles/css/app.css';

import { baseGoerli, goerli, polygonMumbai } from '@sekmet/chains';
import type { AppProps } from 'next/app';
import { configureChains, createClient, mainnet, WagmiConfig } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli, baseGoerli, polygonMumbai],
  [
    alchemyProvider({ apiKey: '0CZZlrwfBDMfyK2Ao5roxdkEAlJ1c0xY' }),
    publicProvider(),
  ]
);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'pistache-hub',
      },
    }),
    /* new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }), */
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <WagmiConfig client={client}>
    <Component {...pageProps} />
  </WagmiConfig>
);

export default MyApp;

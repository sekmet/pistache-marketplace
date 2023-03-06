import { formatEther } from '@ethersproject/units';
// import { useEtherBalance, useEthers } from '@usedappify/core';
// import { InjectedConnector } from '@web3-react/injected-connector';
// import WalletConnectProvider from '@walletconnect/web3-provider';
import { useEffect, useState } from 'react';
import { useAccount, useBalance, useNetwork } from 'wagmi';

import Identicon from '@/components/Wallet/Identicon';
import { getCurrencyByChainId } from '@/utils/utils';

// declare supportated chains
/* export const injected = new InjectedConnector({
  supportedChainIds: [
    1, 3, 4, 5, 28, 42, 56, 69, 250, 1337, 80001, 43114, 1666600000, 1666700000,
    1313161554, 1313161555, 82, 83
  ],
}); */

export default function ConnectButton({
  handleOpenModalConnectors,
  handleOpenModal,
  DrawerMenu,
}: any) {
  /// const { activateBrowserWallet, account, activate, chainId } = useEthers();
  // const { connect, connectors, error, isLoading, pendingConnector } =
  //  useConnect();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: etherBalance } = useBalance({
    address,
  });
  const [chainId, setChainid] = useState<any>();
  // const router = useRouter();
  const account = address;
  // const allowedChainIds = [1, 3, 4, 5, 42, 1337, 80001];
  // console.log(account, 'account');
  // console.log(etherBalance, 'etherBalance');
  // console.log(chainId, 'chainId');

  function handleConnectWallet() {
    // activateBrowserWallet();
    // console.log(account, active)
    handleOpenModalConnectors(true);
  }

  useEffect(() => {
    setChainid(chain?.id);
  }, []);

  /* useEffect(() => {
    async function getWalletConnect() {
      const provider = new WalletConnectProvider({
        infuraId: process.env.INFURA_API_KEY,
      })
      await provider.enable()
      await activate(provider)
    }
    if (accountId) {
      console.log(accountId);
      if (localStorage.getItem('walletconnect')){
        getWalletConnect();
      } else {
        activate(injected);
      }
      // if (account === accountId)
    }

    async function getAccount() {
      const accounts = await window.ethereum.enable();
      const currAccount = accounts[0];
      // do something with new account here
      // console.log('Account ==> ', account);
      localStorage.setItem('chainid', window.ethereum.networkVersion);
      //setChainid(window.ethereum.networkVersion);
      localStorage.setItem('account', currAccount);
    }

    if (typeof window !== undefined && window.ethereum !== undefined) {
      window.ethereum.on('accountsChanged', function () {
        getAccount();
        router.reload();
      });

      window.ethereum.on('networkChanged', function () {
        router.reload();
      });
    } */

  // console.log('allowedChainIds.includes(window.ethereum.networkVersion) ', window.ethereum.networkVersion, allowedChainIds.includes(parseInt(window.ethereum.networkVersion,10)) )

  /* eslint-disable no-underscore-dangle */
  /* if (
      window?.ethereum &&
      !allowedChainIds.includes(parseInt(window.ethereum.networkVersion, 10))
    ) {
      // If not connected to allowed networks, request network switch
      try {
        (async () =>
          window.ethereum.send('wallet_switchEthereumChain', [
            { chainId: '0x13881' },
          ]))();
      } catch (error) {
        console.log(error);
      }
    } 

    //if (account && account !== 'undefined') activate(injected);
    // console.log(account,injected)
    //getAccount();
  }, [account]); */

  return account ? (
    <div className="flex items-center justify-center rounded-xl bg-indigo-900 p-1 text-slate-200">
      <div className="px-3">
        <span className="text-medium text-white">
          {etherBalance &&
            parseFloat(formatEther(etherBalance.value)).toFixed(3)}{' '}
          {getCurrencyByChainId(chainId || parseInt(chainId, 10) || 1)}
        </span>
      </div>
      <button onClick={handleOpenModal}>
        <a
          id="connect-wallet"
          className="border-1px h-30 m-1 rounded-xl border-transparent bg-indigo-800 px-3 hover:border hover:border-solid hover:border-blue-400 hover:bg-indigo-700"
        >
          <span className="text-medium font-semibold text-white">
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </span>
        </a>
      </button>
      <DrawerMenu className="flex max-w-xs items-center rounded-full bg-indigo-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">Open user menu</span>
        <span className="h-8 w-8 rounded-full">
          <Identicon iconSize={32} />
        </span>
      </DrawerMenu>
    </div>
  ) : (
    <a
      href="#connect-button"
      className="rounded-md bg-indigo-900 p-1 py-2 px-3 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      onClick={handleConnectWallet}
    >
      Connect Wallet
    </a>
  );
}

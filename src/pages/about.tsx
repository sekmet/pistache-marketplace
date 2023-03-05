import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="Pistache Web3 functions hub"
        description="Streamline your decentralized applications with Pistache's web3 functions marketplace."
      />
    }
  >
    <div className="inline shrink-0">
      <img
        className="h-32 w-32"
        src="/assets/images/logo.png"
        alt="Multisig Wallets"
      />
    </div>
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="text-2xl font-bold">Multisig Wallets for ETH</h1>

      <p className="leading-text font-bold">
        <span role="img" aria-label="rocket">
          🚀
        </span>{' '}
        A simple Multi Signature Wallet for ETH, ERC20, ERC721 transactions
        on Base Goerli Testnet.
      </p>
      <p className="leading-text">
        A multi signature wallet contract that can be used with ERC20, ERC721
        and ETH transactions and a frontend built using NextJS.
        <br />
        <br />
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        This project is experimental, use at your own risk.
      </p>
    </div>
  </Main>
);

export default About;

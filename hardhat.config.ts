import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'hardhat-abi-exporter';
import 'solidity-coverage';

import * as dotenv from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';
import { task } from 'hardhat/config';

dotenv.config();

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  console.log(taskArgs)
  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: '0.8.16',
  networks: {
    "base-goerli": {
      chainId: 84531,
      url: 'https://goerli.base.org',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      saveDeployments: true,
      //initialBaseFeePerGas: 0,
      //blockGasLimit: 1000000,
      //gas: 1,
    },
  },
  gasReporter: {
    enabled: process.env.gasReporter !== undefined,
    currency: 'USD',
    coinmarketcap: process.env.coinmarketcapkey || '',
  },
  abiExporter: [
    {
      path: './build',
      format: 'json',
      clear: true,
      flat: true,
    },
  ],
  etherscan: {
    apiKey: {
      "base-goerli": process.env.BLOCKSCOUT_API_KEY,
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
         // Pick a block explorer and uncomment those lines
 
         // Blockscout
          apiURL: "https://base-goerli.blockscout.com/api",
          browserURL: "https://base-goerli.blockscout.com"
 
         // Basescan by Etherscan
         // apiURL: "https://api-goerli.basescan.org/api",
         // browserURL: "https://goerli.basescan.org"
        }
      }
    ]    
  },
};

export default config;

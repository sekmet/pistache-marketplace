import { ethers } from 'hardhat';

async function main() {
  const requiredToSign = 1;
  const admins = (await ethers.getSigners()).map((acc) => acc.address);

  const Wallet = await ethers.getContractFactory('MultiSigWallet');
  const wallet = await Wallet.deploy(admins, requiredToSign);
  await wallet.deployed();
  console.log(
    `Wallet for ${requiredToSign} signatures required deployed to: ${wallet.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

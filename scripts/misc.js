// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // const klaytnDeployedContractAddress =
  // "PASTE BAOBAB DEPLOYED CONTRACT ADDRESS HERE";

  const crosschainTokenSRC = await hre.ethers.getContractAt(
    "CrossChainToken",
    klaytnDeployedContractAddress
  );

  // approve src contract to spend a number of tokens (100 CCT tokens)

  console.log(`Approving.....`);
  await crosschainTokenSRC.approve(
    klaytnDeployedContractAddress,
    "100000000000000000000"
  );
  console.log(`Done approving.....`);


  // Set minDstGas on source chain
  // accepts the following: 1) dest chainId 2) packet type ("0" meaning send) 3) gas limit amount 

  console.log(`Setting minDstGas`);
  await crosschainTokenSRC.setMinDstGas(10109, 0, 200000);
  console.log(`Done setting minDstGas`);

  // Set setUseCustomAdapterParams to true

  console.log(`Setting CustomAdapterParams`);
  await crosschainTokenSRC.setUseCustomAdapterParams(true);
  console.log(`Done setting CustomAdapterParams`);

  // Execute the estimateSendFee function

  console.log(`Estimating fee`);
  const tx = await crosschainTokenSRC.estimateSendFee(
    10109,
    "0x1c42accd92d491db8b083fa953b5e3d9a9e42ad5",
    "10000000000000000000",
    false,
    "0x00010000000000000000000000000000000000000000000000000000000000030d40"
  );
  console.log(`Estimated gas fee is: ${Number(tx[0])}`);
  const nativeFee = tx[0];
  console.log(`Done estimating fee`);

  // nativeFee
  // COPY THE RESULT OF THE NATIVE FEE HERE FOR USE WHEN EXECUTING THE SENDFROM FUNCTION
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/misc.js --network baobab

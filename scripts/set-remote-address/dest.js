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

    // const mumbaiDeployedContractAddress =
    // "PASTE MUMBAI DEPLOYED CONTRACT ADDRESS HERE";

  const crosschainTokenDEST = await hre.ethers.getContractAt(
    "CrossChainToken",
    mumbaiDeployedContractAddress
  );

  // On Mumbai : chainId: 10150  deploymentAddress ${klaytnDeployedContractAddress}
  await crosschainTokenDEST.setTrustedRemoteAddress(
    "10150",
    klaytnDeployedContractAddress
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/set-remote-address/dest.js --network mumbai


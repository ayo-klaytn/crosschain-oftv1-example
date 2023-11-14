// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {
  // Step 2: Set trusted remote address

  // const klaytnDeployedContractAddress =
  // "PASTE BAOBAB DEPLOYED CONTRACT ADDRESS HERE";

  // const mumbaiDeployedContractAddress =
  // "PASTE MUMBAI DEPLOYED CONTRACT ADDRESS HERE";

  const crosschainTokenSRC = await hre.ethers.getContractAt(
    "CrossChainToken",
    klaytnDeployedContractAddress
  );

  // On Klaytn : chainId: 10109  deploymentAddress : ${mumbaiDeployedContractAddress}
  await crosschainTokenSRC.setTrustedRemoteAddress(
    "10109",
    mumbaiDeployedContractAddress
  );

  console.log("successfully set trusted remote on source chain");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// npx hardhat run scripts/set-remote-address/src.js --network baobab


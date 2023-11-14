// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // Check balance of recipient address on destination chain

  // const mumbaiDeployedContractAddress =
  // "PASTE MUMBAI DEPLOYED CONTRACT ADDRESS HERE";

  const crosschainTokenDEST = await hre.ethers.getContractAt(
    "CrossChainToken",
    mumbaiDeployedCOntractAddress
  );

  console.log(`Check token balance on dest chain`);
  const bal = await crosschainTokenDEST.balanceOf(
    "PASTE RECIPIENT ADDRESS ON DESTINATION CHAIN"
  );

  console.log(`Done checking token balance on dest chain`);
  console.log(`Cross-chain token balance on dest chain: ${Number(bal)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/check-balance.js --network mumbai


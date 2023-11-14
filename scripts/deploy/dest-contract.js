// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {
  // polygon mumbai layerzero endpoint address
  const mumbaiLayerZeroEndpointAddress = "0xf69186dfBa60DdB133E91E9A4B5673624293d8F8";

  const crosschainTokenDEST = await hre.ethers.deployContract(
    "CrossChainToken",
    [mumbaiLayerZeroEndpointAddress]
  );

  await crosschainTokenDEST.waitForDeployment();

  console.log(`CrosschainTokenSRC deployed to Address: ${crosschainTokenDEST.target}
                 Explorer: "https://mumbai.polygonscan.com/address/${crosschainTokenDEST.target}"`);



  // npx hardhat run scripts/deploy/dest-contract --network mumbai            
  // Paste deployed contract address here for future use 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


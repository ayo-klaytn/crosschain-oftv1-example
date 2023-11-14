// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the -  
// global scope, and execute the script. 378
const hre = require("hardhat");

async function main() {
  // klaytn baobab layerzero endpoint address
  const klaytnLayerZeroEndpointAddress = "0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab";

  const crosschainTokenSRC = await hre.ethers.deployContract(
    "CrossChainToken",
    [klaytnLayerZeroEndpointAddress]
  );

  await crosschainTokenSRC.waitForDeployment();

  console.log(`CrosschainTokenSRC deployed to Address: ${crosschainTokenSRC.target}
               Explorer: "https://baobab.klaytnscope.com/account/${crosschainTokenSRC.target}?tabId=internalTx"`);
  
  // npx hardhat run scripts/deploy/src-contract --network baobab
  // Paste deployed contract address here for future use 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


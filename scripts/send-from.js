// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() { 

  // execute sendFrom function

  // const klaytnDeployedContractAddress =
  // "PASTE BAOBAB DEPLOYED CONTRACT ADDRESS HERE";

  const crosschainTokenSRC = await hre.ethers.getContractAt(
    "CrossChainToken",
    klaytnDeployedContractAddress
  );

  // instructs LayerZero to use a custom amount of gas
  // v1 adapterParams, encoded for version 1 style, and 200k gas quote
  const adapterParameter = hre.ethers.solidityPacked(
    ["uint16", "uint256"],
    [1, 200000]
  );


  // console.log(adapterParameter);

  // execute the sendFrom function
  // from: the owner of token
  // _destChainId: 10109
  // _toAddress:  insert the recipient address on the dest chain
  //  _amount: amount of tokens you want to send in Wei
  // refundAddress: address to receive gas refunds
  //  _zroPaymentAddress: specify address zero (0x0000000000000000000000000000000000000000)
  //   _adapterParams: 0x00010000000000000000000000000000000000000000000000000000000000030d40

  // PASTE THE ESTIMATE FEE VALUE HERE
  const options = { value: hre.ethers.parseUnits("65804970450786290", "wei") };

  console.log(`Sending tokens from src chain to dest chain`);
  const tx = await crosschainTokenSRC.sendFrom(
    "0x1C42aCcd92d491DB8b083Fa953B5E3D9A9E42aD5",
    10109,
    "0x1C42aCcd92d491DB8b083Fa953B5E3D9A9E42aD5",
    "10000000000000000000",
    "0x1C42aCcd92d491DB8b083Fa953B5E3D9A9E42aD5",
    "0x0000000000000000000000000000000000000000",
    adapterParameter,
    options
  );

  console.log(tx.hash);
  console.log(`Done sending tokens from src chain to dest chain`);

  // npx hardhat run scripts/send-from.js --network baobab
  // KINDLY PASTE THIS HASH IN THE SEARCH FIELD OF THE LAYERZERO SCAN: https://testnet.layerzeroscan.com/

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


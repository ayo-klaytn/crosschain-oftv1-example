# Crosschain OFTV1 Example

This repository showcases an example of a cross-chain tokens that uilizes LayerZero OFTV1 contract for transferring tokens from Klaytn Baobab to Polygon Mumbai.


# Getting Started

## Requirements

* A Hardhat project and knowledge of [how to use Hardhat](https://docs.klaytn.foundation/content/getting-started/hardhat)
* [OpenZeppelin smart contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
* [LayerZero smart contracts](https://github.com/LayerZero-Labs/solidity-examples)

To install both dependencies, you can run:

```bash
npm install @openzeppelin/contracts @layerzerolabs/solidity-examples

```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ayo-klaytn/crosschain-oftv1-example.git
```

2. Navigate into the project directory:

```bash
cd crosschain-oftv1-example
```

3. Install the dependencies:

```bash
npm install
```

4. Set your PRIVATE_KEY variable with your private key

```bash
npx hardhat vars set PRIVATE_KEY
```

> ⚠️ WARNING: Make sure to keep your PRIVAATE KEY safe and Never commit your to any public repository or share it with anyone. Exposing your private key compromises the security of your assets and can result in loss or theft. Always keep it confidential and store it securely. If you believe your private key has been exposed, take immediate action to secure your accounts.

## Deploying contract

1. To klaytn baobab (source chain)

```bash
npm run deploy-src
// or
npx hardhat run scripts/deploy/src-contract.js --network baobab
```

2. To mumbai (destination chain)

```bash
npm run deploy-dest
// or
npx hardhat run scripts/deploy/dest-contract.js --network mumbai
```

We have deployed the crosschaintokens contract on Klaytn Baobab here: [0x3c7002896d7D0604C07feB3b16ce7fA937f12724](https://baobab.klaytnscope.com/account/0x3c7002896d7D0604C07feB3b16ce7fA937f12724) and on Polygon Mumbai here: [0xC1D4ac1eE65FD2e298F6d0423905e14bA63E0428](https://mumbai.polygonscan.com/address/0xC1D4ac1eE65FD2e298F6d0423905e14bA63E0428) for this example.

## Setting Trusted remote

1. On klaytn baoabab (source chain)

```bash
npm run set-remote-src
// or
npx hardhat run scripts/set-remote-address/src.js --network baobab
```

2. On mumbai (destination chain)

```bash
npm run set-remote-dest
// or 
npx hardhat run scripts/set-remote-address/dest.js --network mumbai
```

### Run Misc
To collectively execute the **approve()**, **setMinDstGas()**, **setUseCustomAdapterParams()**, and **estimateFee()** function, run the command below:

```bash
npm run run-misc
// or 
npx hardhat run scripts/misc.js --network baobab
```

## Execute sendFrom() function
To send tokens from one chain to another using the LayerZero OFTV1, you need to run the command below:

```bash
npm run exec-sendFrom
// or
npx hardhat run scripts/send-from.js --network baobab
```

You can verify the cross-chain transaction for this example on [LayerZeroScan](https://testnet.layerzeroscan.com/10150/address/0x3c7002896d7d0604c07feb3b16ce7fa937f12724/message/10109/address/0xc1d4ac1ee65fd2e298f6d0423905e14ba63e0428/nonce/1). Also you can check the balance of the recipient address on the destination chain by running this command: 

```bash
npm run check-dest-bal
// or
npx hardhat run scripts/check-balance.js --network mumbai
```




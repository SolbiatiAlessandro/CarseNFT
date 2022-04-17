CarseNFT deployed on the testnet https://ropsten.etherscan.io/address/0xaCE4F7d01fE9B5641cBaF45a77BEc1c3a2A2b4c7#code

```
npx hardhat compile
npx hardhat run scripts/interact.js
npx hardhat run scripts/deploy.js --network ropsten
npx hardhat verify --network ropsten https://ropsten.etherscan.io/address/0xaCE4F7d01fE9B5641cBaF45a77BEc1c3a2A2b4c7 
```

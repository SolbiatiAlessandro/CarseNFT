Example repo on how to create deploy and interact with a smart contract on ETH testnet

https://ethereum.org/en/developers/tutorials/hello-world-smart-contract-fullstack/

```
npx hardhat compile
npx hardhat run scripts/interact.js
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS 'Hello World!'
```

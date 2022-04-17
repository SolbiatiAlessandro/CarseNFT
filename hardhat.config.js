/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env

module.exports = {
  solidity: "0.7.0",
	defaultNetwork: "ropsten",
	networks: {
		hardhat: {},
		ropsten: {
			url: API_URL,
			accounts: [ `0x${ PRIVATE_KEY }` ],
			gas: 2100000, 
			gasPrice: 8000000000
		}
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY
	}
};

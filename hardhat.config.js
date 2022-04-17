/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, API_URL_MAINNET, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env

module.exports = {
  solidity: "0.7.0",
	defaultNetwork: "ropsten",
	networks: {
		hardhat: {},
		ropsten: {
			url: API_URL,
			accounts: [ `0x${ PRIVATE_KEY }` ]
		},
		mainnet: {
			url: API_URL_MAINNET,
			accounts: [ `0x${ PRIVATE_KEY }` ]
		}
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY
	}
};

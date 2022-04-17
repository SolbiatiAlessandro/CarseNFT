const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/CarseNFT.sol/CarseNFT.json");
console.log(JSON.stringify(contract.abi));

//Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
	(network = "ropsten"),
	API_KEY
);

//Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//Contract
const carseNFT = new ethers.Contract(
	CONTRACT_ADDRESS,
	contract.abi,
	signer
)


/*
async function contractReadMessage() {
	const message = await helloWorldContract.message();
	console.log(message);
}

async function contractUpdateMessage() {
	const message = await helloWorldContract.message();
	console.log(message);

	const tx = await helloWorldContract.update("hello2");
	await tx.wait();
}

contractReadMessage()
*/

async function contractMint(){
	const tx = await carseNFT.mint(signer.getAddress(), "QmPmxpTxVQVWX88hFdNYghUkmufPNZWpxZShusdffLNFBH");
	await tx.wait();
}

async function getURI(){
	const id = 1;
	const uri = await carseNFT.tokenURI(1);
	console.log(uri);
}

async function getTokens(){
	const res = await carseNFT.allTokens();
	console.log(res);
}

contractMint();

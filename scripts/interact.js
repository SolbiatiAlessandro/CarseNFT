const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
console.log(JSON.stringify(contract.abi));

//Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(
	(network = "ropsten"),
	API_KEY
);

//Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//Contract
const helloWorldContract = new ethers.Contract(
	CONTRACT_ADDRESS,
	contract.abi,
	signer
)


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

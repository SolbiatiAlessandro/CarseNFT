async function main(){
	const Contract = await ethers.getContractFactory("CarseNFT");

	// this is the constructor of the smart contract
	const contract = await Contract.deploy();
	console.log(`deployed at ${ contract.address }`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
	console.log(error);
	process.exit(1);
});

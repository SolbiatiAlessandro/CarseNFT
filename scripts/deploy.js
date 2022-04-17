async function main(){
	const HelloWorld = await ethers.getContractFactory("HelloWorld");

	// this is the constructor of the smart contract
	const hello_world = await HelloWorld.deploy("Hello World");
	console.log(`deployed at ${ hello_world.address }`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
	console.log(error);
	process.exit(1);
});

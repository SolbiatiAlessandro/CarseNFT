pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CarseNFT is ERC721 {
	using Counters for Counters.Counter;
	Counters.Counter private _tokenIDs;
	mapping(string => uint8) hash_already_taken;
	mapping(uint256 => string) tokenID_to_hash;


	constructor() public ERC721("CarseNFT", "carse") {}

	function mint(address recipient, string memory hash)
		public
		returns (uint256)

	{
		require(hash_already_taken[hash] != 1);
		hash_already_taken[hash] = 1;
		_tokenIDs.increment();
		uint256 newItemID = _tokenIDs.current();

		_mint(recipient, newItemID);

		return newItemID;
	}

	/**
	* [0, allTokens()] is an array of all the minted tokens IDs 
	*/
	function allTokens() public returns (uint256) {
		return _tokenIDs.current();
	}

	function tokenURI(uint256 tokenID) public view virtual override returns (string memory) {
		require(_exists(tokenID), "ERC721Metadata: URI query for nonexistent token");

		string memory hash = tokenID_to_hash[tokenID];
    string memory baseURI = _baseURI();
    return string(abi.encodePacked(baseURI, hash));
   }

	function _baseURI() internal view virtual override returns (string memory) {
			return "ipfs://";
	}
}

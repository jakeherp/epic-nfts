const main = async () => {
  // compile contract and generate artefacts
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  // hardhat creates local Ethereum network for this contract
  const nftContract = await nftContractFactory.deploy();
  // wait for contract to be mined and deployed to local blockchain
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

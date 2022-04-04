const { ethers } = require("hardhat");


async function main() {
    const [deployer] = await ethers.getSigners();


    const MultiSend = await ethers.getContractFactory("MultiSend");
    const multiSend = await MultiSend.deploy();
    console.log("contract address", multiSend.address)
}

main()
    .then(() => { process.exit(0) })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
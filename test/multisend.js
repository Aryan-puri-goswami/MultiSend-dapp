const { expect } = require("chai");

describe('Multisend Contract', () => {
    it("we can pass addresses as strings", async () => {
        Token = await ethers.getContractFactory("Token");
        [owner, addr1, addr2, addr3] = await ethers.getSigners();
        console.log("The type of address is : ", typeof (addr1));
        multiSend = await Token.deploy();

        addresses = [addr1, addr2, addr3];
        await multiSend.sendToUsers(addresses, ethers.utils.parseEther("2.0"), { value: ethers.utils.parseEther("6.0") })
        addr1Balance = ethers.utils.formatEther(Number(await addr1.getBalance()));
        addr2Balance = ethers.utils.formatEther(Number(await addr2.getBalance()));
        addr3Balance = ethers.utils.formatEther(Number(await addr3.getBalance()));

        expect(addr1Balance).to.equal(2);
        expect(addr2Balance).to.equal(2);
        expect(addr3Balance).to.equal(2);
    })
})
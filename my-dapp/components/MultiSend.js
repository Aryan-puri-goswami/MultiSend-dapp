
// Note :  this code's private key and addresses are only compatible with a ganache workshop named as "Dapp-projects"

import { useState, useEffect } from 'react'
import { ethers, Wallet } from 'ethers'



function MultiSend() {
    const MultiSend = require("../artifacts/contracts/MultiSend.sol/MultiSend.json")
    const [web3Api, setWeb3Api] = useState({ provider: null, wallet: null, contract: null, addresses: null })

    useEffect(() => {
        const contractAddress = "0x783F5db19798f052dBB70704F6e2043056e717a4";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const privateKey = "45792b7033de7455c40802182f1e7a4a1460f05bfc124dc72f4a1c6568940ead";
        const wallet = new ethers.Wallet(privateKey, provider)
        const ABI = MultiSend['abi'];
        const contract = new ethers.Contract(contractAddress, ABI, wallet);
        const addresses = ["0x96A550541a70ABf0E73794c73A180A55deE72C29", '0x01361C34909Bf94D2da3C7e40aE7a74Fa3Af4700', '0x82E6e6De43531A746F60dd02360738493d3EAD59']
        setWeb3Api({ provider, wallet, contract, addresses })
    }, [])

    async function runner() {
        const { contract, addresses } = web3Api;
        const tx = await contract.sendToUsers(addresses, ethers.utils.parseEther("0.001"), { value: ethers.utils.parseEther("0.003") })
        await tx.wait();
        console.log("Ho gaya lekin success hua hai ya error aaya hai usko tum log dekh lo")
    }

    return (
        <div>
            hello
            <button onClick={runner} >click me to make transaction happen</button>
        </div>
    )
}

export default MultiSend
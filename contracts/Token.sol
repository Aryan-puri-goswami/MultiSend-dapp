// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

import "hardhat/console.sol";

contract Token {
    string public name = "Hardhat Token";
    string public symbol = "HHT";
    uint256 public totalSupply = 1000;

    address public owner;

    mapping(address => uint256) balances;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        console.log(
            " **Sender Balance is : %s tokens **",
            balances[msg.sender]
        );
        console.log(
            " **Sender is sending %s tokens to %s address **",
            amount,
            to
        );
        require(balances[msg.sender] >= amount, "Not enough Tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}

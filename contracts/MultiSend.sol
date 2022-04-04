// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.10;

contract MultiSend {
    function sendToUsers(address[] memory kk, uint256 amount) external payable {
        require(msg.value >= amount * (kk.length), "not enough value sent");
        for (uint256 i = 0; i < kk.length; i++) {
            payable(kk[i]).transfer(amount);
        }
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./IMyService.sol";

contract MyService is IMyService {

    mapping(address => uint256) private _balance;


    function borrow(uint256 amount) public {
        _balance[msg.sender] = _balance[msg.sender] + amount;
    }

    function payoff(uint256 amount) public {
        _balance[msg.sender] = _balance[msg.sender] - amount;
    }

    function balance() public view returns (uint256){
        return _balance[msg.sender];
    }

}

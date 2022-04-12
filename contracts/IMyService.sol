// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IMyService {

    function borrow(uint256 amount) external;

    function payoff(uint256 amount) external;

    function balance() external view returns (uint256);

}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract COLINERC20 is ERC20 {
    uint public _totalSupply;

    constructor() ERC20("COLIN", "COL") {
        _mint(msg.sender, 100000 * (10 ** uint256(decimals())));
        _totalSupply = 1000000 * (10 ** uint256(decimals()));
    }
}
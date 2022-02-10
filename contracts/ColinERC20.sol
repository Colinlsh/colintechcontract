// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract COLINERC20 is ERC20 {
    uint public _totalSupply;

    constructor() ERC20("COLIN", "COL") {
        _mint(msg.sender, 100000 * (10 ** uint256(decimals())));
        _totalSupply = 1000000 * (10 ** uint256(decimals()));
    }

    function mint(address to, uint256 amount) public {
        require(_totalSupply <= 1000000 * (10 ** uint256(decimals())));
        _mint(to, amount);
    }
}
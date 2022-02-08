/* eslint-disable no-undef */
const ColinERC20 = artifacts.require("ColinERC20");

module.exports = function (deployer) {
  deployer.deploy(ColinERC20);
};

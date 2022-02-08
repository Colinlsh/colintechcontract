/* eslint-disable no-undef */
const ColinERC721 = artifacts.require("ColinERC721");

module.exports = function (deployer) {
  deployer.deploy(ColinERC721);
};

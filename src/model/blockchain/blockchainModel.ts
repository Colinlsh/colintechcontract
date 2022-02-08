import Web3 from "web3";
import { Contract } from "web3-eth-contract";

export interface web3Model {
  web3: Web3;
  contract: Contract;
}

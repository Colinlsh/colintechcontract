import Web3 from "web3";
import { web3Model } from "../model/blockchain/blockchainModel";
import ColinSol from "./build/COLIN.json";
import { AbiItem } from "web3-utils";

const getWeb3Model = async (): Promise<web3Model> => {
  const _web3 = new Web3(
    new Web3.providers.WebsocketProvider(process.env.REACT_APP_INFURA_API_URL!)
  );
  let id = await _web3.eth.net.getId();
  let deployedNetwork = (ColinSol.networks as any)[id];
  let _contract = new _web3.eth.Contract(
    ColinSol.abi as AbiItem[],
    deployedNetwork
  );

  return { web3: _web3, contract: _contract } as web3Model;
};

export { getWeb3Model };

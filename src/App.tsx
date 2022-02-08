import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { getWeb3Model } from "./blockchain/utils";
import { web3Model } from "./model/blockchain/blockchainModel";

function App() {
  const [account, setAccount] = useState("");
  const [totalSupply, setTotalSupply] = useState<number>();
  const [web3Model, setWeb3Model] = useState<web3Model>();
  const [web3, setWeb3] = useState<any>();
  const [address, setAddress] = useState<any>();

  const init = async () => {
    let model = await getWeb3Model();
    setWeb3Model(model);
    console.log(model);
  };

  // const connectWalletHandler = async () => {
  //   /* check if MetaMask is installed */
  //   if (
  //     typeof window !== "undefined" &&
  //     typeof (window as any).ethereum !== "undefined"
  //   ) {
  //     try {
  //       /* request wallet connect */
  //       await (window as any).ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       /* create web3 instance and set to state var */
  //       const web3 = new Web3((window as any).ethereum);
  //       /* set web3 instance */
  //       setWeb3(web3);
  //       /* get list of accounts */
  //       const accounts = await web3.eth.getAccounts();
  //       /* set Account 1 to React state var */
  //       setAddress(accounts[0]);

  //       /* create local contract copy */
  //       // const vm = vendingMachineContract(web3);
  //       // setVmContract(vm);
  //     } catch (err) {
  //       // setError(err.message);
  //     }
  //   } else {
  //     // meta mask is not installed
  //     console.log("Please install MetaMask");
  //   }
  // };

  useEffect(() => {
    init();
  }, []);

  const hahaOnClick = async () => {
    // setTotalSupply();
    let x = await web3Model?.contract?.methods.totalSupply().call();
    console.log(x);
  };

  const handleMintClick = async (address: string) => {
    // setTotalSupply();
    let x = await web3Model?.contract?.methods.safeMint(address).send();
    console.log(x);
  };

  const handleConnectWallet = async () => {
    let accounts = await web3Model?.web3.eth.getAccounts();
    // const accounts = await (window as any).ethereum.request({
    //   method: "eth_requestAccounts",
    // });
    console.log(accounts);
    setAccount(accounts![0]);
  };

  return (
    <div>
      Your account is: {account}
      <div>
        <button onClick={handleConnectWallet}>connect wallet</button>
        <button onClick={hahaOnClick}>haha</button>
        <button onClick={() => handleMintClick(account)}>mint</button>
        Total supply: {totalSupply}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import styles from "./CreateLock.module.css";
import Header from "./Header";
import Panel from "./Panel";
import "./ModifyLock.css";
import {
  useContract,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";

export default function CreateLock() {
  const _beneficiaryWallet = "0x6Be05c9CF590E6d74e4DE07Cf4c3c888Cc02C1Bc";
  const _tokenList = ["0x0bc5e3Dc1BB0Dfd8f882f6D4691362389b9FDfC2"];
  const _percentList = [50];
  const { contract } = useContract(
    "0xE48cf22548F334876858eCdD462E587dA696C77b"
  );
  const { contract: tokenContract } = useContract(
    "0x0bc5e3Dc1BB0Dfd8f882f6D4691362389b9FDfC2"
  );
  const { mutateAsync: register } = useContractWrite(contract, "register");
  const { mutateAsync: increaseAllowance, isLoading: isLoading2 } =
    useContractWrite(tokenContract, "increaseAllowance");
  const { data: duration, isLoading } = useContractRead(contract, "s_duration");

  const registerUser = async () => {
    try {
      const approval = await increaseAllowance([
        "0xE48cf22548F334876858eCdD462E587dA696C77b",
        1e40,
      ]);
      const data = await register([
        _beneficiaryWallet,
        _tokenList,
        _percentList,
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div className="dashboard-container">
      <Header />
      <div className={styles.PCL}>
        <Panel />
        <div className="overview-container">
          <h1>Create Lock</h1>
          <div className="ov-details">
            <div className={styles.formHeading}>Basic Details</div>
            <div className="modifylock_values-container">
              <div className="modifylock_values">
                {/* <h1>44</h1> */}
                <h2>Enter Wallet Address for recovery:</h2>
                <input
                  className="modifylock-inputs"
                  placeholder="Wallet Address"
                />
              </div>
              <div className="modifylock_values">
                {/* <h1>44</h1> */}
                <h2>Set the default Inactivity Duration:</h2>
                <input
                  className="modifylock-inputs"
                  placeholder="Wallet Address"
                />
              </div>
              <div className="modifylock_values">
                {/* <h1>44</h1> */}
                <h2>Set the secondary Inactivity Duration:</h2>
                <input
                  className="modifylock-inputs"
                  placeholder="Wallet Address"
                />
              </div>
              <div className="modifylock_values">
                {/* <h1>44</h1> */}
                <h2>
                  Notification Email Address{" "}
                  <span style={{ color: "grey" }}>(optional)</span>
                </h2>
                <input
                  className="modifylock-inputs"
                  placeholder="Wallet Address"
                />
              </div>
            </div>
            <div className={styles.tableHeading}>Coin Recovery Settings</div>
            <table className={styles.createLockTable}>
              <tr className={styles.tableHead}>
                <td className={styles.tableData}>Coin</td>
                <td className={styles.tableData}>Nubmer of coins you own</td>
                <td className={styles.tableData}>
                  Current Value{" "}
                  <span style={{ color: "grey" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#40;converted to
                    USDT&#41;
                  </span>
                </td>
                <td className={styles.tableData}>Percentage to be recovered</td>
              </tr>
              <tr>
                <td className={styles.tableData}>All</td>
                <td className={styles.tableData}>-</td>
                <td className={styles.tableData}>&#36;20,000</td>
                <td className={styles.tableData}>-</td>
              </tr>
              <tr>
                <td className={styles.tableData}>BTC</td>
                <td className={styles.tableData}>0.36</td>
                <td className={styles.tableData}>&#36;6152.3</td>
                <td className={styles.tableData}>-</td>
              </tr>
              <tr>
                <td className={styles.tableData}>ETH</td>
                <td className={styles.tableData}>5.1</td>
                <td className={styles.tableData}>&#36;6466</td>
                <td className={styles.tableData}>-</td>
              </tr>
              <tr>
                <td className={styles.tableData}>Doge</td>
                <td className={styles.tableData}>10K</td>
                <td className={styles.tableData}>&#36;999</td>
                <td className={styles.tableData}>-</td>
              </tr>
              <tr>
                <td className={styles.tableData}>MAT</td>
                <td className={styles.tableData}>10K</td>
                <td className={styles.tableData}>&#36;990</td>
                <td className={styles.tableData}>-</td>
              </tr>
            </table>
            <button onClick={registerUser}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

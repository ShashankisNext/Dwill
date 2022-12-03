import React from "react";
import styles from "./CreateLock.module.css";
import Header from "./Header";
import Panel from "./Panel";
export default function CreateLock() {
  return (
    <div className={styles.createLockDashbord}>
        <Header />
        <div className={styles.PCL}>
            <Panel />
            <div className={styles.createLock}>
            </div>
            <div className="overview-container">
            <h1>Create Lock</h1>
            <div className={styles.formHeading}>Basic Details</div>
            <div className="ov-details">
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
                    <h2>Set the default Inactivity Duration</h2>
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
                Coin Recovery Settings
                <table className={styles.createLockTable}>
                <tr className={styles.tableHead}>
                    <td className={styles.tableData}>Coin</td>
                    <td className={styles.tableData}>Nubmer of coins you own</td>
                    <td className={styles.tableData}>
                    Current Value &#40; converted to USDT &#41;{" "}
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
            </div>
            </div>
        </div>
    </div>
  );
}

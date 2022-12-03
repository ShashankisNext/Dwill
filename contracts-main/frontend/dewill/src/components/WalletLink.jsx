import React from "react";
import Header2 from "./Header2";
import "./WalletLink.css";
import wallet1 from "../assets/Wallets/wallet1.svg";
import wallet2 from "../assets/Wallets/wallet2.svg";
import wallet3 from "../assets/Wallets/wallet3.svg";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";


// import wallet4 from "../assets/Wallets/wallet4.svg";
// import wallet5 from "../assets/Wallets/wallet5.svg";
// import wallet6 from "../assets/Wallets/wallet6.svg";
// import wallet7 from "../assets/Wallets/wallet7.svg";
// import wallet8 from "../assets/Wallets/wallet8.svg";

const WalletLink =(props)=>{
    // props.address = useAddress();
    return(
        <div className="wallet-container">
            <Header2/>
            <div className="wallet-main-container">
                <div className="t1">
                <h1>Link Your Wallets</h1>
                <h1>and exchange</h1>
                </div>
                <div className="t2">
                <h3>
                We are not getting any of your data. Just add all of your wallets so that we can keep track of all your latest portfolio and proceeds as follows. 
                </h3>
                </div>
            <div className="icon-grid1">

                <div className="grid">
                {/* <a className="wallet_img_link" href=""><img src={wallet1} alt="" /></a>
                <a className="wallet_img_link" href=""><img src={wallet2} alt="" /></a>
                <a className="wallet_img_link" href=""><img src={wallet3} alt="" /></a> */}
                {/* <a className="wallet_img_link" href=""><img src={wallet4} alt="" /></a> */}
                </div>

                <div className="grid">
                {/* <a className="wallet_img_link" href=""><img src={wallet5} alt="" /></a>
                <a className="wallet_img_link" href=""><img src={wallet6} alt="" /></a>
                <a className="wallet_img_link" href=""><img src={wallet7} alt="" /></a>
                <a className="wallet_img_link" href=""><img src={wallet8} alt="" /></a> */}
                </div>
            </div>
            <div>
            <ConnectWallet />
                {/* <button className="link_button">CONTINUE</button> */}
            </div>   
            </div>
        </div>
    
    );
};

export default WalletLink;
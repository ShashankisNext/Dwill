import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import CreateLock from "./components/CreateLock";
import ModifyLock from "./components/ModifyLock";
import WalletLink from "./components/WalletLink";
import "./styles/Home.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
  var address;
  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/linkwallets"
            element={<WalletLink address={address} />}
          />
          <Route path="/dashboard" element={<Dashboard address={address} />} />
          <Route path="/dashboard/createlock" element={<CreateLock />} />
          <Route path="/dashboard/modifylock" element={<ModifyLock />} />
        </Routes>
      </div>
    </ThirdwebProvider>
  );
}

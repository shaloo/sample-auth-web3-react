import CoinbaseWalletCard from "../components/connectorCards/CoinbaseWalletCard";
import GnosisSafeCard from "../components/connectorCards/GnosisSafeCard";
import ArcanaConnectCard from "../components/connectorCards/ArcanaConnectCard";
import MetaMaskCard from "../components/connectorCards/MetaMaskCard";
import NetworkCard from "../components/connectorCards/NetworkCard";
import WalletConnectCard from "../components/connectorCards/WalletConnectCard";
import ProviderExample from "../components/ProviderExample";

export default function Home() {
  return (
    <>
      <ProviderExample />
      <div
        style={{ display: "flex", flexFlow: "wrap", fontFamily: "sans-serif" }}
      >
        <ArcanaConnectCard />
        <MetaMaskCard />
        <WalletConnectCard />
        <CoinbaseWalletCard />
        <NetworkCard />
        <GnosisSafeCard />
      </div>
    </>
  );
}

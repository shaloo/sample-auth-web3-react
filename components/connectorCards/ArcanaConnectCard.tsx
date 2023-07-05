import { useEffect, useState } from "react";

//import { MAINNET_CHAINS } from "../Chain";
import { hooks, arcanaConnect } from "../../connectors/ArcanaWallet";
import { Accounts } from "../Accounts";
import { Card } from "../Card";
import { Chain } from "../Chain";
import { ConnectWithSelect } from "../ConnectWithSelect";
import { Status } from "../Status";

//const CHAIN_IDS = Object.keys(MAINNET_CHAINS).map(Number);

const {
  useChainId,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function ArcanaConnectCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const error = useError();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  //const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    arcanaConnect.connectEagerly().catch((error) => {
      console.debug("Failed to connect eagerly to arcanaConnect", error);
    });
  }, [chainId, accounts, error, isActivating, isActive, provider, ENSNames]);

  return (
    <Card>
      <div>
        <b>Arcana Social Login</b>
        <Status isActivating={isActivating} error={error} isActive={isActive} />
        <div style={{ marginBottom: "1rem" }} />
        <Chain chainId={chainId} />
        <Accounts accounts={accounts} provider={provider} ENSNames={ENSNames} />
      </div>
      <div style={{ marginBottom: "1rem" }} />
      <ConnectWithSelect
        connector={arcanaConnect}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
    </Card>
  );
}

import { initializeConnector } from "@web3-react/core";
import { ArcanaConnector } from "@arcana/auth-web3-react";
import { AuthProvider } from "@arcana/auth";
import { URLS } from "../chains";

const auth = new AuthProvider(
  //"xar_test_d24f70cd300823953dfa2a7f5b7c7c113356b1ad",
  "xar_live_d7c88d9b033d100e4200d21a5c4897b896e60063",
  {
    theme: "dark",
    connectOptions: {
      compact: true
    }
  }
);
export const [arcanaConnect, hooks] = initializeConnector<ArcanaConnector>(
  (actions) =>
    new ArcanaConnector(auth, {
      actions,
    })
);

arcanaConnect.setLogin({ provider: "google" });

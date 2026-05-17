import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "forgepilot-mantle",
  name: "ForgePilot Mantle",
  chainId: 5000,
  chainHex: "0x1388",
  chainName: "Mantle Mainnet",
  rpcUrl: "https://rpc.mantle.xyz",
  explorerBaseUrl: "https://mantlescan.xyz",
  contracts: {
    signalRegistry: "0x20e312df00BffD3A4270e4efa0d396d2d0AFE603",
    thesisRegistry: "0x4Fe350F97542911DDc95ceb09510f61de05068d9",
    adminController: "0x0f36aa1064Cf545eb435E33e4F23dec098362E7C"
  },
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "Critical finding: yield-bearing asset accounting can drift on withdraw",
      summary:
        "ForgePilot Mantle detected a path where a vault treats a value-accruing asset as a fixed-balance ERC-20 during withdraw accounting.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Merchant Moe",
      destinationProtocol: "Merchant Moe",
      sourceAsset: "mETH",
      destinationAsset: "cmETH"
    },
    {
      id: "20000000-0000-0000-0000-000000000002",
      headline: "Warning: pause controller is missing from emergency execution path",
      summary:
        "The simulation path revealed that one emergency unwind function bypasses the expected pause gate.",
      confidence: 81,
      severity: "medium",
      sourceProtocol: "Agni Finance",
      destinationProtocol: "Ondo route",
      sourceAsset: "USDe",
      destinationAsset: "USDY"
    }
  ],
  defaultAlerts: [
    {
      id: "fp-alert-1",
      channel: "discord",
      condition: "Escalate all critical findings above 85 confidence to the audit room.",
      isEnabled: true
    },
    {
      id: "fp-alert-2",
      channel: "email",
      condition: "Notify when a simulation bypasses the expected pause controller.",
      isEnabled: true
    }
  ]
};

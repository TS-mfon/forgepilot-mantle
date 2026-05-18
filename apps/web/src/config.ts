import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  slug: "forgepilot-mantle",
  name: "ForgePilot Mantle",
  tag: "AI DevTools",
  tagline: "Mantle-native audit and simulation copilot",
  valueProp:
    "ForgePilot Mantle helps builders understand Mantle-specific contract risks, route assumptions, and yield-bearing asset edge cases before they ship broken integrations.",
  launchLabel: "Open Audit Workbench",
  docsLabel: "Read Rulepack Docs",
  aiAwakeningFit:
    "ForgePilot fits AI Awakening by turning Mantle-specific developer knowledge into a usable AI assistant that produces explainable findings and stores high-value review outcomes on-chain.",
  dashboardTitle: "Audit and simulation workbench",
  dashboardSubtitle:
    "Review live findings, select the issue that matters most, then publish the reviewer thesis that explains what the builder should fix next.",
  guideIntro:
    "Use ForgePilot like a Mantle security desk: inspect the top finding, understand the protocol implication, and commit the audit thesis for public review.",
  docsIntro:
    "ForgePilot is purpose-built for Mantle builders who need more than a generic Solidity lint pass. It explains why the issue matters in the context of yield-bearing assets and agent execution.",
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
  theme: {
    bg: "#091019",
    surface: "rgba(11, 20, 34, 0.82)",
    surfaceStrong: "rgba(13, 24, 40, 0.98)",
    line: "rgba(107, 179, 255, 0.16)",
    text: "#edf5ff",
    muted: "#9cb0c7",
    accent: "#78c6ff",
    accentSoft: "rgba(120, 198, 255, 0.12)",
    accentStrong: "#5ae1ff",
    glowA: "rgba(120, 198, 255, 0.18)",
    glowB: "rgba(90, 225, 255, 0.14)",
    gradient: "linear-gradient(135deg, #78c6ff 0%, #5ae1ff 100%)"
  },
  heroStats: [
    { label: "Critical findings", value: "2" },
    { label: "Simulation routes", value: "9" },
    { label: "Rulepacks applied", value: "14" }
  ],
  metrics: [
    {
      label: "Top issue class",
      value: "Accounting drift",
      detail: "Value-accruing asset assumptions are the leading flagged problem"
    },
    {
      label: "Pause path health",
      value: "1 warning",
      detail: "One simulated path bypasses the expected emergency gate"
    },
    {
      label: "Review posture",
      value: "Builder-ready",
      detail: "Findings are presented for rapid builder action"
    }
  ],
  guideSteps: [
    {
      title: "Open the findings workbench",
      body: "The dashboard highlights the highest-value Mantle-specific contract issue first."
    },
    {
      title: "Review the route context",
      body: "Compare the source and destination protocol assumptions to understand why the issue matters in a live Mantle environment."
    },
    {
      title: "Publish the reviewer thesis",
      body: "Write the corrective thesis to Mantle so the review has a verifiable public trail."
    }
  ],
  docs: [
    {
      id: "problem",
      title: "Problem",
      body:
        "Generic security tooling is too shallow for Mantle-native integrations. Builders need help with yield-bearing semantics, route assumptions, and agent-trigger surfaces.",
      bullets: [
        "Generic lint tools miss Mantle-specific context.",
        "Judges reward technical clarity and ecosystem fit.",
        "Audit UX matters just as much as findings quality in a hackathon demo."
      ]
    },
    {
      id: "architecture",
      title: "Architecture",
      body:
        "ForgePilot combines Mantle-aware findings, on-chain review persistence, and health-aware frontend behavior so a builder can still inspect and record findings even during backend trouble.",
      bullets: [
        "SignalRegistry stores surfaced findings.",
        "ThesisRegistry stores reviewer guidance.",
        "UI health handling prevents system outages from collapsing the demo."
      ]
    },
    {
      id: "awakening",
      title: "AI Awakening Fit",
      body:
        "This is an AI DevTools entry with direct Mantle contribution: it helps every other Mantle team ship safer, more ecosystem-aware contracts.",
      bullets: [
        "Findings are explainable.",
        "Builder actions are actionable.",
        "Mantle-specific context is the core moat."
      ]
    }
  ],
  starterCards: [
    {
      id: "accounting-fix",
      title: "Load the accounting drift finding",
      summary:
        "Open a ready-made reviewer thesis for a yield-bearing asset withdraw path that treats a value-accruing token like a static ERC-20.",
      cta: "Use reviewer thesis",
      signalId: "20000000-0000-0000-0000-000000000001",
      thesis:
        "The withdraw path assumes a fixed-balance token model while the underlying asset accrues value. The builder should reconcile accounting around share price or wrapped balance semantics before mainnet deployment."
    },
    {
      id: "pause-path",
      title: "Load the emergency gate warning",
      summary:
        "Prepare a Mantle-specific reviewer note for the path that bypasses the expected pause controller.",
      cta: "Use pause-path thesis",
      signalId: "20000000-0000-0000-0000-000000000002",
      thesis:
        "The emergency execution path is inconsistent with the main pause controller. That gap should be closed before deployment because it weakens the expected operator safety model during volatile conditions."
    }
  ],
  fallbackSignals: [
    {
      id: "20000000-0000-0000-0000-000000000001",
      headline: "Critical finding: yield-bearing asset accounting can drift on withdraw",
      summary:
        "ForgePilot Mantle detected a path where a vault treats a value-accruing asset as a fixed-balance ERC-20 during withdraw accounting.",
      confidence: 87,
      severity: "high",
      sourceProtocol: "Vault accounting",
      destinationProtocol: "Withdraw path",
      sourceAsset: "mETH",
      destinationAsset: "cmETH",
      createdAt: "2026-05-18T09:02:00.000Z"
    },
    {
      id: "20000000-0000-0000-0000-000000000002",
      headline: "Warning: pause controller is missing from emergency execution path",
      summary:
        "The simulation path revealed that one emergency unwind function bypasses the expected pause gate.",
      confidence: 81,
      severity: "medium",
      sourceProtocol: "Pause controller",
      destinationProtocol: "Emergency unwind",
      sourceAsset: "admin role",
      destinationAsset: "execution gate",
      createdAt: "2026-05-18T08:26:00.000Z"
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

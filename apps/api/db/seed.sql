insert into users (id, email, role)
values
  ('00000000-0000-0000-0000-000000000001', 'ops@forgepilot_mantle.ai', 'ops_admin'),
  ('00000000-0000-0000-0000-000000000002', 'analyst@forgepilot_mantle.ai', 'analyst')
on conflict (email) do nothing;

insert into wallet_entities (id, address, label, category, conviction)
values
  ('10000000-0000-0000-0000-000000000001', '0x9c9a4a45b0f6b9c4d6e54c8ddf8457085e8f4a11', 'Sticky Yield Cohort 01', 'smart-lp', 92),
  ('10000000-0000-0000-0000-000000000002', '0x5cb912f87af0f4607d3fa10a1d7d00f7d8b96cc2', 'Treasury Pattern Wallet', 'treasury', 76)
on conflict (address) do nothing;

insert into rotation_signals (
  id,
  headline,
  summary,
  confidence,
  severity,
  source_protocol,
  destination_protocol,
  source_asset,
  destination_asset,
  evidence_hash
)
values
  (
    '20000000-0000-0000-0000-000000000001',
    'Critical finding: yield-bearing asset accounting can drift on withdraw',
    'ForgePilot Mantle detected a path where a vault treats a value-accruing asset as a fixed-balance ERC-20 during withdraw accounting.',
    87,
    'high',
    'Merchant Moe',
    'Merchant Moe',
    'mETH',
    'cmETH',
    '0xaaa111'
  ),
  (
    '20000000-0000-0000-0000-000000000002',
    'Warning: pause controller is missing from emergency execution path',
    'The simulation path revealed that one emergency unwind function bypasses the expected pause gate.',
    81,
    'medium',
    'Agni Finance',
    'Ondo route',
    'USDe',
    'USDY',
    '0xbbb222'
  )
on conflict (id) do nothing;

insert into signal_evidence (id, signal_id, evidence_type, title, body)
values
  (
    '30000000-0000-0000-0000-000000000001',
    '20000000-0000-0000-0000-000000000001',
    'wallet-cluster',
    '5-wallet LP cohort overlap',
    'Five correlated LP addresses exited mETH/MNT within 14 minutes and rebuilt into cmETH/USDe with similar range width.'
  ),
  (
    '30000000-0000-0000-0000-000000000002',
    '20000000-0000-0000-0000-000000000001',
    'yield-shift',
    'Defensive yield repositioning',
    'The cohort reduced directional MNT beta while preserving yield exposure through cmETH and stable routing.'
  ),
  (
    '30000000-0000-0000-0000-000000000003',
    '20000000-0000-0000-0000-000000000002',
    'treasury-pattern',
    'Low-turnover wallet behavior',
    'Observed addresses historically rotate capital only during mandate or yield-thesis changes and maintain longer holding periods.'
  )
on conflict (id) do nothing;

insert into starter_workflows (id, title, summary, cta, thesis, signal_id)
values
  (
    '50000000-0000-0000-0000-000000000001',
    'Open the yield-accounting critical finding',
    'Jump into the highest-severity seeded finding and trace how ForgePilot explains the accounting drift risk to builders.',
    'Open critical finding',
    'The contract path treats a value-accruing asset as if it were a static-balance token during withdraw accounting. That mismatch can underflow user expectations and break Mantle-native yield vault assumptions.',
    '20000000-0000-0000-0000-000000000001'
  ),
  (
    '50000000-0000-0000-0000-000000000002',
    'Load the emergency pause review',
    'Open the seeded simulation note showing how an unwind path bypasses the intended pause controller.',
    'Load simulation note',
    'The pause architecture is incomplete because one emergency path still executes outside the expected gate. The right fix is to unify the emergency execution surface under the same controller.',
    '20000000-0000-0000-0000-000000000002'
  )
on conflict (id) do nothing;

insert into alert_rules (id, user_id, channel, condition, is_enabled)
values
  (
    '60000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000002',
    'discord',
    'Notify when a critical finding hits severity high with confidence above 85.',
    true
  ),
  (
    '60000000-0000-0000-0000-000000000002',
    '00000000-0000-0000-0000-000000000002',
    'telegram',
    'Alert when a simulation exposes an execution path without pause coverage.',
    true
  )
on conflict (id) do nothing;

insert into audit_logs (id, actor_email, action, target_type, target_id, reason)
values
  (
    '40000000-0000-0000-0000-000000000001',
    'ops@forgepilot_mantle.ai',
    'seeded_dataset',
    'system',
    'forgepilot_mantle',
    'Initial reference implementation bootstrap'
  )
on conflict (id) do nothing;

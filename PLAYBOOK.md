> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is the playbook for pre-run 13.** It is not Wednesday. It is not Tuesday. It is not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, or 12. It does not start a machine and it does not arm one.

# Playbook

Who does what, and the gates before each machine may start. The plan is [plan/PLAN.md](plan/PLAN.md), the locks are [locks/LOCKED.md](locks/LOCKED.md), and the go files are the three GO pages. This page does not override them.

## Oversight

TN10 ops oversees this rehearsal end to end: Mini, the desk (Build), and the bot. TN10 only. Never mainnet. Do not edit the Tuesday repo, the Wednesday repo, or pre-run 1's to 12's go files. Do not write `REVIEW_CLOSED`.

For pre-run 13 the operator does not paste. On 2026-11-12 he asked TN10 ops for covenant pre-runs under congestion and competition, pre-run 11 and then 12, 13 or more as needed (voice, 09:06 and 09:09 Brussels time), and at 10:04 in chat said "Keep exploring". That is the arm. The agents start their runners once the gates are facts.

## Start gates

1. **Mini node synced.** Existing TN10 kaspad, existing data, no wipe. `isSynced` true, DAA moving.
2. **Desk node synced.** Existing private TN10 kaspad, existing data, loopback only, started with `pwsh`. No wipe. Synced, DAA moving.
3. **No other runner.** No earlier runner, waiter, or counter on any machine. Lane above the abort line. The desk's private candidate list is present and not empty (`HELD candidates-missing` otherwise).
4. **Hashes.** `hashes/SIXTEEN.md` with sixteen rows and an On origin line, from [tools/sixteen](tools/sixteen/README.md).
5. **Open.** The desk pushes `logs/PRE-RUN-OPEN.md`. Mini then pushes `logs/MINI-ARMED.md`.
6. **Counter, families, senders.** The desk runner starts the counter on its private node and waits for its start line (`HELD counter-down` otherwise). Then the genesis from the bundle that wrote `hashes/SIXTEEN.md`, the families, and the payment steps.

## Who does what

| Who | Role | What not to do |
|---|---|---|
| **Desk (Build)** | Sends the sixteen families (five fee tiers, one path, one build) and runs our own heavy lane (pre-run 13, the operator's OK, calibrated first). No payments. Its private TN10 node counts what the chain accepted (lock line (iv)) and its probe reads the mempool (xii). Publishes `hashes/SIXTEEN.md`, `logs/PRE-RUN-OPEN.md`, `counts/desk/` per step, `counts/chain/TIMELINE.md` and `MEMPOOL.md` after the tail, and `logs/METHOD.md`. | Do not stop or wipe the desk node. No Windows PowerShell 5.1, no `KaspaPublicNode`, no miner, no devnet. No 8- or 32-family publisher. No second runner. Never restart the runner mid-run. No payment sender. No heavy lane other than the runner's own lane process. |
| **Mini** | Second chain read on its own node. Does not send, mine, or hold a key. Publishes `logs/MINI-ARMED.md`, then `counts/mini/` when the matching desk file is on origin. | Do not wipe. Do not repeat the desk's head as Mini's. |
| **Bot (TN10 ops)** | Sends payments in the HOLD-4 minute only, on a synced public kaspad that is not one the desk kept, or publishes a legal `NO SEND`. | Do not send in any other step. One waiter. No local node. |

## Status when this repo was opened

Not a gate. Read on 2026-11-12 between 12:00Z and 12:20Z. This is our own TN10 testing; status lines are what we read on our own machines.

- Mini: existing TN10 kaspad 2.1.0 up, no wipe. Pre-run 12's Mini runner ended at 2026-11-12T11:56:32Z.
- Desk: existing private TN10 kaspad 2.1.0 up with `pwsh`, no wipe. It is not stopped for this pre-run. No pre-run 12 runner or child is running.
- Box: no local TN10 node. No bot waiter running.
- Lane: keys 1–15 got a fresh genesis coin from the lane at 2026-11-12T12:13:14Z (15 transactions, none rejected; amounts and ids in private notes). Lane after that: 5,465 coins, 174,118 usable tKAS, above the abort line. The payment key's 8,400 coins (about 185,900 tKAS) fund our heavy lane only.
- Our heavy lane's calibration, 2026-11-12T12:14:00Z: one lane transaction (one 27 tKAS payment-key coin → 0.0375 tKAS to our sink key + change), built as the lane builds it and submitted on the desk's private node. Our SDK: storage mass 266,670, transaction mass 266,670, fee 26,667,000 sompi (0.26667 tKAS) at 100. Read back from the desk mempool 4 ms after the submit: node storage mass 266,670 (0.00 percent off), compute mass 2,036, fee 26,667,000 sompi, fee rate 100.00 sompi/gram. Within 1 percent and inside 99–101, so the lane may run.
- The sink key is new and holds nothing but the lane's outputs (keys 17–31 of the old key file hold small coins of earlier work and are not used).
- Known risks, not fixed mid-run:
  - Our lane slows other TN10 users' transactions at fees up to about its own rate while it runs. The operator OK'd that; the steps are bounded and the lane steps down to zero.
  - The outside fee-100 heavy stream may also be there; the probe counts it apart from ours.
  - About one heavy transaction fits a block, so the lane's landing rate tops out near 600 a minute shared with outside heavy; above about N = 12 extra chains add ready mass, not landings.
  - Each family is a chain of hops, so a hop waits for its parent whatever its fee.
  - The probe reads the desk node's mempool and template, not a miner's.
  - Only two unique public kaspads answered in every check so far, and the desk keeps both, so the bot is expected to file `NO SEND no-free-node`.

## Offline rehearsal, recorded before `PRE-RUN-OPEN`

Two rehearsals on the desk, against a local bare origin. The real pre-run 13 desk runner, counter, read-only mempool probe and our heavy-lane process ran with the rehearsal family sender, the stand-in genesis submit and pre-run 9's stand-in node. The heavy lane submitted only to the stand-in payment-key node; none of its rehearsal transactions reached a real node. Short times: BASE 1 minute, each lane segment 1 minute, RETURN 2 minutes, a 2-minute tail. The probe read the real desk node (read-only), so its columns show the real mempool at that time and none of our rehearsal transactions.

Rehearsal A (p13-a), 2026-11-12 12:19:18Z to 12:39:59Z (Brussels 13:19 to 13:40). Runner exit 0, every step file, `TIMELINE`, `MEMPOOL` and `METHOD` published. Lane: 956 submits, 956 accepted by the stand-in, 0 rejected, clean `LANE_END` on STOP. Three faults found and fixed before rehearsal B:

- `logs/lane-minute.log` labelled each minute with the N of the next minute (the flush used the new minute's value). Fixed: each minute now carries the N and rate the lane read at its first tick.
- The lane reached only about 14 chains and about 140 submits a minute at N = 40 and 60: it awaited each submit in turn, and the rehearsal's stand-in answers in about 400 ms. Fixed: each tick's submits now go out together and their answers are read in slot order.
- Two runner lines printed the literal text `pre-run ${RUN_NO}` (a plain string, not a template). Fixed.

Rehearsal B (p13-b), 2026-11-12 12:47:22Z to 13:08:24Z (Brussels 13:47 to 14:08), with the fixed runner and lane (the files in [tools/desk](tools/desk/README.md)). Runner exit 0.

- `FEE_SPLIT` verified on the submit rows: floor 100, r110 110, r126 126, r150 150, r200 200, every tier on the desk path. No payment sender was started (`senders=0`).
- Lane timeline as planned: `LANE_SET` N = 0, 10, 20, 40, 60, 40, 20, 0, then 40 at 126, then 0 for the drain, each set 1 second before its minute. `lane-minute.log` carried the right N per minute.
- Lane: 3,500 submits, 3,500 accepted by the stand-in, 0 rejected, 0 chains lost, 60 payment-key coins taken (one per chain); about 590 submits a minute at N = 40 and 60, under the 600 cap. `LANE_END` came on STOP with nothing pending. Stand-in fees 974.15 tKAS and 131.25 tKAS parked; the stand-in is not the network, so those are not spend.
- BASE, HOLD-1 (the climb), HOLD-2 (the descent), HOLD-3 (126), the pinned HOLD-4 minute (13:02Z) and RETURN published as `OBSERVATION`, each with the lane N and rate per minute, our heavy and the outside heavy in separate columns, the chain table and the probe table. No `${` or earlier pre-run label left in the files. No rehearsal process was left running.
- Not exercised by either rehearsal: the lane's pause on more than N + 2 of our entries in the mempool, and the node-side drift check, since the probe reads the real node and the rehearsal lane wrote only to the stand-in. Both stay as live guards.

## Status after the live run

AFTER_PLACEHOLDER

## When something breaks

Append a worked fix to [locks/LOCKED.md](locks/LOCKED.md) in the form that page shows, and a repair line to `logs/FIXES.md`. If the run dies before RETURN, write `logs/FAILED.md`, stop every runner, waiter, and counter, and do not resume. The next attempt is a new repo that starts from this repo's lock file.

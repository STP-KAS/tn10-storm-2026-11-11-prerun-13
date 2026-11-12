> **Experimental. We are just trying this.** [Disclaimer](DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value.
>
> **This is a pre-run. Pre-run 13.** It is not the Wednesday run. It is not the Tuesday run. It is not pre-run 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, or 12. A read does not start a runner.

# tn10-storm-2026-11-11-prerun-13

> **Result (after the run).** Pre-run 13 ran BASE through the pinned HOLD-4 minute and is marked **FAILED before RETURN** ([logs/FAILED.md](logs/FAILED.md)): the family lane's coin count went under its abort line 1.5 minutes before RETURN closed, with about 109,500 usable tKAS left (change fragments, not a shortage). What we observed: [logs/LESSONS.md](logs/LESSONS.md). Our heavy lane slowed other TN10 users' low-fee transactions while it ran; see the [public statement](PLAYBOOK.md#public-statement).

**Pre-run 13 of the Wednesday neuron.** The neuron stays [tn10-storm-2026-11-11](https://github.com/STP-KAS/tn10-storm-2026-11-11). This repo does not edit that repo, does not write `REVIEW_CLOSED`, and does not set or move a clock for it. [tn10-storm-2026-11-10](https://github.com/STP-KAS/tn10-storm-2026-11-10) (Tuesday) is not edited from here either.

> **Our own testing.** This is our own Kaspa Testnet-10 testing, run on our own machines and nodes. What these pages report is what we observed in this run; it is not a claim of how TN10 or Kaspa behave in general.

**Where this starts.** Pre-runs 1 to 4 failed and are closed. Pre-runs 5 to 12 finished through RETURN and are closed. The index of all of them is the [pre-run 2 README](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-2#pre-runs-in-this-rehearsal); the cumulative findings are in [tn-master](https://github.com/STP-KAS/tn-master). This repo starts from [pre-run 12's locks/LOCKED.md](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-12/blob/3538ec1/locks/LOCKED.md) at commit 3538ec1, copied here as [locks/LOCKED.md](locks/LOCKED.md), with a pre-run 13 section added at the end.

## What pre-run 12 left open

In [pre-run 12](https://github.com/STP-KAS/tn10-storm-2026-11-11-prerun-12) (five fee tiers 100 / 110 / 126 / 150 / 200, no payments of ours) the tiers moved together when another sender's heavy fee-100 stream was absent (11:02–11:11Z, about 48.5–49.5 hops per family per minute in every tier), and separated by fee when it was there (floor about 76 percent of that pace, r200 about 92 percent). That outside stream was light and came and went, and we do not control it. We did not attribute it to anyone.

## What pre-run 13 tries

The question: **with a known, controlled heavy same-fee competitor at ready count N, how do covenant chains in the five fee tiers slow down as N rises and recover as it falls? Does a heavy lane at 126 change the picture? How does it compare with pre-run 12's outside-stream readings?**

> **We ran our own heavy lane on TN10.** In this pre-run we submit our own bounded stream of heavy transactions (about 267,000 storage mass each, 100 sompi/gram, one step at 126) from our own test coins, to repeat the competition we observed from another sender in pre-runs 10 to 12. While it runs it also slows other TN10 users' low-fee transactions (anything paying up to about the lane's rate). It is calibrated on the node's own mass, capped by ready count, by a per-minute submit cap and by a spend cap, stepped down to zero at the end, and every step is in this repo. The operator gave the explicit OK for it. This is our own testing; tKAS has no value.

- **Families as in pre-run 12.** Five fee tiers on the desk's private node, one build, one builder: floor (families 1–4) 100, r110 (5–7) 110, r126 (8–10) 126, r150 (11–13) 150, r200 (14–16) 200 sompi/gram. No payment load of ours.
- **Our own heavy lane.** N parallel chains from the payment key's coins. Each lane transaction has one input and two plain outputs: 0.0375 tKAS to a dedicated sink key of ours and the change back into the chain. A chain's next transaction goes out only after its previous one has left the mempool, so the lane holds at most N transactions in the mempool and all of them are ready.
- **Calibrated on the node first.** One lane transaction was submitted and read back from the desk mempool before anything else (see [PLAYBOOK.md](PLAYBOOK.md)). The node's storage mass matched our SDK's figure exactly and the node's fee rate read 100.00. Every lane entry the lane sees in the mempool is checked against that again.
- **Steps on one timeline, 12 whole minutes each:** BASE (N = 0, control), HOLD-1 = the climb N = 10, 20, 40, 60, HOLD-2 = the descent N = 40, 20, 0, HOLD-3 = N = 40 at 126, then N = 0 (the drain) through the pinned HOLD-4 minute and RETURN (12 minutes), and the counter's 5-minute tail. All are `OBSERVATION`. The HOLD file names are kept so the bot's and Mini's gates read as before.
- **Guards.** Pause when the probe reads more than N + 2 lane entries for three samples in a row; at most 600 lane submits a minute; no lane submit while the desk mempool is at or over 90,000 entries or its ready mass is over 45 blocks; the lane stops at 16,000 tKAS of fees or 20,000 tKAS moved; the family lane's abort line (2,500 coins, 18,000 usable tKAS) still stops everything.
- **Ours and theirs apart.** The probe and the desk counter record our heavy separately from outside heavy, per minute.

All locked lines from earlier pre-runs stay, except where the pre-run 13 block in [locks/LOCKED.md](locks/LOCKED.md) says what changes and why.

## Machines

| Machine | Go file | First sentence |
|---|---|---|
| Desk | [GO-DESK.md](GO-DESK.md) | DESK. I send and count on pre-run 13. This is not Wednesday. |
| Mini | [GO-MINI.md](GO-MINI.md) | MINI. I count pre-run 13 as the second read. I do not send. This is not Wednesday. |
| Bot | [GO-BOT.md](GO-BOT.md) | GROKBOT. I send payments on the pre-run 13 HOLD-4 only. I do not count. This is not Wednesday. |

The operator does not paste. On 2026-11-12 he asked TN10 ops for covenant pre-runs under congestion and competition, pre-run 11 and then 12, 13 or more as needed (voice, 09:06 and 09:09 Brussels time), and at 10:04 in chat said "Keep exploring". For our own heavy lane he gave the explicit OK in chat at about 11:08 and 11:10 Brussels time ("Do whatever you think is needed", then "No need to keep it short. Tn is for testing. Test at will"). That is the arm for pre-run 13 and its heavy lane. The agents start the runners once the gates are facts. [GO.md](GO.md) is the map, [PLAYBOOK.md](PLAYBOOK.md) has the roles and gates, and [plan/PLAN.md](plan/PLAN.md) has the targets and the reasons.

## Gates, in order

No clock. Each gate is a fact read from a node or from origin.

1. Mini's TN10 node is up from its own data, synced, DAA moving.
2. The desk's private TN10 node is up from its own data (PowerShell 7), synced, DAA moving.
3. No other runner or waiter is up. The lane is above the abort line (2,500 coins, 18,000 usable tKAS). The desk's private candidate list is present.
4. `hashes/SIXTEEN.md` is on origin: sixteen rows and an On origin line, from the sixteen-family path.
5. The desk pushes `logs/PRE-RUN-OPEN.md`; Mini pushes `logs/MINI-ARMED.md`.
6. The probe and the desk counter are up. Then the families, our heavy lane at N = 0, and the observation steps on the lane's timeline.

Before the open: the lane's calibration on the node (one transaction) passed.

## What a decent result is

- `hashes/SIXTEEN.md` on origin before the first family submit.
- Every step file on origin, each with hops per minute for all five tiers, the lane's N and rate, our heavy and the outside heavy apart, and the probe's table for the same minutes.
- `counts/chain/TIMELINE.md` and `counts/chain/MEMPOOL.md` after the tail.
- An answer to the question, or an honest "not answered" with the reason.
- A HOLD-4 desk file, a bot file or a legal `NO SEND`, and a Mini file.
- The lane's spend and its leftovers (the parked sink outputs) stated in the write-up.
- No id, txid, key, address, host, or port in this repo.

A miss stays in this repo. A next attempt is a new repo and starts from this repo's lock file.

**Part of [tn-master](https://github.com/STP-KAS/tn-master).** The rule is [docs/NEURON.md](https://github.com/STP-KAS/tn-master/blob/main/docs/NEURON.md). This pre-run is its own row. It is not row 47.

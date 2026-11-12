> **Experimental. We are just trying this.** [Disclaimer](../DISCLAIMER.md) · Kaspa Testnet-10 only; tKAS has no value. Pre-run 13.
>
> **Our own testing.** This is our own Kaspa Testnet-10 testing, run on our own machines and nodes. What this page reports is what we observed in this run; it is not a claim of how TN10 or Kaspa behave in general.

# Lessons, pre-run 13

> Written by the operator after the desk runner stopped. **The run is marked FAILED before RETURN** ([FAILED.md](FAILED.md), 15:17:53Z): the family lane's coin count went under its abort line about 1.5 minutes before RETURN would have closed. Everything up to and including the pinned HOLD-4 minute is in published step files. RETURN, `counts/chain/TIMELINE.md`, `counts/chain/MEMPOOL.md` and the runner's own METHOD were not published by the runner; the drain figures below come from the desk's local counter and probe logs, read after the stop, and are marked as such. [METHOD.md](METHOD.md) was written by the operator for the same reason.
>
> Hops are the desk counter's read of the desk's private TN10 node. Mempool, ready-set and template figures are the read-only probe on the same node, every 20 s, one median per minute. They are one node's view, not a network-wide figure. The probe's template is the desk node's own `getBlockTemplate`, never submitted.

## The question

With a known, controlled heavy competitor of ours at ready count N, how do covenant chains in five fee tiers slow down as N rises and recover as it falls, and does a lane at 126 change that? Families as in pre-run 12: floor (families 1–4) 100, r110 (5–7) 110, r126 (8–10) 126, r150 (11–13) 150, r200 (14–16) 200 sompi/gram as built, one build, one builder, all on the desk's private node, no payment load of ours. Our heavy lane: N chains of one-input, two-output transactions (0.0375 tKAS to our own sink key plus change), 266,670 storage mass each, 100 sompi/gram (126 in HOLD-3), calibrated on the node first.

**A clean experiment, by luck.** The outside heavy fee-100 stream of pre-runs 10–12 was absent for the whole run: the probe read no outside transaction over 200,000 mass in any minute from 13:12Z to 15:17Z. Our lane was the only heavy competitor, so the N steps below are the whole dial.

> **Public statement: our lane slowed other TN10 users' low-fee transactions.** While our lane was at N = 40 or more (13:50–14:25Z and 14:50–15:01Z, about 60 minutes), other users' transactions at or under 100 sompi/gram in the desk mempool rose from a median of 0–1 to 11–17 (at most 34); in the same minutes the node's priority fee estimate read 144–244 instead of 100. Other traffic landed on this node fell by about 4 percent (median about 3,030 a minute against about 3,170 with the lane at 0). We did this on purpose, with the operator's OK, on a test network, in bounded steps, and stepped the lane down to zero at the end. It is our own testing; tKAS has no value.

## What happened

| Step | Whole minutes | Lane N @ rate | Desk file on origin (UTC), commit | Mini file, commit |
|---|---:|---|---|---|
| BASE | 12 (13:14–13:25Z) | 0 @ 100 | 13:26:22Z, 1528472 | a6c94ae |
| HOLD-1, the climb | 48 (13:26–14:13Z) | 10, 20, 40, 60 @ 100, 12 min each | 14:14:22Z, 7c62987 | a9e8779 |
| HOLD-2, the descent | 36 (14:14–14:49Z) | 40, 20, 0 @ 100 | 14:50:22Z, 4376389 | 2eee15a |
| HOLD-3 | 12 (14:50–15:01Z) | 40 @ 126 | 15:02:22Z, 789cd2f | fa77a8f |
| HOLD-4 (pinned 15:06Z) | 1 | 0 (drain) | 15:07:22Z, 5ed6318 | 4a40f57 |
| RETURN, the drain | 10 of 12 read locally (15:07–15:16Z) | 0 | not published (FAILED 15:17:53Z, ed6574f) | not published (Mini stopped on FAILED at 15:18:17Z) |

Every published minute was clean, no repair, the runner was not restarted, nothing was killed by us, and the desk node was not stopped. The bot filed `NO SEND no-free-node` for HOLD-4 (55f8ffe, on origin 15:08:17Z), late: see the quirks below.

**Why the run stopped.** The runner reads the family lane (key 0) every minute and fails the run when it holds fewer than 2,500 coins over 3 tKAS or under 18,000 usable tKAS. At 15:17:53Z it read under 2,500 coins. Read-only after the stop (15:20:54Z): 2,487 coins over 3 tKAS but 109,513 usable tKAS, and key 0 as a whole held 54,992 coins and 219,195 tKAS, 52,505 of those coins at 3 tKAS or less. The family sender's own pool count fell from 5,311 (13:12Z) to 2,361 (15:17Z), fastest in the minutes when the families ran at full speed (14:38–14:49Z and 15:02–15:17Z). So this was the coin-count line tripping on fragmentation, not a shortage of tKAS. Pre-run 12's pool count went up over its run (5,357 to 5,480); we did not establish why the two runs differ. The guard did what it was written to do; the operator's 15:20 Brussels note (budget is not a limit from pre-run 14) came after the trip and was not applied to this live run.

Totals, desk counter, start to stop: family hops floor 14,504, r110 11,173, r126 11,817, r150 12,774, r200 14,396 (64,664 in all); our heavy landed 40,830; our payments 0. Every family hop that was submitted OK and every lane transaction landed before the stop.

## The lane

Lane log, per step (all accepted on the desk node, 0 rejected, 0 orphan retries, 0 chains lost, the pause and hold guards never tripped, no stop, the node fee rate on every lane entry read exactly 100.00 at 100 and 126.00 at 126, storage mass never off the calibration):

| Lane step | Accepted | Our heavy in mempool, median | Our heavy landed a minute, median |
|---|---:|---:|---:|
| N = 10 @ 100 | 3,405 | 6 | 284 |
| N = 20 @ 100, up | 5,288 | 16 | 433 |
| N = 40 @ 100, up | 5,990 | 35 | 492 |
| N = 60 @ 100 | 7,039 | 44 | 582 |
| N = 40 @ 100, down | 6,855 | 29 | 576 |
| N = 20 @ 100, down | 5,766 | 15 | 483 |
| N = 40 @ 126 | 6,477 | 34 | 540 |

Ten more went out in the last second of BASE (see the quirks). In all 40,830. `LANE_END` 15:17:54Z: 546 payment-key coins taken, nothing pending.

**N = 60 was not really 60.** The lane holds one transaction per chain, but it is capped at 600 submits a minute, and only one 266,670-mass transaction fits a 500,000-mass block. At N = 60 it landed a median of 582 a minute, close to that ceiling, and held a median of 44 in the mempool, not 60. N = 60 and N = 40 gave nearly the same family rates.

## Hops per family, per lane step

Floor has four families, the others three, so every figure is **per family**: the step's sum divided by the family count, then per minute. In brackets: share of the same tier's BASE rate (the lane at 0, no outside heavy, ready mass 1.2–1.8 blocks; BASE is a clean reference this time).

| Lane step (whole minutes) | Floor | R110 | R126 | R150 | R200 | R200 / floor | Ready mass, blocks, median (range) | Fee estimate, priority, median |
|---|---:|---:|---:|---:|---:|---:|---|---:|
| N = 0, BASE (12) | 45.8 (100%) | 46.2 (100%) | 47.0 (100%) | 47.3 (100%) | 47.8 (100%) | 1.05 | 1.3 (1.2–1.8) | 100 |
| N = 10 (12) | 44.2 (97%) | 43.8 (95%) | 45.0 (96%) | 46.5 (98%) | 48.5 (101%) | 1.10 | 4.6 (3.5–5.7) | 100 |
| N = 20, up (12) | 31.2 (68%) | 31.8 (69%) | 33.0 (70%) | 36.0 (76%) | 41.0 (86%) | 1.31 | 10.3 (8.2–12.3) | 117 |
| N = 40, up (12) | 5.9 (13%) | 8.7 (19%) | 11.5 (24%) | 15.3 (32%) | 24.5 (51%) | 4.17 | 23.7 (22.2–26.1) | 156 |
| N = 60 (12) | 5.0 (11%) | 7.0 (15%) | 9.8 (21%) | 14.0 (30%) | 24.2 (51%) | 4.83 | 30.4 (20.8–38.8) | 174 |
| N = 40, down (12) | 11.8 (26%) | 12.8 (28%) | 16.5 (35%) | 23.2 (49%) | 31.8 (67%) | 2.71 | 20.5 (16.1–28.1) | 158 |
| N = 20, down (12) | 37.2 (81%) | 37.5 (81%) | 39.0 (83%) | 41.8 (88%) | 44.8 (94%) | 1.20 | 9.7 (7.9–11.3) | 131 |
| N = 0, down (12) | 47.4 (104%) | 47.5 (103%) | 48.5 (103%) | 48.3 (102%) | 48.5 (101%) | 1.02 | 1.3 (0.4–1.5) | 100 |
| **N = 40 @ 126** (12) | 3.9 (8%) | 5.8 (13%) | 6.8 (15%) | 12.3 (26%) | 19.7 (41%) | 5.08 | 25.7 (21.6–27.2) | 224 |
| N = 0, HOLD-4 (1) | 45.5 (99%) | 45.7 (99%) | 45.7 (97%) | 46.7 (99%) | 46.3 (97%) | 1.02 | 2.1 | 100 |
| N = 0, drain 15:02–15:06Z (5), local logs | 46.0 | 46.3 | 46.9 | 47.3 | 47.1 | 1.02 | 1.3 | 100 |
| N = 0, RETURN 15:08–15:16Z (9), local logs | 47.7 | 47.8 | 47.9 | 48.2 | 48.0 | 1.01 | 1.3 | 100 |

Figures are medians of per-minute per-family rates for the published steps and sums over minutes for the two local-log rows. Medians and step sums differ by under 1 hop.

Per-family rates against the ready mass, all 109 published whole minutes (share of BASE):

| Ready mass, blocks | Minutes | Floor | R110 | R126 | R150 | R200 | Lane steps in the bin |
|---|---:|---:|---:|---:|---:|---:|---|
| 0–3 | 25 | 47.0 (103%) | 46.7 (101%) | 47.3 (101%) | 47.7 (101%) | 48.0 (100%) | N = 0 |
| 3–6 | 12 | 44.2 (97%) | 43.8 (95%) | 45.0 (96%) | 46.5 (98%) | 48.5 (101%) | N = 10 |
| 6–9 | 5 | 32.2 (70%) | 32.3 (70%) | 33.0 (70%) | 36.3 (77%) | 40.7 (85%) | N = 20 |
| 9–12 | 18 | 36.9 (81%) | 36.7 (79%) | 39.0 (83%) | 40.5 (86%) | 44.2 (92%) | N = 20 |
| 12–20 | 7 | 12.8 (28%) | 15.7 (34%) | 17.7 (38%) | 25.0 (53%) | 32.3 (68%) | N = 20, 40 |
| 20–30 | 36 | 5.9 (13%) | 8.0 (17%) | 10.8 (23%) | 15.0 (32%) | 24.3 (51%) | N = 40, 60, 40 @ 126 |
| over 30 | 6 | 4.8 (10%) | 5.5 (12%) | 8.8 (19%) | 12.3 (26%) | 21.5 (45%) | N = 60 |

Rank correlation (Spearman, 109 minutes) of hops per family with the ready mass: −0.94 for floor, r110, r126 and r150, −0.91 for r200; with N: −0.89 to −0.93.

Median submit-to-landing per hop, ms (p95 in brackets), from the step files:

| Step | Floor | R110 | R126 | R150 | R200 |
|---|---|---|---|---|---|
| BASE | 1,104 (1,680) | 1,094 (1,658) | 1,087 (1,643) | 1,067 (1,607) | 1,060 (1,553) |
| HOLD-1, climb | 1,341 (9,559) | 1,369 (8,837) | 1,351 (7,109) | 1,328 (5,426) | 1,271 (3,506) |
| HOLD-2, descent | 1,222 (4,302) | 1,230 (4,097) | 1,208 (3,698) | 1,191 (2,885) | 1,153 (2,300) |
| HOLD-3, N = 40 @ 126 | 9,330 (42,274) | 7,859 (27,132) | 5,342 (20,275) | 3,527 (12,758) | 2,256 (6,243) |
| HOLD-4 | 1,189 (1,646) | 1,107 (1,646) | 1,116 (1,671) | 1,092 (1,650) | 1,083 (1,616) |

## The node's fee rate for our family hops was not the rate we built

Read on the desk's private node at 15:14:49Z, read-only (one `getMempoolEntries`, our family hops classed by our own submit log, no id printed). Every family hop in the mempool had a storage mass of about 40,400–43,800 and a compute mass of 9,123, and paid exactly 13,046 × its tier rate: 1,304,600 / 1,435,060 / 1,643,796 / 1,956,900 / 2,609,200 sompi. The node divides the fee by the largest of storage mass, compute mass and normalized transient mass (`normalized_max` in `consensus/core/src/mass/mod.rs`, rusty-kaspa tag v2.1.0; storage cofactor 1 with both block limits at 500,000), and that ratio is what the selector weights (`calculated_feerate`, `consensus/core/src/tx.rs`). So the node's fee rates for our hops were:

| Tier, as built | Fee, sompi | Node fee rate, sompi/gram (read) | Weight against a heavy at 100, (rate/100)^3 | Against a heavy at 126 |
|---|---:|---:|---:|---:|
| floor 100 | 1,304,600 | 31.8–32.3 | 1 / 31 | 1 / 61 |
| r110 | 1,435,060 | 34.9–35.6 | 1 / 23 | 1 / 46 |
| r126 | 1,643,796 | 37.6–40.6 | 1 / 16 | 1 / 32 |
| r150 | 1,956,900 | 47.8–48.2 | 1 / 9.2 | 1 / 18 |
| r200 | 2,609,200 | 64.5–64.6 | 1 / 3.7 | 1 / 7.4 |

Our builder's 13,046 is its fee mass; it matches the larger of compute and normalized transient mass and leaves the storage mass of the hop's covenant outputs out. That is our reading of the numbers, not of the builder's code. The relay minimum fee in v2.1.0 is checked on compute and transient mass, not storage (pre-run 12's source check), so the hops were relayed and accepted, at about a third of the rate we thought. **Every one of our tiers sat below our heavy lane in the selector's eyes, and below pre-runs 10–12's outside heavy stream too.** What pre-runs 9–12 called "100 against 100" was about 32 against 100.

## Templates at N = 40 and over were mostly one heavy transaction

The desk node's own template, medians per lane step:

| Lane step | Template txs | Template storage mass | Family hops in the template | Family hops ready |
|---|---:|---:|---:|---:|
| N = 0 (BASE, descent, HOLD-4) | 12 | 475,000–492,000 | 10.5–11 | 16 |
| N = 10 | 6 | 471,850 | 5 | 16 |
| N = 20 | 2.5–3 | about 308,000 | 1 | 15.5–16 |
| N = 40 and 60 @ 100 | 2–3.5 | 266,800–307,300 | 0 | 16 |
| N = 40 @ 126 | 3 | 267,300 | 0 | 16 |

With the lane at 40 or more, the template's median was one of our heavy transactions plus one or two others, about 267,000–307,000 of the 500,000 storage-mass limit, while 16 family hops (about 40,500 each, so 5 more would have fitted) were ready. Our reading of v2.1.0's in-place sampler (`sample_inplace` and `SampleMassTracker` in `mining/src/mempool/model/frontier.rs`): it draws candidates by weight, one per transaction regardless of its mass; it keeps drawing past 1.2 × the block mass only until 8 draws in a row fail to fit (`MAX_NULL_ATTEMPTS = 8`) or the gap is under 25,000. With 35–45 heavy candidates each 3.7 to 61 times our hops' weight, almost every draw after the first is a heavy one that does not fit, the 8 misses come fast, and the hops are rarely drawn at all. That is a reading next to one node's template, not a measurement of miners' templates.

## What this seems to show

- **The slowdown followed N in steps, not a line.** At N = 10 every tier held 95–101 percent of BASE. At N = 20 floor fell to 68 percent and r200 to 86. At N = 40 floor fell to 13 percent and r200 to 51. N = 60 added little (11 and 51 percent), because the lane could not really hold 60 (see above). The break came between N = 10 and N = 40, between about 5 and 24 blocks of ready mass; with the hops' real rates of 32–65 against a heavy at 100, the ready mass of our own heavy was what set the pace.
- **The fee tiers separated much more than in pre-run 12.** R200 over floor per family: 1.05 at N = 0, 1.10 at N = 10, 1.31 at N = 20, 4.2 at N = 40, 4.8 at N = 60, 5.1 at N = 40 @ 126. The selection weight between the two tiers is 8.2 by the node's rates. In pre-run 12, against a light outside stream, it was about 1.27. With heavier competition, the fee mattered more, but no tier as built held its BASE rate at N = 40.
- **The 126 lane hurt every tier more, the cheapest most.** Against N = 40 at 100 (up and down together), N = 40 at 126 cut floor from a median of about 9 to 3.9 hops per family a minute (about −55 percent), r200 from about 28 to 19.7 (about −30 percent), at about the same ready mass (25.7 blocks against 20.5–23.7). Floor's median landing time went to 9.3 s, p95 42 s. The node's fee estimate rose to 200–244. Raising the competitor's rate by 26 percent doubled its weight against every tier, which in our reading is the fee-escalation lever: a defender who outbids the flood makes the flood pay more to keep the same share.
- **Recovery was quick and almost symmetric, with a small lag.** On the way down, N = 40 gave floor 26 percent (13 on the way up) and N = 20 gave 81 percent (68 on the way up); the ready mass was a little lower on the way down at the same N. When the lane went to 0 the families were back at their BASE rate in the first whole minute (15:02Z: floor 184 hops, 28 lane transactions still landing in that minute, then none). The 32 lane transactions still waiting at the switch cleared in under a minute. In pre-run 11 the outside stream's backlog of about 1,000 took about 11 minutes.
- **Every hop landed.** The fee and the competitor changed how long a hop waited, not whether it landed, as in pre-runs 9–12. The p95 landing time is the cost: 6 s for r200 and 42 s for floor at N = 40 @ 126.
- **Pre-runs 9–12's reading of "same fee" needs a correction.** The light-vs-heavy argument there assumed our floor hops were at 100. They were at about 32 by the node's own fee rate. The tables of those runs stand; the reading of why does not, and tn-master's findings say so.

## Every minute: hops per family, the lane and the template

Hops per family: desk counter, by accepting chain block time, divided by 4 for floor and 3 for the others. Probe columns: medians of that minute's samples on the desk node. "Ready mass" is the mass of mempool transactions with no parent in the mempool, in blocks of 500,000. The fee estimate is the desk node's `getFeeEstimate` priority bucket, read only; no sender read it. Only published whole minutes are listed; the drain minutes after 15:06Z are in the table above, from local logs.

| Minute (UTC) | Step | Lane N @ rate | Floor | R110 | R126 | R150 | R200 | Ready mass, blocks | Our heavy in mempool | Our heavy landed | Family hops in the template | Template txs | Template storage mass | Fee estimate, priority |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 13:14 | BASE | 0 @ 100 | 44.0 | 45.7 | 44.3 | 46.0 | 46.0 | 1.20 | 0 | 0 | 10 | 11 | 456,975 | 100.0 |
| 13:15 | BASE | 0 @ 100 | 47.8 | 49.3 | 49.7 | 48.3 | 50.3 | 1.57 | 0 | 0 | 10 | 13 | 494,959 | 100.0 |
| 13:16 | BASE | 0 @ 100 | 45.5 | 45.7 | 45.3 | 48.0 | 47.0 | 1.23 | 0 | 0 | 11 | 12 | 493,635 | 100.0 |
| 13:17 | BASE | 0 @ 100 | 45.8 | 46.3 | 47.0 | 49.0 | 48.3 | 1.34 | 0 | 0 | 13 | 12 | 493,477 | 100.0 |
| 13:18 | BASE | 0 @ 100 | 43.8 | 46.0 | 45.0 | 44.7 | 47.7 | 1.33 | 0 | 0 | 10 | 12 | 491,575 | 100.0 |
| 13:19 | BASE | 0 @ 100 | 47.5 | 45.7 | 47.0 | 46.3 | 46.0 | 1.76 | 0 | 0 | 12 | 12 | 456,317 | 100.0 |
| 13:20 | BASE | 0 @ 100 | 46.8 | 48.3 | 46.7 | 44.3 | 46.3 | 1.33 | 0 | 0 | 12 | 12 | 495,825 | 100.0 |
| 13:21 | BASE | 0 @ 100 | 45.8 | 46.7 | 47.7 | 48.3 | 48.7 | 1.40 | 0 | 0 | 8 | 12 | 458,210 | 100.0 |
| 13:22 | BASE | 0 @ 100 | 50.0 | 48.0 | 48.7 | 48.7 | 48.7 | 1.54 | 0 | 0 | 9 | 13 | 452,959 | 100.0 |
| 13:23 | BASE | 0 @ 100 | 45.2 | 45.3 | 46.3 | 45.7 | 45.7 | 1.35 | 0 | 0 | 12 | 12 | 454,703 | 100.0 |
| 13:24 | BASE | 0 @ 100 | 44.5 | 44.7 | 47.3 | 46.7 | 48.0 | 1.33 | 0 | 0 | 5 | 12 | 204,899 | 100.0 |
| 13:25 | BASE | 0 @ 100 | 50.2 | 49.7 | 51.3 | 50.0 | 49.7 | 1.32 | 0 | 0 | 12 | 12 | 493,996 | 100.0 |
| 13:26 | HOLD-1 climb | 10 @ 100 | 41.5 | 41.0 | 41.3 | 44.3 | 44.0 | 4.96 | 7 | 275 | 3 | 7 | 471,376 | 100.0 |
| 13:27 | HOLD-1 climb | 10 @ 100 | 41.5 | 42.7 | 44.0 | 47.0 | 49.3 | 5.17 | 8 | 284 | 0 | 24 | 266,688 | 103.3 |
| 13:28 | HOLD-1 climb | 10 @ 100 | 43.2 | 44.0 | 45.0 | 46.3 | 48.7 | 5.70 | 9 | 281 | 3 | 5 | 432,404 | 100.0 |
| 13:29 | HOLD-1 climb | 10 @ 100 | 43.8 | 43.7 | 43.3 | 46.7 | 47.3 | 4.73 | 7 | 281 | 5 | 7 | 474,231 | 100.0 |
| 13:30 | HOLD-1 climb | 10 @ 100 | 46.5 | 45.7 | 45.3 | 47.3 | 49.7 | 4.51 | 6 | 285 | 5 | 6 | 472,324 | 100.0 |
| 13:31 | HOLD-1 climb | 10 @ 100 | 44.8 | 43.7 | 46.3 | 45.3 | 47.3 | 4.52 | 6 | 282 | 5 | 6 | 470,376 | 100.0 |
| 13:32 | HOLD-1 climb | 10 @ 100 | 46.0 | 45.0 | 45.3 | 47.3 | 48.7 | 4.66 | 5 | 283 | 2 | 4 | 462,631 | 100.0 |
| 13:33 | HOLD-1 climb | 10 @ 100 | 45.5 | 45.3 | 46.7 | 47.7 | 49.7 | 5.06 | 7 | 288 | 5 | 6 | 475,192 | 100.0 |
| 13:34 | HOLD-1 climb | 10 @ 100 | 46.0 | 45.7 | 46.7 | 48.0 | 51.7 | 4.19 | 5 | 293 | 5 | 6 | 472,727 | 100.0 |
| 13:35 | HOLD-1 climb | 10 @ 100 | 43.5 | 43.3 | 44.7 | 45.0 | 47.3 | 3.46 | 4 | 280 | 5 | 6 | 473,374 | 100.0 |
| 13:36 | HOLD-1 climb | 10 @ 100 | 43.5 | 43.7 | 45.0 | 46.0 | 47.7 | 3.46 | 4 | 288 | 4 | 6 | 474,172 | 100.0 |
| 13:37 | HOLD-1 climb | 10 @ 100 | 45.2 | 44.3 | 44.7 | 46.0 | 48.3 | 4.11 | 6 | 289 | 5 | 6 | 470,916 | 100.0 |
| 13:38 | HOLD-1 climb | 20 @ 100 | 37.5 | 36.3 | 40.0 | 40.7 | 45.3 | 9.54 | 15 | 471 | 1 | 2 | 307,909 | 111.1 |
| 13:39 | HOLD-1 climb | 20 @ 100 | 37.0 | 36.0 | 39.3 | 39.3 | 45.0 | 11.32 | 18 | 481 | 0 | 1 | 266,678 | 119.3 |
| 13:40 | HOLD-1 climb | 20 @ 100 | 36.8 | 36.7 | 37.7 | 39.0 | 44.0 | 9.87 | 16 | 473 | 1 | 2 | 307,108 | 116.8 |
| 13:41 | HOLD-1 climb | 20 @ 100 | 32.2 | 34.3 | 37.7 | 39.3 | 44.7 | 9.47 | 16 | 462 | 0 | 2 | 307,160 | 115.4 |
| 13:42 | HOLD-1 climb | 20 @ 100 | 27.8 | 27.7 | 32.0 | 34.3 | 35.0 | 10.68 | 17 | 405 | 0 | 2 | 307,040 | 118.1 |
| 13:43 | HOLD-1 climb | 20 @ 100 | 29.0 | 29.3 | 32.0 | 34.7 | 39.0 | 11.49 | 18 | 407 | 1 | 3 | 308,347 | 122.5 |
| 13:44 | HOLD-1 climb | 20 @ 100 | 29.0 | 29.7 | 32.0 | 35.3 | 41.3 | 11.63 | 19 | 422 | 0 | 2 | 267,249 | 122.9 |
| 13:45 | HOLD-1 climb | 20 @ 100 | 28.5 | 29.3 | 31.0 | 35.3 | 40.0 | 10.95 | 16 | 415 | 3 | 3 | 348,510 | 118.6 |
| 13:46 | HOLD-1 climb | 20 @ 100 | 30.2 | 31.3 | 33.0 | 35.7 | 40.0 | 8.64 | 12 | 425 | 1 | 4 | 385,530 | 116.4 |
| 13:47 | HOLD-1 climb | 20 @ 100 | 30.0 | 32.3 | 33.0 | 34.3 | 40.3 | 8.94 | 13 | 435 | 1 | 4 | 392,426 | 110.0 |
| 13:48 | HOLD-1 climb | 20 @ 100 | 33.5 | 33.3 | 36.0 | 37.7 | 42.0 | 12.29 | 18 | 455 | 3 | 5 | 389,601 | 122.8 |
| 13:49 | HOLD-1 climb | 20 @ 100 | 32.2 | 30.3 | 33.0 | 36.3 | 40.7 | 8.24 | 13 | 431 | 1 | 5 | 348,222 | 111.1 |
| 13:50 | HOLD-1 climb | 40 @ 100 | 5.8 | 10.0 | 12.0 | 18.3 | 24.3 | 23.79 | 36 | 481 | 0 | 8 | 310,447 | 155.1 |
| 13:51 | HOLD-1 climb | 40 @ 100 | 6.5 | 4.3 | 12.3 | 15.0 | 26.3 | 22.32 | 32 | 503 | 0 | 2 | 266,737 | 148.9 |
| 13:52 | HOLD-1 climb | 40 @ 100 | 7.0 | 8.7 | 9.7 | 15.0 | 22.7 | 22.73 | 34 | 481 | 0 | 2 | 266,690 | 152.9 |
| 13:53 | HOLD-1 climb | 40 @ 100 | 4.2 | 7.3 | 9.7 | 12.0 | 22.3 | 26.11 | 39 | 470 | 0 | 3 | 266,792 | 160.7 |
| 13:54 | HOLD-1 climb | 40 @ 100 | 7.0 | 10.3 | 12.0 | 15.7 | 26.7 | 23.66 | 36 | 500 | 0 | 10 | 307,135 | 156.6 |
| 13:55 | HOLD-1 climb | 40 @ 100 | 4.5 | 8.0 | 9.7 | 12.3 | 22.3 | 25.45 | 38 | 484 | 1 | 2 | 307,287 | 160.9 |
| 13:56 | HOLD-1 climb | 40 @ 100 | 6.0 | 8.7 | 10.3 | 16.7 | 24.3 | 22.34 | 34 | 511 | 0 | 1 | 266,786 | 156.0 |
| 13:57 | HOLD-1 climb | 40 @ 100 | 5.0 | 8.7 | 11.0 | 14.0 | 26.0 | 24.18 | 35 | 482 | 0 | 2 | 266,700 | 156.3 |
| 13:58 | HOLD-1 climb | 40 @ 100 | 5.5 | 7.7 | 14.7 | 17.7 | 24.7 | 23.64 | 35 | 507 | 0 | 1 | 266,702 | 156.1 |
| 13:59 | HOLD-1 climb | 40 @ 100 | 5.5 | 7.7 | 8.7 | 11.7 | 20.7 | 24.20 | 37 | 458 | 0 | 8 | 266,797 | 164.1 |
| 14:00 | HOLD-1 climb | 40 @ 100 | 9.2 | 10.0 | 13.3 | 20.7 | 28.0 | 22.75 | 32 | 532 | 0 | 10 | 267,102 | 171.8 |
| 14:01 | HOLD-1 climb | 40 @ 100 | 7.2 | 10.0 | 16.7 | 22.0 | 30.7 | 22.19 | 34 | 563 | 0 | 2 | 266,762 | 155.8 |
| 14:02 | HOLD-1 climb | 60 @ 100 | 5.8 | 8.3 | 9.0 | 16.3 | 27.7 | 23.54 | 34 | 579 | 0 | 1 | 266,774 | 157.5 |
| 14:03 | HOLD-1 climb | 60 @ 100 | 6.2 | 8.0 | 10.0 | 14.0 | 24.3 | 29.72 | 45 | 585 | 0 | 4 | 307,350 | 173.2 |
| 14:04 | HOLD-1 climb | 60 @ 100 | 4.8 | 4.3 | 8.3 | 13.7 | 21.7 | 31.15 | 45 | 578 | 0 | 2 | 266,733 | 174.3 |
| 14:05 | HOLD-1 climb | 60 @ 100 | 11.2 | 12.0 | 14.3 | 20.7 | 31.7 | 25.32 | 36 | 609 | 0 | 3 | 307,095 | 167.3 |
| 14:06 | HOLD-1 climb | 60 @ 100 | 6.2 | 12.0 | 16.0 | 21.0 | 29.0 | 20.76 | 30 | 582 | 0 | 2 | 267,490 | 152.5 |
| 14:07 | HOLD-1 climb | 60 @ 100 | 4.8 | 5.7 | 11.3 | 14.7 | 24.3 | 28.74 | 44 | 579 | 1 | 4 | 307,383 | 173.6 |
| 14:08 | HOLD-1 climb | 60 @ 100 | 4.8 | 7.0 | 6.3 | 11.3 | 24.0 | 32.22 | 47 | 577 | 1 | 4 | 307,342 | 185.0 |
| 14:09 | HOLD-1 climb | 60 @ 100 | 9.2 | 13.0 | 15.7 | 22.0 | 30.7 | 25.98 | 36 | 602 | 0 | 5 | 309,435 | 162.6 |
| 14:10 | HOLD-1 climb | 60 @ 100 | 4.5 | 7.0 | 9.3 | 14.0 | 21.3 | 32.65 | 44 | 580 | 0 | 2 | 307,317 | 176.2 |
| 14:11 | HOLD-1 climb | 60 @ 100 | 5.2 | 5.0 | 7.3 | 9.3 | 20.0 | 35.51 | 49 | 581 | 0 | 5 | 307,545 | 188.3 |
| 14:12 | HOLD-1 climb | 60 @ 100 | 4.8 | 6.0 | 11.0 | 13.0 | 23.3 | 32.80 | 43 | 582 | 1 | 3 | 307,293 | 176.0 |
| 14:13 | HOLD-1 climb | 60 @ 100 | 3.0 | 4.3 | 9.7 | 11.7 | 20.7 | 38.79 | 55 | 585 | 0 | 5 | 267,631 | 192.2 |
| 14:14 | HOLD-2 descent | 40 @ 100 | 7.8 | 9.7 | 13.7 | 19.0 | 26.7 | 28.09 | 35 | 559 | 0 | 2 | 269,231 | 166.0 |
| 14:15 | HOLD-2 descent | 40 @ 100 | 14.8 | 13.3 | 21.3 | 22.7 | 34.0 | 23.10 | 27 | 577 | 0 | 8 | 307,420 | 153.1 |
| 14:16 | HOLD-2 descent | 40 @ 100 | 11.0 | 9.7 | 16.3 | 24.7 | 29.0 | 18.59 | 28 | 573 | 1 | 2 | 308,024 | 152.7 |
| 14:17 | HOLD-2 descent | 40 @ 100 | 12.8 | 15.7 | 20.7 | 25.3 | 32.3 | 16.05 | 23 | 575 | 0 | 2 | 307,067 | 143.7 |
| 14:18 | HOLD-2 descent | 40 @ 100 | 15.2 | 18.7 | 19.3 | 25.7 | 35.0 | 17.26 | 22 | 570 | 0 | 2 | 298,372 | 143.7 |
| 14:19 | HOLD-2 descent | 40 @ 100 | 10.0 | 12.3 | 16.7 | 21.7 | 32.0 | 19.93 | 30 | 579 | 0 | 10 | 267,012 | 158.0 |
| 14:20 | HOLD-2 descent | 40 @ 100 | 7.8 | 12.3 | 15.7 | 22.0 | 30.0 | 21.02 | 30 | 584 | 0 | 3 | 266,701 | 157.8 |
| 14:21 | HOLD-2 descent | 40 @ 100 | 12.0 | 14.0 | 16.3 | 23.7 | 28.0 | 19.79 | 28 | 582 | 0 | 3 | 287,034 | 157.4 |
| 14:22 | HOLD-2 descent | 40 @ 100 | 11.5 | 11.3 | 15.3 | 21.3 | 29.0 | 23.34 | 32 | 550 | 0 | 21 | 267,555 | 162.8 |
| 14:23 | HOLD-2 descent | 40 @ 100 | 15.5 | 18.3 | 17.7 | 25.0 | 34.7 | 19.80 | 28 | 592 | 0 | 2 | 266,926 | 156.1 |
| 14:24 | HOLD-2 descent | 40 @ 100 | 12.2 | 14.3 | 18.0 | 24.7 | 34.3 | 21.22 | 30 | 591 | 0 | 2 | 266,918 | 159.8 |
| 14:25 | HOLD-2 descent | 40 @ 100 | 11.0 | 9.0 | 14.0 | 22.3 | 31.7 | 23.69 | 32 | 544 | 0 | 2 | 267,188 | 164.6 |
| 14:26 | HOLD-2 descent | 20 @ 100 | 36.0 | 37.3 | 39.0 | 40.3 | 43.0 | 9.32 | 15 | 502 | 1 | 3 | 308,102 | 130.4 |
| 14:27 | HOLD-2 descent | 20 @ 100 | 37.8 | 36.7 | 38.7 | 42.0 | 44.0 | 9.84 | 16 | 471 | 3 | 5 | 429,179 | 132.5 |
| 14:28 | HOLD-2 descent | 20 @ 100 | 37.2 | 37.3 | 39.7 | 43.0 | 45.3 | 9.47 | 14 | 480 | 1 | 3 | 307,710 | 127.7 |
| 14:29 | HOLD-2 descent | 20 @ 100 | 38.2 | 36.7 | 39.7 | 40.7 | 44.7 | 11.33 | 17 | 469 | 1 | 2 | 308,566 | 137.2 |
| 14:30 | HOLD-2 descent | 20 @ 100 | 36.8 | 37.7 | 40.0 | 42.3 | 46.3 | 9.46 | 15 | 481 | 4 | 5 | 429,279 | 129.3 |
| 14:31 | HOLD-2 descent | 20 @ 100 | 38.2 | 40.0 | 41.0 | 41.7 | 43.7 | 10.21 | 15 | 485 | 1 | 3 | 308,064 | 131.3 |
| 14:32 | HOLD-2 descent | 20 @ 100 | 37.8 | 38.0 | 39.0 | 42.3 | 45.0 | 8.27 | 12 | 485 | 0 | 1 | 266,678 | 123.0 |
| 14:33 | HOLD-2 descent | 20 @ 100 | 37.8 | 37.7 | 39.0 | 41.7 | 46.0 | 10.90 | 18 | 496 | 1 | 3 | 308,257 | 139.6 |
| 14:34 | HOLD-2 descent | 20 @ 100 | 36.5 | 35.7 | 39.0 | 42.0 | 45.3 | 7.85 | 13 | 466 | 1 | 3 | 307,491 | 124.3 |
| 14:35 | HOLD-2 descent | 20 @ 100 | 37.2 | 38.7 | 39.3 | 42.7 | 47.0 | 11.13 | 18 | 491 | 1 | 2 | 307,417 | 139.7 |
| 14:36 | HOLD-2 descent | 20 @ 100 | 37.2 | 38.7 | 38.0 | 40.3 | 42.7 | 9.06 | 14 | 486 | 2 | 3 | 347,813 | 129.5 |
| 14:37 | HOLD-2 descent | 20 @ 100 | 34.2 | 36.3 | 39.0 | 41.7 | 44.3 | 9.97 | 15 | 467 | 0 | 1 | 266,919 | 133.4 |
| 14:38 | HOLD-2 descent | 0 @ 100 | 48.8 | 47.0 | 48.7 | 49.7 | 49.7 | 0.41 | 0 | 16 | 5 | 5 | 205,721 | 100.0 |
| 14:39 | HOLD-2 descent | 0 @ 100 | 52.5 | 52.7 | 51.3 | 51.3 | 50.7 | 1.23 | 0 | 0 | 11 | 12 | 488,536 | 100.0 |
| 14:40 | HOLD-2 descent | 0 @ 100 | 47.5 | 49.0 | 48.7 | 49.3 | 49.0 | 1.31 | 0 | 0 | 12 | 13 | 487,619 | 100.0 |
| 14:41 | HOLD-2 descent | 0 @ 100 | 48.8 | 49.7 | 49.3 | 50.0 | 51.0 | 1.31 | 0 | 0 | 13 | 12 | 490,385 | 100.0 |
| 14:42 | HOLD-2 descent | 0 @ 100 | 44.2 | 44.0 | 44.3 | 46.0 | 45.7 | 1.31 | 0 | 0 | 12 | 12 | 489,117 | 100.0 |
| 14:43 | HOLD-2 descent | 0 @ 100 | 47.8 | 48.3 | 48.7 | 49.0 | 50.0 | 0.90 | 0 | 0 | 9 | 11 | 367,971 | 100.0 |
| 14:44 | HOLD-2 descent | 0 @ 100 | 47.0 | 45.0 | 48.0 | 46.7 | 47.3 | 1.22 | 0 | 0 | 10 | 12 | 372,190 | 100.0 |
| 14:45 | HOLD-2 descent | 0 @ 100 | 49.8 | 50.3 | 49.3 | 50.0 | 50.0 | 1.32 | 0 | 0 | 11 | 13 | 490,855 | 100.0 |
| 14:46 | HOLD-2 descent | 0 @ 100 | 47.2 | 47.3 | 48.3 | 47.3 | 48.0 | 1.52 | 0 | 0 | 11 | 12 | 478,704 | 100.0 |
| 14:47 | HOLD-2 descent | 0 @ 100 | 47.0 | 47.7 | 47.0 | 47.0 | 47.0 | 1.32 | 0 | 0 | 11 | 12 | 494,978 | 100.0 |
| 14:48 | HOLD-2 descent | 0 @ 100 | 46.2 | 46.3 | 46.3 | 47.7 | 48.0 | 1.31 | 0 | 0 | 12 | 12 | 492,009 | 100.0 |
| 14:49 | HOLD-2 descent | 0 @ 100 | 45.8 | 44.3 | 46.0 | 47.7 | 48.0 | 1.31 | 0 | 0 | 11 | 12 | 490,413 | 100.0 |
| 14:50 | HOLD-3 | 40 @ 126 | 6.8 | 7.0 | 10.7 | 14.7 | 21.3 | 21.77 | 33 | 518 | 0 | 3 | 266,813 | 227.3 |
| 14:51 | HOLD-3 | 40 @ 126 | 3.8 | 6.7 | 6.0 | 10.3 | 20.0 | 21.96 | 32 | 526 | 0 | 2 | 307,120 | 200.3 |
| 14:52 | HOLD-3 | 40 @ 126 | 6.2 | 6.3 | 11.3 | 14.7 | 24.7 | 21.61 | 34 | 584 | 0 | 2 | 308,962 | 212.7 |
| 14:53 | HOLD-3 | 40 @ 126 | 3.8 | 5.0 | 6.3 | 12.3 | 16.7 | 26.41 | 34 | 541 | 0 | 2 | 307,405 | 206.8 |
| 14:54 | HOLD-3 | 40 @ 126 | 5.5 | 5.7 | 7.3 | 12.3 | 22.7 | 26.53 | 36 | 552 | 0 | 7 | 267,062 | 243.6 |
| 14:55 | HOLD-3 | 40 @ 126 | 3.5 | 8.0 | 6.7 | 13.0 | 18.3 | 25.66 | 36 | 544 | 0 | 4 | 267,451 | 242.7 |
| 14:56 | HOLD-3 | 40 @ 126 | 4.0 | 5.3 | 7.0 | 10.0 | 19.3 | 27.18 | 38 | 538 | 0 | 3 | 266,700 | 243.2 |
| 14:57 | HOLD-3 | 40 @ 126 | 3.0 | 4.0 | 6.0 | 9.0 | 18.0 | 23.93 | 33 | 516 | 0 | 2 | 267,727 | 212.7 |
| 14:58 | HOLD-3 | 40 @ 126 | 3.8 | 3.3 | 6.3 | 8.7 | 17.7 | 25.71 | 34 | 500 | 0 | 3 | 267,165 | 230.8 |
| 14:59 | HOLD-3 | 40 @ 126 | 4.0 | 5.3 | 6.3 | 11.3 | 18.0 | 24.45 | 33 | 534 | 0 | 3 | 266,672 | 212.4 |
| 15:00 | HOLD-3 | 40 @ 126 | 3.0 | 6.3 | 7.3 | 15.3 | 23.7 | 25.83 | 36 | 554 | 0 | 4 | 266,886 | 233.0 |
| 15:01 | HOLD-3 | 40 @ 126 | 5.8 | 6.0 | 7.7 | 15.0 | 21.7 | 26.46 | 34 | 542 | 0 | 5 | 267,406 | 221.1 |
| 15:06 | HOLD-4 | 0 @ 100 | 45.5 | 45.7 | 45.7 | 46.7 | 46.3 | 2.09 | 0 | 0 | 11 | 12 | 492,026 | 100.0 |


## Mini

Mini matched the desk in all **545 of 545** cohort cells over the 109 published whole minutes (BASE 12, HOLD-1 48, HOLD-2 36, HOLD-3 12, HOLD-4 1), each read in full on Mini's node, with 0 late removals after its publishes. Mini stopped on the desk's FAILED file at 15:18:17Z (`STOP failed-on-origin`), so it has no RETURN file. Its TN10 kaspad was not wiped or restarted.

## Spend

- **Our heavy lane:** 40,830 transactions, 11,339.73 tKAS in fees; 1,531.13 tKAS parked in 40,830 outputs of 0.0375 tKAS on our own sink key (not swept); 546 payment-key coins taken, one per chain. Payment key: 8,400 coins and 185,828 tKAS at the lane's start; 7,894 coins over 10 tKAS after the run (status read, 15:20:54Z). The lane's spend caps (16,000 tKAS fees, 20,000 moved) were not reached.
- **Family lane (key 0):** keys 1–15 got a fresh genesis coin each at 12:13:14Z (15 transactions, none rejected). The family hops' fees as built were 13,046 × the tier rate, 0.013–0.026 tKAS per hop, about 1,170 tKAS for the 64,664 hops counted. Usable tKAS on key 0 (coins over 3 tKAS) fell from 174,118 to 109,513, but key 0 still held 219,195 tKAS in 54,992 coins at 15:21:55Z; most of that drop is value moved into coins of 3 tKAS or less, not spent. Pre-run 12's "about 1.02 tKAS per hop" was read the same way and is likely the same effect; we did not reconcile it.
- **Payments:** none of ours.
- From pre-run 14 on, the operator said budget is not a limit (chat, 2026-11-12, 15:19 Brussels time). Spend stays logged.

## Quirks and fixes

- **First-tick label.** The lane labels each minute with the N it read at its first tick. Ten lane submits went out in the last second of the BASE minute 13:25Z (after the 13:25:59Z set to N = 10) and are logged under n = 0. BASE's family figures are not touched by them (they landed in 13:26Z). Small fix: log the set time with the first submit of a new N.
- **Bot waiter fetch hang.** The waiter runs `timeout 25 git fetch`, but one fetch hung for 336.7 s (from about 15:02:28Z to 15:08:04Z, "Connection timed out after 336664 milliseconds"). The waiter read HOLD-3 only at 15:08:04Z, after its own pinned minute (15:06Z), and checked free nodes at 15:08:15Z. The `NO SEND no-free-node` (55f8ffe) is legal, since the bot sent nothing and found no free node, but its free check came after the minute, and the bot file's wording "read … before the minute" is wrong for this run. To fix in the next repo's waiter: `timeout -k 5 25` (kill if TERM is ignored), git's low-speed limits (`http.lowSpeedLimit`, `http.lowSpeedTime`), a fetch cadence that does not depend on one fetch, and a late check written as late.
- **Coin-count abort.** The family lane's abort line counts coins over 3 tKAS; hop change fragments key 0 into coins under 3 tKAS, so the count fell under 2,500 with 109,513 usable tKAS left and failed the run 1.5 minutes before RETURN. Fix for pre-run 14: consolidate key 0 before the open, and gate on usable tKAS (or on the family sender's own pool) rather than the raw count.
- **Hop fee mass.** The builder prices a hop on 13,046 mass, while the node rates it on about 40,900 storage mass. Fix for pre-run 14, if the tiers are meant to be node rates: price the hop on the node's mass (read back one hop from the mempool, as the lane's calibration did).

## What a next attempt could try (pre-run 14, not opened)

1. Price the family hops on the node's mass, so the tiers are real node rates (for example 100, 126, 150, 200, 300), and calibrate one hop on the node before the open, as the lane did. Then re-run the lane at N = 0, 20, 40 at 100 and at 126. That is the test pre-runs 9–13 thought they ran.
2. Drop N = 60 (it gave the same as 40 under the lane's caps) or lift the 600-a-minute cap if the question is what a bigger flood does; budget is not a limit.
3. Consolidate key 0 first and move the abort line to usable tKAS; let RETURN and the tail finish.
4. Fix the waiter's fetch hang. Keep the probe's template columns and Mini's count.

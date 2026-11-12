OBSERVATION

Not scored. No payment of ours in pre-run 13: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# HOLD-3, desk, pre-run 13

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

HOLD-3 in pre-run 13 is lane N=40 at 126: N40-r126 12 whole minutes. Families only for payments (no payment of ours); our own heavy lane ran at the N and rate shown per minute (N = how many lane chains may each hold one ready transaction in the mempool). The HOLD file names are kept so the bot's and Mini's gates read as in earlier pre-runs. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r110 (families 5–7) 110 sompi/gram on the desk's private node, r126 (families 8–10) 126 sompi/gram on the desk's private node, r150 (families 11–13) 150 sompi/gram on the desk's private node, r200 (families 14–16) 200 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r110 (110) | r126 (126) | r150 (150) | r200 (200) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T14:50 | 40 / 126 | 27 | 21 | 32 | 44 | 64 | 33 / 33 | 518 | 555 | - / - | - | 21.77 | 77 | 227.3 |
| 2026-11-12T14:51 | 40 / 126 | 15 | 20 | 18 | 31 | 60 | 32 / 32 | 526 | 525 | - / - | - | 21.96 | 58 | 200.3 |
| 2026-11-12T14:52 | 40 / 126 | 25 | 19 | 34 | 44 | 74 | 34 / 34 | 584 | 585 | - / - | - | 21.61 | 51 | 212.7 |
| 2026-11-12T14:53 | 40 / 126 | 15 | 15 | 19 | 37 | 50 | 34 / 34 | 541 | 538 | - / - | - | 26.41 | 69 | 206.8 |
| 2026-11-12T14:54 | 40 / 126 | 22 | 17 | 22 | 37 | 68 | 36 / 36 | 552 | 552 | - / - | - | 26.53 | 74 | 243.6 |
| 2026-11-12T14:55 | 40 / 126 | 14 | 24 | 20 | 39 | 55 | 36 / 36 | 544 | 544 | - / - | - | 25.66 | 97 | 242.7 |
| 2026-11-12T14:56 | 40 / 126 | 16 | 16 | 21 | 30 | 58 | 38 / 38 | 538 | 537 | - / - | - | 27.18 | 97 | 243.2 |
| 2026-11-12T14:57 | 40 / 126 | 12 | 12 | 18 | 27 | 54 | 33 / 33 | 516 | 524 | - / - | - | 23.93 | 68 | 212.7 |
| 2026-11-12T14:58 | 40 / 126 | 15 | 10 | 19 | 26 | 53 | 34 / 34 | 500 | 496 | - / - | - | 25.71 | 83 | 230.8 |
| 2026-11-12T14:59 | 40 / 126 | 16 | 16 | 19 | 34 | 54 | 33 / 33 | 534 | 529 | - / - | - | 24.45 | 71 | 212.4 |
| 2026-11-12T15:00 | 40 / 126 | 12 | 19 | 22 | 46 | 71 | 36 / 36 | 554 | 558 | - / - | - | 25.83 | 86 | 233.0 |
| 2026-11-12T15:01 | 40 / 126 | 23 | 18 | 23 | 45 | 65 | 34 / 34 | 542 | 534 | - / - | - | 26.46 | 77 | 221.1 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R110 hops (110) | R126 hops (126) | R150 hops (150) | R200 hops (200) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T14:50 | 3,656 | 0 | 27 | 21 | 32 | 44 | 64 | 2,967 | 380 | 1 | 788 | 20 | kept pace |
| 2026-11-12T14:51 | 3,909 | 0 | 15 | 20 | 18 | 31 | 60 | 3,243 | 374 | 0 | 414 | 20 | kept pace |
| 2026-11-12T14:52 | 3,767 | 0 | 25 | 19 | 34 | 44 | 74 | 3,010 | 399 | 1 | 478 | 20 | kept pace |
| 2026-11-12T14:53 | 3,692 | 0 | 15 | 15 | 19 | 37 | 50 | 3,020 | 382 | 2 | 416 | 20 | kept pace |
| 2026-11-12T14:54 | 3,672 | 0 | 22 | 17 | 22 | 37 | 68 | 2,967 | 361 | 0 | 671 | 20 | kept pace |
| 2026-11-12T14:55 | 3,741 | 0 | 14 | 24 | 20 | 39 | 55 | 3,055 | 382 | 1 | 1101 | 20 | kept pace |
| 2026-11-12T14:56 | 3,669 | 0 | 16 | 16 | 21 | 30 | 58 | 3,001 | 373 | 5 | 693 | 20 | kept pace |
| 2026-11-12T14:57 | 3,613 | 0 | 12 | 12 | 18 | 27 | 54 | 2,982 | 333 | 1 | 516 | 20 | kept pace |
| 2026-11-12T14:58 | 3,610 | 0 | 15 | 10 | 19 | 26 | 53 | 2,990 | 340 | 0 | 557 | 21 | kept pace |
| 2026-11-12T14:59 | 3,708 | 0 | 16 | 16 | 19 | 34 | 54 | 3,040 | 357 | 0 | 505 | 19 | kept pace |
| 2026-11-12T15:00 | 3,781 | 0 | 12 | 19 | 22 | 46 | 71 | 3,060 | 402 | 1 | 313 | 20 | kept pace |
| 2026-11-12T15:01 | 3,732 | 0 | 23 | 18 | 23 | 45 | 65 | 3,032 | 371 | 1 | 594 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R110 (families 5–7, desk private node): 110 sompi/gram per hop. R126 (families 8–10, desk private node): 126 sompi/gram per hop. R150 (families 11–13, desk private node): 150 sompi/gram per hop. R200 (families 14–16, desk private node): 200 sompi/gram per hop. The rate rides on each hop line to the one builder. Payments pay 150.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 8 (355), 4 (350), 6 (345), 5 (342), 7 (338), 9 (287), 10 (270), 11 (250), 12 (193), 13 (158), 3 (142), 14 (125), and 63 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R110 OK / att / rate rej / full rej / waiting | R126 OK / att / rate rej / full rej / waiting | R150 OK / att / rate rej / full rej / waiting | R200 OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---|---|---:|---:|---|
| 2026-11-12T14:50 | 0 | 0 | 0 | 0 | 0 | 31 / 295 / 0 / 0 / 4 | 22 / 222 / 0 / 0 / 3 | 34 / 228 / 0 / 0 / 3 | 47 / 233 / 0 / 0 / 3 | 67 / 247 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:51 | 0 | 0 | 0 | 0 | 0 | 15 / 293 / 0 / 0 / 4 | 20 / 220 / 0 / 0 / 3 | 18 / 221 / 0 / 0 / 3 | 31 / 227 / 0 / 0 / 3 | 60 / 241 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:52 | 0 | 0 | 0 | 0 | 0 | 25 / 292 / 0 / 0 / 4 | 19 / 220 / 0 / 0 / 3 | 34 / 230 / 0 / 0 / 3 | 44 / 231 / 0 / 0 / 3 | 73 / 246 / 0 / 0 / 4 | 0 | 0 | yes |
| 2026-11-12T14:53 | 0 | 0 | 0 | 0 | 0 | 15 / 291 / 0 / 0 / 4 | 15 / 219 / 0 / 0 / 3 | 19 / 220 / 0 / 0 / 3 | 37 / 231 / 0 / 0 / 3 | 51 / 237 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:54 | 0 | 0 | 0 | 0 | 0 | 22 / 291 / 0 / 0 / 4 | 17 / 219 / 0 / 0 / 3 | 22 / 221 / 0 / 0 / 3 | 37 / 230 / 0 / 0 / 3 | 68 / 245 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:55 | 0 | 0 | 0 | 0 | 0 | 14 / 291 / 0 / 0 / 4 | 24 / 224 / 0 / 0 / 3 | 20 / 222 / 0 / 0 / 3 | 39 / 228 / 0 / 0 / 3 | 55 / 236 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:56 | 0 | 0 | 0 | 0 | 0 | 16 / 293 / 0 / 0 / 4 | 16 / 219 / 0 / 0 / 3 | 21 / 221 / 0 / 0 / 3 | 30 / 227 / 0 / 0 / 3 | 58 / 233 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:57 | 0 | 0 | 0 | 0 | 0 | 12 / 289 / 0 / 0 / 4 | 12 / 221 / 0 / 0 / 3 | 18 / 222 / 0 / 0 / 3 | 27 / 224 / 0 / 0 / 3 | 54 / 235 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:58 | 0 | 0 | 0 | 0 | 0 | 15 / 288 / 0 / 0 / 4 | 10 / 217 / 0 / 0 / 3 | 19 / 221 / 0 / 0 / 3 | 26 / 222 / 0 / 0 / 3 | 53 / 239 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T14:59 | 0 | 0 | 0 | 0 | 0 | 16 / 290 / 0 / 0 / 4 | 16 / 220 / 0 / 0 / 3 | 19 / 221 / 0 / 0 / 3 | 34 / 228 / 0 / 0 / 3 | 54 / 239 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T15:00 | 0 | 0 | 0 | 0 | 0 | 11 / 288 / 0 / 0 / 3 | 19 / 220 / 0 / 0 / 3 | 22 / 225 / 0 / 0 / 3 | 46 / 234 / 0 / 0 / 3 | 71 / 246 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T15:01 | 0 | 0 | 0 | 0 | 0 | 24 / 294 / 0 / 0 / 4 | 18 / 220 / 0 / 0 / 3 | 23 / 223 / 0 / 0 / 3 | 45 / 234 / 0 / 0 / 3 | 65 / 239 / 0 / 0 / 5 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 13 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621595325 | 0 | 0 | 0 | 35 |
| 5 | yes | 621595325 | 0 | 0 | 0 | 40 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 216 of 216 | 9330 | 42274 |
| r110 | 208 of 208 | 7859 | 27132 |
| r126 | 269 of 269 | 5342 | 20275 |
| r150 | 443 of 443 | 3527 | 12758 |
| r200 | 729 of 729 | 2256 | 6243 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R110 in mempool / ready | R126 in mempool / ready | R150 in mempool / ready | R200 in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r110 | Template: r126 | Template: r150 | Template: r200 | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T14:50 | 3 | 77 | 77 | 21.77 | 24 | 24 | - | - | 0 | 33 / 33 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 3 | 266,813 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 227.3 / 158.3 / 111.9 | 66 | 74 |
| 2026-11-12T14:51 | 3 | 58 | 58 | 21.96 | 12 | 12 | - | - | 0 | 32 / 32 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 2 | 307,120 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 200.3 / 150.7 / 111.0 | 53 | 57 |
| 2026-11-12T14:52 | 3 | 51 | 62 | 21.61 | 12 | 12 | - | - | 0 | 34 / 34 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 2 | 308,962 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 212.7 / 154.3 / 111.4 | 57 | 57 |
| 2026-11-12T14:53 | 3 | 69 | 68 | 26.41 | 17 | 17 | - | - | 0 | 34 / 34 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 2 | 307,405 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 206.8 / 152.6 / 111.2 | 104 | 106 |
| 2026-11-12T14:54 | 3 | 74 | 97 | 26.53 | 45 | 45 | - | - | 0 | 36 / 36 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 7 | 267,062 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 6 | 243.6 / 162.1 / 112.4 | 89 | 92 |
| 2026-11-12T14:55 | 3 | 97 | 98 | 25.66 | 50 | 50 | - | - | 0 | 36 / 36 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 4 | 267,451 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 242.7 / 161.9 / 112.3 | 87 | 92 |
| 2026-11-12T14:56 | 2 | 97 | 97 | 27.18 | 43 | 43 | - | - | 0 | 38 / 38 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 3 | 266,700 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 243.2 / 162.0 / 112.3 | 87 | 89 |
| 2026-11-12T14:57 | 3 | 68 | 69 | 23.93 | 20 | 20 | - | - | 0 | 33 / 33 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 2 | 267,727 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 212.7 / 154.4 / 111.4 | 73 | 74 |
| 2026-11-12T14:58 | 3 | 83 | 86 | 25.71 | 34 | 34 | - | - | 0 | 34 / 34 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 3 | 267,165 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 230.8 / 159.2 / 112.0 | 80 | 80 |
| 2026-11-12T14:59 | 3 | 71 | 71 | 24.45 | 23 | 23 | - | - | 0 | 33 / 33 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 3 | 266,672 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 212.4 / 154.3 / 111.4 | 67 | 77 |
| 2026-11-12T15:00 | 3 | 86 | 86 | 25.83 | 36 | 36 | - | - | 0 | 36 / 36 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 2 / 2 | 4 | 266,886 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 2 | 233.0 / 159.7 / 112.1 | 77 | 80 |
| 2026-11-12T15:01 | 3 | 77 | 78 | 26.46 | 27 | 27 | - | - | 0 | 34 / 34 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 5 | 267,406 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 3 | 221.1 / 156.7 / 111.7 | 72 | 74 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.

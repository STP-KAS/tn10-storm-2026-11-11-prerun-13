OBSERVATION

Not scored. No payment of ours in pre-run 13: families only, on the desk's private node, plus our own heavy lane at the N shown per minute.

# BASE, desk, pre-run 13

> Our own TN10 testing: what we observed in this run, on our own desk node. Counts only. Included is what the desk's private TN10 node accepted on chain, read by the desk counter, by accepting chain block time. Mini's files are a second read.

BASE in pre-run 13 is lane N=0 (control): N0-control 12 whole minutes. Families only for payments (no payment of ours); our own heavy lane ran at the N and rate shown per minute (N = how many lane chains may each hold one ready transaction in the mempool). The HOLD file names are kept so the bot's and Mini's gates read as in earlier pre-runs. Not scored.

Families offer 1.2 hop/s, 16 families live, one family-sender process and one builder: floor (families 1–4) 100 sompi/gram on the desk's private node, r110 (families 5–7) 110 sompi/gram on the desk's private node, r126 (families 8–10) 126 sompi/gram on the desk's private node, r150 (families 11–13) 150 sompi/gram on the desk's private node, r200 (families 14–16) 200 sompi/gram on the desk's private node. No payment sender was started.

## Tiers against the mempool, per minute

| Minute (UTC) | Lane N / rate | floor (100) | r110 (110) | r126 (126) | r150 (150) | r200 (200) | Our heavy in mempool / ready | Our heavy landed | Lane submits OK | Outside heavy at 100 (>200k mass) / ready | Outside at 100, n | Ready mass, blocks | Mempool | Fee estimate priority |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 2026-11-12T13:14 | 0 / 100 | 176 | 137 | 133 | 138 | 138 | 0 / 0 | 0 | 0 | 0 / 0 | 2 | 1.20 | 11 | 100.0 |
| 2026-11-12T13:15 | 0 / 100 | 191 | 148 | 149 | 145 | 151 | 0 / 0 | 0 | 0 | - / - | - | 1.57 | 15 | 100.0 |
| 2026-11-12T13:16 | 0 / 100 | 182 | 137 | 136 | 144 | 141 | 0 / 0 | 0 | 0 | - / - | - | 1.23 | 11 | 100.0 |
| 2026-11-12T13:17 | 0 / 100 | 183 | 139 | 141 | 147 | 145 | 0 / 0 | 0 | 0 | - / - | - | 1.34 | 16 | 100.0 |
| 2026-11-12T13:18 | 0 / 100 | 175 | 138 | 135 | 134 | 143 | 0 / 0 | 0 | 0 | - / - | - | 1.33 | 17 | 100.0 |
| 2026-11-12T13:19 | 0 / 100 | 190 | 137 | 141 | 139 | 138 | 0 / 0 | 0 | 0 | - / - | - | 1.76 | 19 | 100.0 |
| 2026-11-12T13:20 | 0 / 100 | 187 | 145 | 140 | 133 | 139 | 0 / 0 | 0 | 0 | - / - | - | 1.33 | 16 | 100.0 |
| 2026-11-12T13:21 | 0 / 100 | 183 | 140 | 143 | 145 | 146 | 0 / 0 | 0 | 0 | - / - | - | 1.40 | 16 | 100.0 |
| 2026-11-12T13:22 | 0 / 100 | 200 | 144 | 146 | 146 | 146 | 0 / 0 | 0 | 0 | 0 / 0 | 1 | 1.54 | 16 | 100.0 |
| 2026-11-12T13:23 | 0 / 100 | 181 | 136 | 139 | 137 | 137 | 0 / 0 | 0 | 0 | - / - | - | 1.35 | 17 | 100.0 |
| 2026-11-12T13:24 | 0 / 100 | 178 | 134 | 142 | 140 | 144 | 0 / 0 | 0 | 0 | - / - | - | 1.33 | 16 | 100.0 |
| 2026-11-12T13:25 | 0 / 100 | 201 | 149 | 154 | 150 | 149 | 0 / 0 | 0 | 10 | - / - | - | 1.32 | 16 | 100.0 |

Lane N / rate is the cap the runner set for that minute (N lane chains, each with at most one ready transaction in the mempool) and the lane's fee rate. Our heavy in mempool / ready is the probe's median count of our own lane entries; our heavy landed is what the desk counter read as accepted on chain from our lane in the minute; lane submits OK is the lane's own log. Hops are what the desk counter read as accepted on chain in that minute, per tier. Ready mass, blocks, is the median of the probe's samples in the minute (block limit 500,000). Outside at 100 is the median count of mempool entries not in our logs (our lane is in our logs) paying 100 sompi/gram, and heavy is how many of those had a mass over 200,000 (median of samples). The outside stream is not attributed to anyone.

## Chain, desk counter

| Minute (UTC) | Included, all non-coinbase | Our payments included | Floor hops (100) | R110 hops (110) | R126 hops (126) | R150 hops (150) | R200 hops (200) | Other traffic | Chain blocks | DAA gap max | Sink age max, ms | Final after, s | Counter |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-11-12T13:14 | 3,893 | 0 | 176 | 137 | 133 | 138 | 138 | 3,194 | 365 | 1 | 491 | 20 | kept pace |
| 2026-11-12T13:15 | 3,998 | 0 | 191 | 148 | 149 | 145 | 151 | 3,249 | 344 | 1 | 368 | 20 | kept pace |
| 2026-11-12T13:16 | 3,932 | 0 | 182 | 137 | 136 | 144 | 141 | 3,216 | 346 | 0 | 369 | 19 | kept pace |
| 2026-11-12T13:17 | 3,843 | 0 | 183 | 139 | 141 | 147 | 145 | 3,119 | 368 | 0 | 432 | 20 | kept pace |
| 2026-11-12T13:18 | 3,818 | 0 | 175 | 138 | 135 | 134 | 143 | 3,124 | 349 | 1 | 307 | 20 | kept pace |
| 2026-11-12T13:19 | 3,906 | 0 | 190 | 137 | 141 | 139 | 138 | 3,183 | 348 | 2 | 507 | 19 | kept pace |
| 2026-11-12T13:20 | 3,841 | 0 | 187 | 145 | 140 | 133 | 139 | 3,129 | 366 | 1 | 499 | 20 | kept pace |
| 2026-11-12T13:21 | 3,842 | 0 | 183 | 140 | 143 | 145 | 146 | 3,108 | 370 | 2 | 525 | 20 | kept pace |
| 2026-11-12T13:22 | 3,926 | 0 | 200 | 144 | 146 | 146 | 146 | 3,172 | 375 | 0 | 547 | 19 | kept pace |
| 2026-11-12T13:23 | 3,884 | 0 | 181 | 136 | 139 | 137 | 137 | 3,184 | 371 | 3 | 685 | 20 | kept pace |
| 2026-11-12T13:24 | 3,841 | 0 | 178 | 134 | 142 | 140 | 144 | 3,127 | 357 | 1 | 713 | 20 | kept pace |
| 2026-11-12T13:25 | 3,958 | 0 | 201 | 149 | 154 | 150 | 149 | 3,187 | 384 | 1 | 426 | 20 | kept pace |

Coinbase is taken out as one per merged blue block (on this node a chain block's accepted list carries the coinbase of each blue block it merges). Other traffic is the rest: other users' load, the genesis, and anything not in our logs.

## Hop rate per cohort, as built

Floor (families 1–4, desk private node): 100 sompi/gram per hop. R110 (families 5–7, desk private node): 110 sompi/gram per hop. R126 (families 8–10, desk private node): 126 sompi/gram per hop. R150 (families 11–13, desk private node): 150 sompi/gram per hop. R200 (families 14–16, desk private node): 200 sompi/gram per hop. The rate rides on each hop line to the one builder. Payments pay 150.

## Funding coins, as read from the desk node

The funding coins were not one size. Sizes seen, whole tKAS (coins): 16 (422), 15 (404), 13 (400), 14 (396), 17 (385), 12 (363), 11 (354), 18 (315), 19 (294), 10 (269), 9 (223), 20 (218), and 68 more sizes. The fee is not called the whole cause.

## Minutes

| Minute (UTC) | Pay submit-OK | Attempts | Rejects, rate | Rejects, full | Other | Floor OK / att / rate rej / full rej / waiting | R110 OK / att / rate rej / full rej / waiting | R126 OK / att / rate rej / full rej / waiting | R150 OK / att / rate rej / full rej / waiting | R200 OK / att / rate rej / full rej / waiting | Family stalls logged | Family node mempool-high marks | Clean |
|---|---:|---:|---:|---:|---:|---|---|---|---|---|---:|---:|---|
| 2026-11-12T13:14 | 0 | 0 | 0 | 0 | 0 | 176 / 354 / 0 / 0 / 4 | 137 / 272 / 0 / 0 / 3 | 133 / 262 / 0 / 0 / 3 | 137 / 270 / 0 / 0 / 0 | 138 / 267 / 0 / 0 / 2 | 0 | 0 | yes |
| 2026-11-12T13:15 | 0 | 0 | 0 | 0 | 0 | 189 / 355 / 0 / 0 / 2 | 146 / 272 / 0 / 0 / 1 | 147 / 270 / 0 / 0 / 1 | 145 / 270 / 0 / 0 / 0 | 151 / 268 / 0 / 0 / 2 | 0 | 0 | yes |
| 2026-11-12T13:16 | 0 | 0 | 0 | 0 | 0 | 184 / 368 / 0 / 0 / 4 | 138 / 273 / 0 / 0 / 2 | 138 / 268 / 0 / 0 / 3 | 147 / 281 / 0 / 0 / 3 | 144 / 278 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T13:17 | 0 | 0 | 0 | 0 | 0 | 183 / 369 / 0 / 0 / 4 | 140 / 283 / 0 / 0 / 3 | 141 / 281 / 0 / 0 / 3 | 147 / 286 / 0 / 0 / 3 | 145 / 284 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T13:18 | 0 | 0 | 0 | 0 | 0 | 175 / 360 / 0 / 0 / 4 | 140 / 272 / 0 / 0 / 5 | 138 / 274 / 0 / 0 / 6 | 137 / 271 / 0 / 0 / 6 | 146 / 278 / 0 / 0 / 8 | 0 | 0 | yes |
| 2026-11-12T13:19 | 0 | 0 | 0 | 0 | 0 | 190 / 369 / 0 / 0 / 4 | 135 / 270 / 0 / 0 / 3 | 138 / 269 / 0 / 0 / 3 | 136 / 265 / 0 / 0 / 3 | 135 / 270 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T13:20 | 0 | 0 | 0 | 0 | 0 | 187 / 367 / 0 / 0 / 4 | 144 / 285 / 0 / 0 / 2 | 140 / 283 / 0 / 0 / 3 | 133 / 274 / 0 / 0 / 3 | 139 / 277 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T13:21 | 0 | 0 | 0 | 0 | 0 | 181 / 356 / 0 / 0 / 2 | 139 / 264 / 0 / 0 / 1 | 141 / 273 / 0 / 0 / 1 | 143 / 273 / 0 / 0 / 1 | 143 / 275 / 0 / 0 / 2 | 0 | 0 | yes |
| 2026-11-12T13:22 | 0 | 0 | 0 | 0 | 0 | 201 / 382 / 0 / 0 / 3 | 145 / 278 / 0 / 0 / 2 | 147 / 279 / 0 / 0 / 2 | 148 / 281 / 0 / 0 / 3 | 149 / 283 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T13:23 | 0 | 0 | 0 | 0 | 0 | 181 / 368 / 0 / 0 / 3 | 137 / 274 / 0 / 0 / 3 | 140 / 277 / 0 / 0 / 3 | 136 / 275 / 0 / 0 / 2 | 137 / 273 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T13:24 | 0 | 0 | 0 | 0 | 0 | 180 / 356 / 0 / 0 / 4 | 135 / 270 / 0 / 0 / 3 | 143 / 276 / 0 / 0 / 3 | 142 / 275 / 0 / 0 / 3 | 144 / 275 / 0 / 0 / 5 | 0 | 0 | yes |
| 2026-11-12T13:25 | 0 | 0 | 0 | 0 | 0 | 198 / 373 / 0 / 0 / 2 | 146 / 276 / 0 / 0 / 1 | 151 / 279 / 0 / 0 / 1 | 146 / 279 / 0 / 0 / 0 | 146 / 274 / 0 / 0 / 2 | 0 | 0 | yes |

A family stall is a coordinator mark: no hop of that family landed for a while. The family was still attempting. It is logged, and it does not make the minute dirty.

A mempool-high mark means the family node read a mempool at or over 90,000. In pre-run 13 that does not stop the families: the skip does not apply to them. A skip, if one were set, is dirt with its reason (node-skip-fam) for every minute it covers, and it clears when the mempool falls back under the line.

Within 10 percent means 0 to 0 submit-OK in the minute.

## Public nodes (local numbers)

Kept: 1, 5. The family sender reads and submits every tier on the desk's private node, which the desk counter reads. The kept public kaspads are read for sync and DAA only; no payment of ours went to them.

Kept nodes are unique kaspads: each answered with its own node id at the preflight. 3 candidate endpoints passed the check and were 2 kaspads (node 4 is node 1; the second hostname was not used). 3 payment senders per kaspad.

| Node | Synced every sample | Last DAA | Pay submit-OK | Pay rejects | Dropped sockets | Answer ms, median |
|---:|---|---:|---:|---:|---:|---:|
| 1 | yes | 621537950 | 0 | 0 | 0 | 39 |
| 5 | yes | 621537950 | 0 | 0 | 0 | 42 |

## Hop submit to landing, per cohort

| Cohort | Landed of OK | Median ms | Slow tail (p95) ms |
|---|---:|---:|---:|
| floor | 2225 of 2225 | 1104 | 1680 |
| r110 | 1682 of 1682 | 1094 | 1658 |
| r126 | 1697 of 1697 | 1087 | 1643 |
| r150 | 1697 of 1697 | 1067 | 1607 |
| r200 | 1717 of 1717 | 1060 | 1553 |

Landing is the accepting block header time the desk's coordinator read. Waiting is submitted-OK not yet landed at the minute's end. Every tier has the same hop shape and the same node; only the rate differs.

## Mempool and template, desk node (probe)

| Minute (UTC) | Samples | Mempool | Ready (no parent in mempool) | Ready mass, blocks of 500k | Other traffic in mempool | Other ready | Other at 100, n | Other at 100, mean mass | Our payments in mempool | Our heavy in mempool / ready | Floor in mempool / ready | R110 in mempool / ready | R126 in mempool / ready | R150 in mempool / ready | R200 in mempool / ready | Template txs | Template storage mass | Template txs over 100k storage mass | Template: payments | Template: our heavy | Template: floor | Template: r110 | Template: r126 | Template: r150 | Template: r200 | Template: other | Fee estimate priority / normal / low | Public 1 mempool | Public 5 mempool |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 2026-11-12T13:14 | 3 | 11 | 12 | 1.20 | 2 | 2 | 2 | 4,613 | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 1 / 1 | 3 / 3 | 2 / 2 | 11 | 456,975 | 0 | 0 | 0 | 2 | 2 | 1 | 3 | 2 | 1 | 100.0 / 100.0 / 100.0 | 1 | 11 |
| 2026-11-12T13:15 | 3 | 15 | 18 | 1.57 | 2 | 2 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 13 | 494,959 | 0 | 0 | 0 | 2 | 2 | 1 | 2 | 3 | 1 | 100.0 / 100.0 / 100.0 | 25 | 15 |
| 2026-11-12T13:16 | 3 | 11 | 14 | 1.23 | 0 | 0 | - | - | 0 | 0 / 0 | 3 / 3 | 2 / 2 | 2 / 2 | 3 / 3 | 3 / 3 | 12 | 493,635 | 0 | 0 | 0 | 2 | 2 | 2 | 2 | 3 | 0 | 100.0 / 100.0 / 100.0 | 0 | 10 |
| 2026-11-12T13:17 | 3 | 16 | 17 | 1.34 | 1 | 1 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 493,477 | 0 | 0 | 0 | 3 | 2 | 2 | 3 | 3 | 0 | 100.0 / 100.0 / 100.0 | 14 | 13 |
| 2026-11-12T13:18 | 3 | 17 | 17 | 1.33 | 1 | 1 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 491,575 | 0 | 0 | 0 | 1 | 1 | 2 | 3 | 3 | 1 | 100.0 / 100.0 / 100.0 | 1 | 17 |
| 2026-11-12T13:19 | 2 | 19 | 19 | 1.76 | 3 | 3 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 456,317 | 0 | 0 | 0 | 3 | 2 | 2 | 2 | 3 | 1 | 100.0 / 100.0 / 100.0 | 7 | 7 |
| 2026-11-12T13:20 | 3 | 16 | 16 | 1.33 | 0 | 0 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 495,825 | 0 | 0 | 0 | 1 | 2 | 3 | 3 | 3 | 0 | 100.0 / 100.0 / 100.0 | 0 | 16 |
| 2026-11-12T13:21 | 3 | 16 | 16 | 1.40 | 1 | 1 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 2 / 2 | 3 / 3 | 12 | 458,210 | 0 | 0 | 0 | 1 | 2 | 3 | 1 | 1 | 0 | 100.0 / 100.0 / 100.0 | 4 | 16 |
| 2026-11-12T13:22 | 3 | 16 | 19 | 1.54 | 3 | 3 | 1 | 3,349 | 0 | 0 / 0 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 13 | 452,959 | 0 | 0 | 0 | 2 | 0 | 1 | 3 | 3 | 2 | 100.0 / 100.0 / 100.0 | 2 | 11 |
| 2026-11-12T13:23 | 3 | 17 | 17 | 1.35 | 1 | 1 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 454,703 | 0 | 0 | 0 | 2 | 2 | 3 | 2 | 3 | 1 | 100.0 / 100.0 / 100.0 | 1 | 5 |
| 2026-11-12T13:24 | 3 | 16 | 16 | 1.33 | 0 | 0 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 204,899 | 0 | 0 | 0 | 1 | 1 | 2 | 0 | 1 | 0 | 100.0 / 100.0 / 100.0 | 0 | 17 |
| 2026-11-12T13:25 | 3 | 16 | 16 | 1.32 | 0 | 0 | - | - | 0 | 0 / 0 | 4 / 4 | 3 / 3 | 3 / 3 | 3 / 3 | 3 / 3 | 12 | 493,996 | 0 | 0 | 0 | 1 | 2 | 3 | 3 | 3 | 0 | 100.0 / 100.0 / 100.0 | 0 | 12 |

Read by the probe on the desk's private TN10 node every 20 s, read-only; each cell is the median of that minute's samples. Ready means no parent in the mempool: in rusty-kaspa v2.1.0 only those are in the selector's frontier. Ready mass is compared with one block's mass limit (500,000): at or under 1 the selector takes all ready transactions best-first; over 1 it samples at random weighted by (fee/mass)^3 (over 4, sample_inplace). Mass is the larger of compute and storage mass, as the v2.1.0 selector normalises it (transient mass is not in the RPC). Other traffic is every mempool entry not in our sender logs (our heavy lane is its own class, our heavy); its fee rate is the node's fee over that mass. Template transactions carry no id in the RPC, so each is matched to a mempool entry by its first input. The template is the desk node's own getBlockTemplate (never submitted): what this node would put in a block at that moment, not a miner's template. The fee estimate is the node's getFeeEstimate, read only; no sender reads it. Public mempool is getInfo's mempool size on each kept public kaspad.

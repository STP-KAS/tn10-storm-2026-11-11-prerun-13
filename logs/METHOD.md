# Method, pre-run 13

> This is our own Kaspa Testnet-10 testing. What follows is what we observed in this run, on our own nodes; it is not a claim of how TN10 or Kaspa behave in general.

> **Written by the operator, not the runner.** The desk runner writes this file when RETURN is on origin. In pre-run 13 it stopped before RETURN ([FAILED.md](FAILED.md), 2026-11-12T15:17:53Z, the family lane's coin count under its abort line) and wrote none. This page gives the same items from the published step files and, for the drain, from the desk's local counter, probe and lane logs, read after the stop. Full tables: [LESSONS.md](LESSONS.md).

Counts only. Desk side. Included is the desk counter's read of what the desk's private TN10 node accepted on chain. Mini's files are a second read.

Steps: BASE 12 min (lane N = 0), HOLD-1 the climb 48 min (N = 10, 20, 40, 60 at 100), HOLD-2 the descent 36 min (N = 40, 20, 0), HOLD-3 12 min (N = 40 at 126), the HOLD-4 minute (15:06Z, N = 0), RETURN (N = 0) stopped after 10 of 12 minutes. All OBSERVATION, families only, no payment of ours.

Hops included per cohort, desk counter, start to stop: floor 14,504, r110 11,173, r126 11,817, r150 12,774, r200 14,396. Our heavy lane included: 40,830 (all accepted, 0 rejected). Our payments: 0.

Per step, hops included floor / r110 / r126 / r150 / r200, and counter minutes not kept-pace:

- BASE: 2,227 / 1,684 / 1,699 / 1,698 / 1,717; 0 of 12.
- HOLD-1: 4,235 / 3,326 / 3,670 / 4,115 / 5,024; 0 of 48.
- HOLD-2: 4,636 / 3,543 / 3,757 / 4,081 / 4,495; 0 of 36.
- HOLD-3: 212 / 207 / 267 / 440 / 726; 0 of 12.
- HOLD-4: 182 / 137 / 137 / 140 / 139; 0 of 1.
- RETURN, 15:07–15:16Z from the local counter log (not published by the runner): 1,908 / 1,436 / 1,440 / 1,447 / 1,443.

Decent on the desk side: short. Every step file through HOLD-4 reached origin; RETURN, `counts/chain/TIMELINE.md` and `counts/chain/MEMPOOL.md` did not. The rates were five rates on one node set; the coins were not one size; so the fee is not called the whole cause.

On origin:

- counts/desk/BASE.md: 2026-11-12T13:26:22Z
- counts/desk/HOLD-1.md: 2026-11-12T14:14:22Z
- counts/desk/HOLD-2.md: 2026-11-12T14:50:22Z
- counts/desk/HOLD-3.md: 2026-11-12T15:02:22Z
- counts/desk/HOLD-4.md: 2026-11-12T15:07:22Z
- logs/FAILED.md: 2026-11-12T15:18:00Z

## Reading against the selection rule (operator)

Per family, as a share of BASE (the lane at 0, no outside heavy in the whole run): N = 10 held 95–101 percent in every tier; N = 20 gave floor 68 and r200 86 (up), 81 and 94 (down); N = 40 at 100 gave floor 13 and r200 51 (up), 26 and 67 (down); N = 60 gave 11 and 51; N = 40 at 126 gave 8 and 41. The rank correlation with the ready mass was −0.91 to −0.94. R200 over floor per family went from 1.05 at N = 0 to 4.2–5.1 at N = 40 and over, against a weight of about 8 between them.

The node's fee rate for our hops, read from its mempool at 15:14:49Z, was 31.8–32.3 (floor), 34.9–35.6, 37.6–40.6, 47.8–48.2 and 64.5–64.6 (r200) sompi/gram, not 100–200: the hops pay 13,046 × the tier rate, but the node divides by their storage mass of about 40,400–43,800 (`normalized_max` and `calculated_feerate`, rusty-kaspa v2.1.0). So every tier sat below our heavy lane at 100 (weights 1/31 to 1/3.7) and at 126 (1/61 to 1/7.4). At N = 40 and over the desk node's template held a median of 2–3.5 transactions, about 267,000–307,000 storage mass, and no family hop, while 16 were ready. Our reading of the v2.1.0 sampler is that it draws by weight per transaction and stops after 8 draws that do not fit (`MAX_NULL_ATTEMPTS`), so the heavy candidates crowd out the light, low-rate hops before they are drawn. That is one node's template and our reading of the source, not a measurement of miners.

Every OK hop and every lane transaction landed; the competitor changed how long a hop waited (floor p95 42 s at N = 40 at 126), not whether it landed.

## The stop

The runner fails the run when key 0 holds under 2,500 coins over 3 tKAS or under 18,000 usable tKAS. It read under 2,500 coins at 15:17:53Z; read-only afterwards, 2,487 coins with 109,513 usable tKAS, and 54,992 coins and 219,195 tKAS on key 0 in all. That was the coin count tripping on change fragments, not a shortage. The runner, the counter, the probe, the family sender and the lane exited on their own; nothing was killed or restarted.

> **Experimental. We are just trying this.** [Disclaimer](../../DISCLAIMER.md) · Counts only. No key, seed, txid, covenant id, address, host, or port.
>
> The desk's sender log and the desk counter's chain read for pre-run 13. It is not Wednesday's count.

# Desk sender log and chain read

The files are absent until each step closes. None is written before `hashes/SIXTEEN.md` has an On origin line.

| File | Target |
|---|---|
| BASE.md | no payments, families plus our heavy lane at N = 0 (control), 12 whole minutes, an observation. The first line is `OBSERVATION` |
| HOLD-1.md | the climb: our heavy lane at N = 10, 20, 40, 60 (12 whole minutes each; pre-run 13 has no payment offer) |
| HOLD-2.md | the descent: N = 40, 20, 0 (12 whole minutes each) |
| HOLD-3.md | N = 40 with the lane at 126, 12 whole minutes |
| HOLD-4.md | the pinned observation minute, lane N = 0 (drain). The first line is `OBSERVATION` |
| RETURN.md | lane N = 0, an observation of the drain and recovery, 12 whole minutes. The first line is `OBSERVATION` |

A row is submit-OK, attempts, rejects split into rate and full, and the waiting count per cohort. Each file also states the hop rate per cohort as built and path (100 for families 1–4, 200 for 5–7, 300 for 8–10, 300 for 11–13 on the public path, 1000 for 14–16) and whether the funding coins were one size, as read from the node. If they were not, it gives the sizes seen, rounded to whole tKAS, and does not call the fee the whole cause. A size is never guessed. Public nodes are local numbers. The paste is [GO-DESK.md](../../GO-DESK.md).

Pre-run 13 (lock line (iv)): each file also carries what the desk's private TN10 node accepted on chain, per minute, by accepting chain block header time: our payments, hops per cohort, other traffic, chain blocks, the desk node's DAA gap against a kept public kaspad, its sink age, and whether the counter kept pace. A lagging, partial, or not-final minute is marked and never filled in. Under the head, one line says in how many minutes our included payments were within 10 percent of submit-OK. It is reported, not scored. The whole run is in [counts/chain/TIMELINE.md](../chain/README.md).

Pre-run 13 (lock line (xii)): each file also carries the probe's mempool and template table for the same minutes. The whole probe timeline is [counts/chain/MEMPOOL.md](../chain/README.md).

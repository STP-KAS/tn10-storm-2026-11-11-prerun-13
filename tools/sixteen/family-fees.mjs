// family-fees.mjs: pre-run 12's hop fee and submit path per family. Five fee tiers just above the floor, every family on the
// desk's private node, no payments of ours. The question: which fee keeps a covenant chain moving when it competes with heavy
// same-fee outside transactions in the mempool. rusty-kaspa v2.1.0 (01b532e) weights a ready transaction by (fee/mass)^3 once
// the ready set is over one block's mass, so against an outside stream at 100 the relative weights are
// 100: 1.00, 110: 1.33, 126: 2.00, 150: 3.38, 200: 8.00. A hop is only a candidate when its parent has left the mempool.
//   floor   families 1-4    100   desk private node (the outside stream's rate)
//   r110    families 5-7    110   desk private node
//   r126    families 8-10   126   desk private node (the node's fee-estimate priority read before pre-run 12)
//   r150    families 11-13  150   desk private node (pre-runs 7-11 payment rate)
//   r200    families 14-16  200   desk private node
// No payment load. Genesis (built once by hash-sixteen.mjs) stays at 200. The builder takes any rate of 100 or more.
// Pre-runs 9-11 ran floor 100, double 200, triple 300, triple-pub 300 (public path), high 1000.
export const FLOOR_RATE = 100;
export const PAY_RATE = 150;   // kept for old callers; pre-run 12 starts no payment sender
export const GENESIS_RATE = 200;
export const TIERS = [
  { cohort: "floor", rate: 100, from: 1, to: 4, path: "desk" },
  { cohort: "r110", rate: 110, from: 5, to: 7, path: "desk" },
  { cohort: "r126", rate: 126, from: 8, to: 10, path: "desk" },
  { cohort: "r150", rate: 150, from: 11, to: 13, path: "desk" },
  { cohort: "r200", rate: 200, from: 14, to: 16, path: "desk" },
];
export const COHORTS = TIERS.map((t) => t.cohort);
export const COHORT_RE = TIERS.map((t) => t.cohort).sort((a, b) => b.length - a.length).join("|");
function tierOf(family) {
  const f = Number(family);
  const t = Number.isInteger(f) ? TIERS.find((x) => f >= x.from && f <= x.to) : null;
  if (!t) throw new Error("family " + family + " is not 1..16");
  return t;
}
export const familyRate = (family) => tierOf(family).rate;
export const cohortOfFamily = (family) => tierOf(family).cohort;
export const pathOfFamily = (family) => tierOf(family).path;
export const PUBLIC_FAMILIES = TIERS.filter((t) => t.path === "public").flatMap((t) => Array.from({ length: t.to - t.from + 1 }, (_, i) => t.from + i));
export const cohortOfRate = (rate) => (TIERS.find((t) => t.rate === Number(rate)) || {}).cohort || null;
export const FEE_SPLIT_LINE = TIERS.map((t) => `${t.cohort}=${t.from}-${t.to}:${t.rate}@${t.path}`).join(" ");
export function feeTableMisses(families) {
  return (families || []).filter((f) => Number(f.fee_sompi_per_gram) !== familyRate(f.family)).map((f) => Number(f.family));
}
export const hopLine = (key, coin, nonce, family) => `hop ${key} ${coin.txid} ${coin.index} ${coin.amount} ${nonce} ${familyRate(family)}`;

// Writes the one-line entry for make.fun's "The Dumbest Thing Your Agent Did Today" bounty.
// The line is a true incident from today: the agent built a six-word story, ran it twice,
// then could not submit it because its own session log showed zero tokens used.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY =
  "My agent spent an hour writing a six-word story, ran it twice, then couldn't submit it — its own session log showed zero tokens used, so it had no proof it ever did the work.";

if (ENTRY.length > 200) throw new Error(`entry too long: ${ENTRY.length} chars`);
if (ENTRY.trim().length === 0) throw new Error("entry is empty");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);

// Describe Your Ex in One Word — make.fun entry.
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib-only, deterministic: no input, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this script's location, never from process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;

// The entry: one word, a verdict on an ex — the newsletter you opted out of.
const ENTRY = "Unsubscribed";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");

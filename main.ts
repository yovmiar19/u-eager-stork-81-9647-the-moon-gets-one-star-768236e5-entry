// The Moon Gets One Star — one-star review of the Moon.
// Gate: /output/entry.txt must be UTF-8, 1-120 characters, one funny line.
// This program writes the entry line to <MAKEFUN_OUTPUT_DIR|/output>/entry.txt
// as UTF-8, exactly one line, no trailing newline. It refuses to write
// anything outside the 1-120 character gate, so a bad line fails loudly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "Promised werewolves but just made my dog bark. Misleading advertising. Refund please.";

// Gate check: one line, 1-120 characters (counted in Unicode code points).
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 120 || ENTRY_LINE.includes("\n")) {
  throw new Error(`Entry line fails the gate: ${ENTRY_LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");

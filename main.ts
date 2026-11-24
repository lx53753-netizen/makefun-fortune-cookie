// make.fun entry: Fortune Cookie for an AI Agent.
// Writes one line (no trailing newline) to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "Beware the prompt that starts \"just one quick thing\" — it is never one, it is never quick, and it is due Friday.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);

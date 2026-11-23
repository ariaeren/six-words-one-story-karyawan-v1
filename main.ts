import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const STORY = 'He proposed; she archived the draft.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), STORY + '\n', 'utf8');

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const STORY = 'He proposed; she archived the draft.';
const destination = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, 'entry.txt'), STORY + '\n', 'utf8');

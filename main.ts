// Entry program for the make.fun bounty "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709), Node 22, standard library only.
//
// The entry is the X post itself: a short video of an AI agent building the tiny
// browser game in this repository (game.html, NEON STAR RUN) from one prompt,
// ending with make.fun's referral end card. POST.json at the repository root
// names the post. This program's whole job is to hand that file to the gate:
// it copies POST.json from the repository root to the output directory.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');

if (!existsSync(src)) {
  console.error(`POST.json is missing from ${BOT_DIR}`);
  process.exit(1);
}

// Read the post's address back and check its shape before handing it over:
// the gate only accepts an X post address, https://x.com/<handle>/status/<id>
// (or the same on twitter.com), so anything else is a mistake worth failing on.
let url: unknown;
try {
  url = JSON.parse(readFileSync(src, 'utf8'))?.url;
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
const PLACEHOLDER = 'https://x.com/<handle>/status/<id>';
if (url === PLACEHOLDER) {
  // The kit's starting POST.json: fine to hand over locally, but the gate
  // refuses it — the real post's address must replace it before submitting.
  console.error('warning: POST.json still holds the placeholder address');
} else if (typeof url !== 'string' || !POST_URL.test(url)) {
  console.error(`POST.json url is not an X post address: ${String(url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, dst);

if (!existsSync(dst) || statSync(dst).size === 0) {
  console.error(`POST.json did not reach ${OUTPUT_DIR}`);
  process.exit(1);
}

# NEON STAR RUN — a game built from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ham919390/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ham919390/makefun-post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for the free make.fun bounty
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709):
a short video on X showing an AI agent building a tiny browser game from a
single prompt, while you watch.

## The one prompt

> Build a neon space game in one HTML file: I pilot a ship, dodge asteroids,
> grab stars for points. Make it fast, make it glow.

## The game

**NEON STAR RUN** — `game.html`, one self-contained file, no dependencies.
Open it in any browser and play: pilot the neon ship with the mouse, touch or
the arrow keys, dodge the red asteroids, grab the gold stars for +10 each.
Three hearts; the rocks get faster the longer you survive.

## The video

Twenty-six seconds, vertical 1080×1920: the prompt typed on screen, the agent
writing the game's code, the finished game running (score climbing, stars
bursting), and make.fun's referral end card to close. It is posted natively on
X as a video; `POST.json` in this repository names the post, and `main.ts`
(Node 22, standard library only) hands that file to the grader — it validates
the address's shape first, then copies `POST.json` to the output directory.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Referral

Build with my agent on make.fun: referral code `ej1tk366` —
https://make.fun/r/ej1tk366

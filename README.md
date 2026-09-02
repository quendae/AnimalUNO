# AnimalUNO

A lightweight browser card game inspired by classic UNO-style rules, re-themed around the Roblox game **Animal Hospital**.

## Current build

- 4-player game: Intern vs Barney, Ratthew and Ron from Accounting
- complete 108-card deck
- matching by color / number / action
- Draw Two / +2, Skip, Reverse, Wild and Wild +4
- **house rule: Draw Two / +2 cards can be stacked**; the penalty grows `+2 → +4 → +6 → +8...` until a player cannot answer with another +2
- Wild +4 legality check; Wild +4 does not participate in the +2 stacking chain
- one-card draw flow with optional play/pass; after drawing, only the drawn card may be played
- UNO declaration and two-card penalty when missed
- simple bot decision logic, including +2 chain decisions
- responsive desktop, tablet, phone portrait and phone landscape layouts
- reduced-motion support
- no build step or external runtime library required
- debug hook: `window.AnimalUNO`

## Character-front card design

The cards follow the approved themed-UNO direction: the **characters and anomalies are on the card fronts**, while the four standard colors stay mechanically independent.

Number cards:

- `0` — Officer Duckman
- `1` — Dr. Harlow
- `2` — Barney
- `3` — Ratthew
- `4` — Ron from Accounting
- `5` — Liz
- `6` — Sam
- `7` — Black Eyes
- `8` — Hollow Face
- `9` — Mismatching Face

Special cards:

- **Draw Two / +2** — Shopkeeper Nurse
- **Skip** — Smiling with Creepy Eyes
- **Reverse** — Three Eyes
- **Wild** — Ghost
- **Wild +4** — Stalker

The portraits are bundled as a local sprite under `assets/animaluno-portraits.svg`, so the game remains self-contained and does not hotlink the reference wiki.

## Colors

AnimalUNO keeps four standard playable colors:

- Red
- Blue
- Green
- Yellow

The visual direction uses a dark Animal Hospital night-shift card room, strong physical card depth, black rounded card borders and high-contrast character portraits.

## Draw Two stacking house rule

When a player receives a pending `+2`, they have two options:

1. play another `+2`, adding two more cards to the pending penalty and passing the chain to the next player, or
2. take the full accumulated penalty and lose the turn.

Only `+2` cards extend this chain. Wild +4 remains a separate effect.

## Run

Open `index.html` in a modern browser. No server or build step is required.

## Multiplayer roadmap

The game state and action surface are intentionally kept compact so multiplayer can follow the supplied P2P architecture:

1. one authoritative host simulation,
2. guests submit actions rather than state,
3. per-seat filtered state views,
4. stable seat IDs,
5. bots execute only on the host,
6. WebRTC DataChannels with a small signaling service,
7. offline play remains independent of signaling.

The current repository is the playable single-player vertical slice. Multiplayer should be added as a thin transport/session layer rather than by duplicating rules.

## Figma

Initial gameplay concept: https://www.figma.com/design/77CmEym8NW50oC2KuqLC6c

## Disclaimer

This is a fan-made prototype and is not affiliated with Mattel, Roblox, or the creators of Animal Hospital.

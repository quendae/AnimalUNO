# AnimalUNO

A lightweight browser card game inspired by classic UNO-style rules, re-themed around the Roblox game **Animal Hospital**.

## Current build

- 4-player game: Dr. Harlow vs Barney, Ratthew and Ron
- complete 108-card deck
- matching by color / number / action
- Skip, Reverse, Draw Two, Wild and Wild Draw Four
- Wild Draw Four legality check
- one-card draw flow with optional play/pass
- UNO declaration and +2 penalty when missed
- simple host-side-style bot decision logic
- responsive desktop, tablet, phone portrait and phone landscape layouts
- reduced-motion support
- no external runtime dependencies: open `index.html` directly
- debug hook: `window.AnimalUNO`

## Theme mapping

The four standard colors are presented as hospital departments:

- Red — Emergency
- Blue — Diagnostics
- Green — Recovery
- Yellow — Pharmacy

The visual direction starts from the supplied SKAT baseline: cards remain the dominant objects, the table has physical depth, active states use a warm gold accent, and the interface stays dark enough for the cards to remain highly legible. The theme is shifted from a formal card room toward a playful late-night veterinary clinic.

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

# What Do

Brief synopsis of each repo. Last push date noted to help decide what to keep. Reviewed 2026-11-19.

## Web apps (GitHub Pages)

**lawn** — https://dassey.github.io/lawn/
Lawn & Garden Almanac. Month-by-month plan for lawn, flower beds and vegetable garden, fitted to any US ZIP code. Looks up local weather history, estimates frost dates and hardiness zone, picks the usual grass (six cool- and warm-season grasses), and puts each job on its best day of the live forecast. Calendar, journal, products, library, .ics export. Every task cites its source and evidence strength. Static, no build, no accounts. Last push 2026-11.

**Cruncher** — https://dassey.github.io/Cruncher/
Neon-synthwave VR math brawler for Meta Quest 3 (WebXR, Meta Immersive Web SDK, TypeScript). A rule flashes overhead (multiples of 7, make 24, factors of 36) and you punch the number blocks that fit while "Bugz" attack; boss round every 5th. A hidden spaced-repetition engine serves the times-table facts the kid is weakest on. Also plays on desktop with the mouse. Auto-deploys from `main` by GitHub Actions. Last push 2026-11.

**ArmorFit** — https://dassey.github.io/ArmorFit/
Fits 3D-printable cosplay armor to your body in the browser. Enter measurements (or get 13 of them from a front and side photo, detected on-device), drop in STL/OBJ/3MF pieces, place them on a mannequin built to your size, see a tight/good/loose gap heatmap, auto-scale, export print-ready files. Fully client-side. Last push 2026-10.

**skyline-forge** — https://dassey.github.io/skyline-forge/
3D-printable city maps. Search a US city, neighbourhood or address, pick plate shape, layers and colours, add a route or your own data, export 3MF, STL or OBJ. Groups layers onto the filaments your printer has; the 3MF opens in Bambu Studio/OrcaSlicer with parts already assigned. Building heights and roofs come from USGS LiDAR where available. Last push 2026-11.

**BetterNotes** — https://dassey.github.io/BetterNotes/
Offline handwriting and notes PWA for iPad/iPhone. Apple Pencil ink, text, images, lecture audio, and Recall: anything you highlight becomes a spaced-repetition flashcard. All data stays on device. Last push 2026-11.

**Highway-to-Hell** — https://dassey.github.io/Highway-to-Hell/
US road deaths mapped. Every located NHTSA FARS fatal crash 2001 to 2024 (898,888 deaths, 821,145 crashes). National heat field that resolves to individual crash dots with the full case file; breakdowns by who died and why, pin with 1–10 mile ring, road search, route check. Largest repo (about 400 MB checked out, 4,600+ files). Last push 2026-10.

**SayWho** — https://dassey.github.io/SayWho/
Book Dialogue Speaker Tagger. Upload a manuscript and it identifies who is speaking and tags each line of dialogue for TTS or analysis. Three files, no build. Last push 2026-10.

**TRN (Trip-Report-Notes)** — https://dassey.github.io/Trip-Report-Notes/
Trip Report Notes. Phone PWA that fills in one person's section of a Word trip report offline. Notes stay on the device and export as .docx or plain text. Missions can be made without a template; a summary board exports as .pptx. Last push 2026-10.

**spec** — https://dassey.github.io/spec/
Wavefield. Zoomable visualization of the radio spectrum from 300 kHz to 100 GHz where every line is a real channel (AM/FM, ham, LoRa, Wi-Fi, Bluetooth, cellular, GPS, radar). Zoom down to the signal shape, inspect a channel, compare two side by side, US/EU regions. Its README still says "enable GitHub Pages"; the page is already live. Last push 2026-09.

**TRF** — https://dassey.github.io/TRF/
Travel Request Form. Fills in traveler info, event, air/hotel/car/per diem requirements for MTC travel and writes them into a PDF with pdf-lib. README is a one-word stub. Last push 2026-09.

**Northland (BBB)** — https://dassey.github.io/BBB/
Northland Driving business site. One-on-one driving lessons for adult women in Gladstone, MO and the KC Northland, in English or Tagalog (header toggle). Home, drivers, pricing, Missouri permit guide, permit practice quiz, contact/booking. Has a CNAME for a custom domain. Last push 2026-08.

**perdiem** — https://dassey.github.io/perdiem/
US Per Diem Rate Optimizer. Search by city/state/ZIP and compare nearby GSA per diem rates. No README. Last push 2026-07.

**P2H** — https://dassey.github.io/P2H/
PPTX2HTML (fork). Upload a .pptx and download one self-contained HTML slideshow that works offline. Two modes: keep the original PowerPoint layout, or re-flow the content into a clean themeable template. Themes, nav options, animated canvas backgrounds, speaker notes, image recompression. Runs in the browser. Last push 2026-06. Not linked from the README before now.

## Code only (no web page)

**vibecut** — https://github.com/dassey/vibecut
VibeCut, a Blender 5.1 addon for articulated 3D-print prep. Cuts organic meshes into parts joined by ball-and-socket joints or hinges, with joint auto-detection and placement gizmos. Includes a Support Wizard that builds printable supports (pillars, trees, cradles) per overhang region, an overhang heatmap, and a matching Bambu Studio print profile. README is one line; `SUPPORTS_GUIDE.md` is the real documentation. Last push 2026-11.

**YABlenderMCP** — https://github.com/dassey/YABlenderMCP
MCP server plus Blender addon giving AI agents control of Blender 5.1: modeling, materials, lighting, animation, rendering, 3D-print prep. 106 tools, 4 prompts and a skill. Local only; published on PyPI as `yab-mcp`. Last push 2026-11.

**DarkJiggle** — https://github.com/dassey/DarkJiggle
Windows tray utility in Zig. Jiggles the mouse invisibly to keep the PC awake and dims the monitors while you are away; backs off when you touch the mouse. Last push 2026-08.

**wint-manual-builder** — https://github.com/dassey/wint-manual-builder (private)
WIN-T field support docs. Study notes and one-task phone handouts for supporting JNN, CPN and STT in the field (AO16, Palo Alto firewall, CUCM 14), plus a field-issue catalog and a script that searches trip-report PDFs by topic. The original .docx manual builder now sits in `archive/` and is marked as mostly wrong, so the repo name no longer matches the content. Last push 2026-11.

## Empty or gutted

- **stl** — repo still exists but holds only a one-line README; the Mobile STL Viewer and its page are gone (emptied 2026-11-14).
- **DoShorts** — created, no commits on any branch.
- **mcp** — created, no commits on any branch.

## Gone since the last review

These no longer resolve (repo not reachable, Pages URL returns 404), so they were removed from the README: **png** (PNG Metadata Auditor), **svg** (name tag generator), **tools** (links page), **HBG** (image to heightmap STL), **comfyui_workflow** (video workflow extractor), **cpn** (Knight's Descent), **MDMP** (harness walkthrough), **SaveImage** (Chrome extension), **gen**.

## Candidates to consider deleting

- **stl**, **DoShorts**, **mcp** — nothing in them.
- **P2H** — a fork, untouched since June 2026; keep only if you still use it.
- **wint-manual-builder** — keep, but rename to match what it is now.

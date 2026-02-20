# Changelog: VENA Visual Engine

All notable changes to this project will be documented in this file.

---

## [0.2.7] - 2026-02-20

### Fixed
- **Systemic Layout Sanitization:** Purged all structural utilities (`flex`, `grid`, `h-screen`, `w-full`) from all protocols (`erpbsg`, `dammgo`, `vena`, `lab`). The Page is now the sole owner of positioning (Layout Sovereignty Rule).
- **Typography Safety:** Capped `erpbsg-title-access` at `text-4xl` to prevent vertical overflows in 600px altitude viewports.
- **Margin Cleanup:** Removed all hardcoded external margins (`mb-10`, `mb-12`) from components to allow frictionless contextual placement.

---

## [0.2.2] - 2026-02-20

### Added
- **Sovereign Slices:** Modular architecture for brand protocols (`src/protocols/`).
- **Core Separation:** Isolated shared infrastructure in `src/core/`.
- **Rule Sovereignty:** Added `venaRules` to the `vena` protocol, encapsulating animation logic like `animate-scan`.
- **New Shortcuts:** Official integration of `erpbsg-button-manual` and `erpbsg-button-back` for the Hub ecosystem.

### Changed
- **Architecture:** Refactored `src/index.ts` to a pure Factory pattern (agnostic orchestrator).
- **Style Hierarchy:** Delegated `borderRadius` and specific tokens to each protocol's theme.

---

## [0.2.1] - 2026-02-20

### Fixed
- **Clean Build:** Removed the `group` utility from shortcuts to eliminate "unmatched utility" warnings in UnoCSS. Developers must now apply `group` manually in the DOM.
- **Hygiene:** Purged `unocss build` from the package script to ensure a silent and professional compilation.

---

## [0.2.0] - 2026-02-19

### Added
- **Multi-Protocol Support:** Dynamic switching between `erpbsg`, `dammgo`, `vena`, and `kode-reboot`.
- **Altitude Protocol:** Native implementation of **Triple Vertical Shielding** in `bos-title-hero`.
- **Behavior Injection:** Automatic Preflights for Application reality (hermetic layout resets).

### Changed
- **DX:** Updated `tsconfig.json` to use `bundler` resolution for modern ESM compatibility.

---

## [0.1.x] - 2026-02-16

### Initial Release
- Basic UnoCSS preset with dammgo labs tokens.
- Initial signature elements: `precision-bracket`, `infra-grid`.

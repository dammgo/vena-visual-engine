# VVE Architecture: The Sovereign Factory

This document describes the internal engineering of **VENA Visual Engine**. The engine is designed as a **Multi-Protocol Factory** that generates a tailored UnoCSS configuration based on the target project's reality.

---

## 1. The Core (DNA)
The Core resides in `src/core/` and contains the "Sacred Constants" shared by all protocols:
- **Signature Elements:** Components like `precision-bracket` and `infra-grid` that define the dammgo labs aesthetic.
- **Base Tokens:** The primary color palette (Slate, Pink, Cobalt) and typography (Montserrat, Inter, JetBrains Mono).

## 2. The Protocol Slices
Starting from v0.2.0, each brand/project has its own **Slice** in `src/protocols/`.
- Each slice is an independent module containing its own component shortcuts and theme overrides.
- This prevents "DNA Bleed" where a change in the Hub affects a Landing page.

## 3. The Factory (Context Awareness)
The `presetVena` function acts as a factory. It receives a configuration object and performs the following:

### A. Theme Merging
It merges the Core tokens with the Protocol-specific tokens. 
*Example:* It sets `borderRadius: 0px` for `kode-reboot` while keeping `2px` for `erpbsg`.

### B. Preflight Injection
This is the "Reset of Authority". Based on the protocol, the factory injects global CSS:
- **Application Reality:** Injects `height: 100vh` and `overflow: hidden` to the root.
- **Content Reality:** Injects optimized line-heights and scrolling behaviors.

### C. Rule Assembly (Animation DNA)
VVE v0.2.2 introduced **Rule Sovereignty**. Custom CSS rules (e.g., keyframes, specialized animations like `animate-scan`) are no longer global. They are defined within each protocol slice and assembled only when that protocol is active.

### D. Shortcut Assembly
It aggregates the Core shortcuts with the selected Protocol shortcuts and the **Altitude-Aware Typography** to build the final UnoCSS array.

---

## 4. The Layout Sovereignty Rule (Strict Constraint)

VVE strictly distinguishes between **DNA (The Skin)** and **Layout (The Skeleton)**. As of v0.2.7, the engine has been purged of all structural positioning utilities.

### DNA belongs to VVE:
Shortcuts for components (Buttons, Inputs, Cards, Typography) MUST live in VVE. This ensures brand consistency, semantic authority, and cinematic textures.

### Layout belongs to the Page:
Positioning utilities (`flex`, `grid`, `flex-row`, `h-screen`, `w-full`, `margins`, `paddings-external`) MUST remain in the project's local source code (`.tsx`).

**Key Engineering Reasons:**
1. **Scanner Visibility:** CSS engines (UnoCSS/Tailwind) need to see responsive breakpoints (e.g., `md:`, `lg:`) in the local source to compile them correctly. Shortcuts in `node_modules` are often invisible to local responsive scanners.
2. **Altitude Awareness:** Layout is height-dependent. A design that works at 1080px height might fail at 600px. VVE cannot predict the "altitude" of the viewport; only the Page can respond to it.
3. **Zero Opinion Policy:** VVE provides the luxury parts, but it should not "dictate" how the room is furnished. Keeping layout local prevents developers from having to "fight" the engine to achieve specific design goals.

---

## 5. Execution Flow

1. **Input:** `{ protocol: 'erpbsg' }`
2. **Registry Lookup:** Factory finds the `erpbsg.ts` slice.
3. **Reset Application:** Preflights for "Application Reality" are queued.
4. **Altitude Check:** The **Triple Vertical Shielding** logic is integrated into the typography shortcuts.
5. **Logic Merge:** Brand-specific rules (animations) are merged into the preset.
6. **Output:** A fully compiled UnoCSS Preset ready for consumption.

---
**dammgo labs** - _Engineering Longevity._

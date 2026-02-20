# VVE Architecture: The Sovereign Factory

This document describes the internal engineering of **VENA Visual Engine**. The engine is designed as a **Multi-Protocol Factory** that generates a tailored UnoCSS configuration based on the target project's reality.

---

## 1. The Core (DNA)
The Core resides in `src/core/` and contains the "Sacred Constants" shared by all protocols:
- **Signature Elements:** Components like `precision-bracket` and `infra-grid` that define the dammgo labs aesthetic.
- **Base Tokens:** The primary color palette (Slate, Pink, Cobalt) and typography (Montserrat, Inter, JetBrains Mono).

## 2. The Reality Engine (v0.3.0+)
Starting from v0.3.0, VVE introduces **Reality Categories (VRC)**. The engine is no longer static; it adjusts its internal scales based on the intended use case of the page.

### VENA Units (VU)
The engine uses dynamic CSS variables to calculate sizes and spacing:
- `--vve-u-font`: The master multiplier for typography.
- `--vve-u-gap`: The master multiplier for spacing and padding.

### Reality Profiles
By wrapping a section in a reality class, these multipliers change their mathematical behavior:
- **`.vve-reality-app`:** Prioritizes **Height (`vh`)**. Ideal for "Vault" interfaces (Login, Dashboards). It automatically shrinks components in short viewports to prevent vertical overflow.
- **`.vve-reality-content`:** Prioritizes **Width (`vw`)**. Ideal for reading (Blogs, Atlas).
- **`.vve-reality-landing`:** Aggressive scales for high-impact marketing.

## 3. The Protocol Slices
Each brand/project has its own **Slice** in `src/protocols/`.
- Slices now consume **VENA Units** instead of fixed pixels or rems.
- *Example:* `[font-size: calc(var(--vve-u-font) * 3)]`.

## 4. The Factory (Context Awareness)
The `presetVena` function orchestrates the assembly:
- **Theme Merging:** Merges core and protocol tokens.
- **Preflight Injection:** Injects the **Reality Engine** (CSS variables) and brand resets.
- **Rule Assembly:** Merges brand-specific animations (rules).
- **Shortcut Assembly:** Aggregates elastic shortcuts and **Altitude-Aware Typography**.

---

## 5. The Layout Sovereignty Rule (Strict Constraint)

VVE strictly distinguishes between **DNA (The Skin)** and **Layout (The Skeleton)**.

### DNA belongs to VVE:
Shortcuts for components (Buttons, Inputs, Cards, Typography) MUST live in VVE. These components are now **Elastic** by default.

### Layout belongs to the Page:
Positioning utilities (`flex`, `grid`, `flex-row`, `h-screen`, `w-full`) MUST remain in the project's local source code (`.tsx`).

---
**dammgo labs** - _Engineering Reality._

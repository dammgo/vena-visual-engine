# VVE Specification: The Sovereign Taxonomy

This document defines the technical and visual nature of the protocols integrated into **VENA Visual Engine**. Each protocol responds to a specific **Hardware Reality** and **Business Purpose**.

---

## 1. Reality Categories (Context Awareness)

VVE classifies each project into one of these three realities to determine the "Preflights" (Global CSS) to be injected:

### A. Reality: APPLICATION (The Hub Model)
- **Protocol:** `erpbsg`
- **Behavior:** Strict, hermetic, App-like.
- **Golden Rules:**
    - `html, body { height: 100vh; overflow: hidden; }`
    - Mandatory use of **Triple Vertical Shielding** (Altitude-Aware).
    - Priority: Information density and fatigue reduction.

### B. Reality: LANDING (The Corp Model)
- **Protocol:** `dammgo`
- **Behavior:** Editorial, expansive, fluid.
- **Golden Rules:**
    - `overflow-y: auto`.
    - Monumental scale permitted throughout the viewport.
    - Priority: Visual impact, storytelling, and "The Wow Effect".

### C. Reality: LABORATORY (The Blog Model)
- **Protocol:** `kode-reboot`
- **Behavior:** Brutalist, typographic, raw.
- **Golden Rules:**
    - Rigid 0.5px grid.
    - Border Radii: 0px.
    - Priority: Code readability and technical authority.

---

## 2. Style Hierarchy (The Chain of Command)

1.  **Core Tokens:** Base colors and fonts of the dammgo labs ecosystem.
2.  **Signature Elements:** Elements that scream "Sovereignty" (`precision-bracket`, `synapse-line`).
3.  **Protocol Overrides:** Specific adjustments each brand makes over core elements (e.g., `rounded-sm` in Hub vs. `rounded-none` in Lab).

---

## 3. Altitude Protocol (Triple Vertical Shielding)

Implemented in v0.2.0 to combat "Developer's Bias". No monumental header should compromise operability on 13" laptops.

- **Operational Level (< 750px height):** Compact scale (`text-5xl`).
- **Desktop Level (> 850px height):** Standard scale (`text-8xl`).
- **Monumental Level (> 1000px height):** Luxury scale (`text-[9.5rem]`).

---
**dammgo labs** - _Visual Sovereignty Protocol._

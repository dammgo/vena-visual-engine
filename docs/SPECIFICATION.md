# Technical Specification: VENA Units (VU)

This document defines the mathematical foundation of the elastic units used in VENA Visual Engine v0.3.0+.

---

## 1. Core Variables

VVE defines two primary multipliers that serve as the "Atomic Unit" for all components.

| Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--vve-u-font` | Typographic multiplier | `1rem` |
| `--vve-u-gap` | Spacing/Padding multiplier | `1rem` |

---

## 2. Reality Profiles (VRC)

The mathematical behavior of the multipliers changes based on the active reality class.

### A. App Reality (`.vve-reality-app`)
**Goal:** Prevent vertical overflow in "Vault" interfaces.
- **Font Formula:** `clamp(0.85rem, 4.5vh, 1.15rem)`
- **Gap Formula:** `clamp(0.5rem, 2vh, 1.5rem)`
- *Behavior:* As the viewport height decreases, the components shrink proportionally to stay visible.

### B. Content Reality (`.vve-reality-content`)
**Goal:** Optimal readability for documents.
- **Font Formula:** `clamp(1rem, 1.2vw, 1.25rem)`
- **Gap Formula:** `clamp(1rem, 2vw, 2.5rem)`
- *Behavior:* Sizes are calculated based on the width of the reading area.

### C. Landing Reality (`.vve-reality-landing`)
**Goal:** Monumental impact.
- **Font Formula:** `clamp(1.1rem, 2vh + 1vw, 1.5rem)`
- **Gap Formula:** `clamp(1.5rem, 4vh, 4rem)`

---

## 3. Implementation Standard

When creating shortcuts in a protocol slice, developers must use the following patterns:

### Typography
```css
/* Bad (Fixed) */
['brand-title', 'text-4xl']

/* Good (Elastic) */
['brand-title', '[font-size:calc(var(--vve-u-font)*3.5)]']
```

### Spacing
```css
/* Bad (Fixed) */
['brand-card', 'p-10']

/* Good (Elastic) */
['brand-card', '[padding:calc(var(--vve-u-gap)*2)]']
```

---
**dammgo labs** - _Engineering Precision._

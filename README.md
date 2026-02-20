# VENA Visual Engine 🚀

> **"Reality-Aware Infrastructure. Engineering as Art."**

[![Version](https://img.shields.io/npm/v/@dammgo/vena-visual-engine?color=E91E63&label=VVE)](https://www.npmjs.com/package/@dammgo/vena-visual-engine)
[![License](https://img.shields.io/npm/l/@dammgo/vena-visual-engine?color=00d4ff)](https://github.com/dammgo/vena-visual-engine/blob/main/LICENSE)

## 🧬 The Manifesto

The web has been colonized by the generic. **VENA Visual Engine (VVE)** is a rebellion. It is not another CSS framework for "friendly" apps. It is a **Sovereign Infrastructure** for building digital interfaces that reflect precision, authority, and longevity. 

Starting from **v0.3.0**, VVE evolves from a static preset to a **Reality-Aware Engine** that understands the observer's environment and the developer's intention.

---

## 🏛️ Axioms of the Engine

1.  **Holistic Responsiveness:** We don't just look at width. We look at **Intention** and **Altitude**. Components shrink and expand based on the total available surface area (Width + Height).
2.  **The Reality Categories (VRC):** The engine differentiates between **App**, **Content**, and **Landing** realities, injecting specific mathematical formulas for typography and spacing in each.
3.  **Layout Sovereignty:** VVE provides the **DNA (The Skin)**, but the **Page owns the Skeleton**. Structural positioning (Flex, Grid, Height) remains local to ensure perfect compiler visibility and flexibility.
4.  **Precision over Organic:** We reject the "round-everything" culture. Surfaces should feel like precision-cut steel, calibrated for professional hardware.

---

## 🛠️ Installation

```bash
npm install @dammgo/vena-visual-engine@alpha unocss
```

## 📡 Quick Start (UnoCSS)

VVE is designed to be consumed as a **UnoCSS Preset**.

```typescript
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetVena } from '@dammgo/vena-visual-engine'

export default defineConfig({
  presets: [
    presetVena({
      protocol: 'erpbsg' // Options: 'erpbsg' | 'dammgo' | 'vena' | 'kode-reboot'
    }),
  ],
  content: {
    pipeline: {
      include: [
        'src/**/*.{js,ts,jsx,tsx}',
        'node_modules/@dammgo/vena-visual-engine/dist/**/*.js', // Required for Shortcut resolution
      ],
    },
  },
})
```

---

## 🎭 Activating Realities

To use the elastic units of VVE, wrap your container with a **Reality Class**:

- **`.vve-reality-app`**: Prioritizes height. Ideal for Logins/Dashboards. Everything fits in 600px altitude.
- **`.vve-reality-content`**: Prioritizes width and readability. Ideal for Documentation/Blogs.
- **`.vve-reality-landing`**: Prioritizes monumental impact. Ideal for Marketing.

---

## 📚 Documentation

Detailed guides for our sovereign syntax:

- [**Architecture Blueprint**](./docs/ARCHITECTURE.md): The multi-protocol factory and the Elastic Root.
- [**Reality Manual**](./docs/REALITY_MANUAL.md): How to implement intentions and use VENA Units.
- [**Technical Specification**](./docs/SPECIFICATION.md): The mathematical formulas behind VRC.
- [**Protocol Handbook**](./docs/PROTOCOL_HANDBOOK.md): Registering and building new brand identities.
- [**Changelog**](./docs/CHANGELOG.md): Tracking the visual revolution.

---
**dammgo labs** - _Engineering Reality._
© 2026. Distributed under the MIT License.

# Protocol Handbook: Expanding the Visual Engine

This handbook defines the standardized process for registering and developing a new **Visual Protocol** within VVE. Following these steps ensures that the new brand inherits the engine's robustness without compromising the DNA of other brands.

---

## 1. Identity Registration (The Registry)

Each protocol must be registered in the `VenaOptions` interface within `src/index.ts`.

```typescript
export interface VenaOptions {
  protocol?: 'erpbsg' | 'dammgo' | 'vena' | 'kode-reboot' | 'new-brand'
}
```

## 2. Anatomy of a Protocol (The Slice)

Each protocol lives in its own file within `src/protocols/` (v0.2.0+). It must export an object with the following structure:

### A. Tokens (Theme)
Defines accent colors and specific border variations.
- **Accent:** The color representing the brand's life signal.
- **Surface:** The base tone of its containers.

### B. Shortcuts (Components)
Defines atomic components using the brand prefix (e.g., `brand-button`). 
**Rule:** Do not overwrite other brands' shortcuts.

### C. Preflights (Behaviors)
Defines global styles to be injected into the `root` when this protocol is active.
- **App Mode:** `overflow: hidden`, `height: 100vh`.
- **Content Mode:** Optimized `line-height`, specific `font-family`.

---

## 3. Development Process (The Flow)

1.  **Telemetry Analysis:** Before defining scales, review the likely hardware environment (Test of the Three Environments).
2.  **DNA Definition:** Establish border radii (0px to 6px) and the authority gradient.
3.  **Slice Coding:** Implement shortcuts in an isolated file.
4.  **Showroom Validation:** Test components in the VVE test terminal before publishing.

---

## 4. Blacklist (Prohibitions)

- **Prohibited:** Using absolute pixel values for spacing (use the `rem` scale).
- **Prohibited:** Injecting external fonts outside the `WebFonts` preset.
- **Prohibited:** Modifying `src/core/` to solve a brand-specific problem.

---
**dammgo labs** - _Engineering Sovereignty._

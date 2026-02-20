# Reality Manual: Implementing Intention

This manual explains how to use the **VENA Reality Categories (VRC)** to create interfaces that react holistically to the observer's environment.

---

## 1. The Core Philosophy

Traditional responsive design only looks at **Width**. VRC looks at **Intention**. 
By declaring the "Reality" of a page, you tell the **VENA Visual Engine** how to prioritize its internal elastic units (`--vve-u-*`).

---

## 2. The Reality Classes

To activate a reality, simply wrap your main container or page root with one of the following classes:

### A. `.vve-reality-app` (The Vault)
**Use case:** Login pages, Dashboards, Control Panels.
- **Behavior:** Prioritizes **Vertical Real Estate**. 
- **Effect:** Components (titles, inputs, buttons) will shrink automatically when the window height is low (e.g., 600px) to prevent vertical overflow and eliminate the need for global scrolling.
- **Goal:** Hermetic, 1:1 visibility.

### B. `.vve-reality-content` (The Atlas)
**Use case:** Blogs, Documentation, Case Studies.
- **Behavior:** Prioritizes **Horizontal Readability**.
- **Effect:** Standard typographic scales optimized for reading. Scroll is expected and encouraged.
- **Goal:** Deep focus and legibility.

### C. `.vve-reality-landing` (The Stage)
**Use case:** Homepages, Marketing Microsites.
- **Behavior:** Prioritizes **Visual Impact**.
- **Effect:** Aggressive scales and larger gaps. It uses a mix of width and height to maximize "monumentality".
- **Goal:** Conversion and brand authority.

---

## 3. Quick Start Guide

In your React/Astro project, apply the class at the highest possible level of the component:

```tsx
// LoginPage.tsx
const LoginPage = () => {
  return (
    <div className="vve-reality-app h-screen overflow-hidden">
       <h3 className="erpbsg-title-access">Sincronizar</h3>
       <LoginForm />
    </div>
  )
}
```

---

## 4. Best Practices

1.  **Don't Mix Realities:** Avoid nesting `.vve-reality-content` inside `.vve-reality-app` unless you are creating a "Sub-Reality" window.
2.  **Trust the Units:** Avoid using `text-5xl` or `p-20` for components that need to be elastic. Use the sovereign shortcuts (e.g., `erpbsg-title-access`) which already have the VENA Units integrated.
3.  **Layout Sovereignty:** Remember that the **Page** still owns the `flex`, `grid`, and `h-screen` definitions. The Reality class only controls the **Internal Scale** of the components.

---
**dammgo labs** - _Engineering Reality._

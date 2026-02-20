import { definePreset } from 'unocss'
import { coreTheme, coreShortcuts, corePresets } from './core'
import { erpbsgShortcuts, erpbsgPreflights, erpbsgTheme } from './protocols/erpbsg'
import { dammgoShortcuts } from './protocols/dammgo'
import { venaShortcuts, venaRules } from './protocols/vena'
import { labShortcuts, labTheme } from './protocols/lab'

export interface VenaOptions {
  /**
   * Visual Protocol to activate.
   * @default 'erpbsg'
   */
  protocol?: 'erpbsg' | 'dammgo' | 'vena' | 'kode-reboot'
}

export const presetVena = definePreset((options: VenaOptions = {}) => {
  const protocol = options.protocol || 'erpbsg'

  // --- 1. THEME ASSEMBLY ---
  const protocolThemes: Record<string, any> = {
    erpbsg: erpbsgTheme,
    'kode-reboot': labTheme,
  }

  const theme = {
    ...coreTheme,
    ...(protocolThemes[protocol] || {})
  }

  // --- 2. SHORTCUT ASSEMBLY ---
  const protocolShortcuts: Record<string, any[]> = {
    erpbsg: erpbsgShortcuts,
    dammgo: dammgoShortcuts,
    vena: venaShortcuts,
    'kode-reboot': labShortcuts,
  }

  const typographyShortcuts = [
    // Triple Vertical Shielding Protocol (Altitude-Aware)
    ['bos-title-hero', 'font-brand font-900 text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-bos-white [@media(min-height:600px)]:text-6xl [@media(min-height:600px)]:xl:text-7xl [@media(min-height:850px)]:text-8xl [@media(min-height:1000px)]:text-[9.5rem]'],
    ['bos-title-terminal', 'font-brand font-900 text-4xl md:text-6xl tracking-tighter uppercase leading-none text-bos-white'],
    ['bos-title-section', 'font-brand font-900 text-[10px] text-bos-gray uppercase tracking-[0.4em] opacity-40'],
  ]

  // --- 3. RULE ASSEMBLY ---
  const protocolRules: Record<string, any[]> = {
    vena: venaRules,
  }

  // --- 4. PREFLIGHT INJECTION ---
  const preflights: any[] = []
  if (protocol === 'erpbsg') {
    preflights.push({
      getCSS: () => erpbsgPreflights
    })
  }

  // --- 5. FINAL FACTORY OUTPUT ---
  return {
    name: '@dammgo/vena-visual-engine',
    theme,
    presets: corePresets,
    shortcuts: [
      ...coreShortcuts,
      ...(protocolShortcuts[protocol] || []),
      ...typographyShortcuts,
    ],
    rules: [
      ...(protocolRules[protocol] || []),
    ],
    preflights,
  }
})

export default presetVena

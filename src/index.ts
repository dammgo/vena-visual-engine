import { definePreset, type Preset, transformerDirectives, transformerVariantGroup, type UserConfig } from 'unocss'
import { coreTheme, coreShortcuts, corePresets, realityPreflights } from './core'
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

/**
 * ATOMIC PRESET: The core DNA of VENA.
 */
export const presetVena = definePreset((options: VenaOptions = {}): Preset => {
  const protocol = options.protocol || 'erpbsg'

  const protocolThemes: Record<string, any> = {
    erpbsg: erpbsgTheme,
    'kode-reboot': labTheme,
  }

  const protocolShortcuts: Record<string, any[]> = {
    erpbsg: erpbsgShortcuts,
    dammgo: dammgoShortcuts,
    vena: venaShortcuts,
    'kode-reboot': labShortcuts,
  }

  const typographyShortcuts = [
    ['bos-title-hero', 'font-brand font-900 font-black tracking-tighter uppercase leading-[0.9] text-white [font-size:calc(var(--vve-u-font)*5)] [@media(min-height:850px)]:[font-size:calc(var(--vve-u-font)*7)] [@media(min-height:1000px)]:[font-size:calc(var(--vve-u-font)*9)]'],
    ['bos-title-terminal', 'font-brand font-900 text-4xl md:text-6xl tracking-tighter uppercase leading-none text-white'],
    ['bos-title-section', 'font-brand font-900 text-[10px] text-muted uppercase tracking-[0.4em] opacity-40'],
  ]

  const protocolRules: Record<string, any[]> = {
    vena: venaRules,
  }

  const preflights: any[] = [
    { getCSS: () => realityPreflights }
  ]

  if (protocol === 'erpbsg') {
    preflights.push({ getCSS: () => erpbsgPreflights })
  }

  return {
    name: '@dammgo/vena-visual-engine',
    theme: {
      ...coreTheme,
      ...(protocolThemes[protocol] || {})
    },
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

/**
 * HOLISTIC CONFIG: Zero-Config entry point for projects.
 */
export const defineVenaConfig = (options: VenaOptions = {}): UserConfig => {
  return {
    presets: [
      ...corePresets,
      presetVena(options)
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ]
  }
}

export default presetVena

import { describe, expect, it } from 'vitest'
import { createGenerator } from '@unocss/core'
import { defineVenaConfig } from '../index'

describe('VVE Sovereign Syntax (Shortcuts)', () => {
  // Usamos la configuración holística para el generador de pruebas
  const uno = createGenerator(defineVenaConfig({ protocol: 'vena' }))

  it('vena-btn-primary should generate cinematic contrast CSS', async () => {
    const { css } = await uno.generate('vena-btn-primary')
    
    expect(css).toContain('background-color:rgba(0,212,255')
    expect(css).toContain('color:rgba(3,7,18')
    expect(css).toMatchSnapshot()
  })

  it('vena-input should generate abisal background and precision brackets', async () => {
    const { css } = await uno.generate('vena-input')
    
    expect(css).toContain('background-color:rgba(3,7,18')
    expect(css).toContain('color:rgba(255,255,255')
    expect(css).toMatchSnapshot()
  })

  it('glass-armor should generate the cinematic glass effect', async () => {
    const { css } = await uno.generate('glass-armor')
    
    expect(css).toContain('backdrop-filter:blur(12px)')
    expect(css).toContain('background-color:rgba(3,7,18,0.1)')
    expect(css).toMatchSnapshot()
  })
})

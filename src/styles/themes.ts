/**
 * @fileoverview Define os temas claro e escuro da aplicação.
 * Sistema de design tokens completo com superfícies, bordas, cores semânticas e sombras.
 */

/**
 * Tema claro - Inspirado em interfaces modernas e limpas.
 */
export const lightTheme = {
  title: 'light',
  // Backgrounds & Superfícies
  background: '#f8fafc',
  surface: '#ffffff',
  surfaceHover: '#f1f5f9',
  surfaceActive: '#e2e8f0',
  surfaceRecessed: '#f8fafc',

  // Bordas
  border: '#e2e8f0',
  borderHover: '#cbd5e1',
  borderSubtle: '#f1f5f9',

  // Textos & Conteúdo
  primary: '#0f172a',
  secondary: '#475569',
  muted: '#94a3b8',
  inverse: '#ffffff',

  // Marca & Ação Primária
  brand: '#2563eb',
  brandHover: '#1d4ed8',
  brandActive: '#1e40af',
  brandText: '#ffffff',
  brandSubtle: '#eff6ff',
  brandBorder: '#bfdbfe',

  // Estados & Feedback
  error: '#dc2626',
  errorBg: '#fef2f2',
  errorBorder: '#fca5a5',
  errorText: '#b91c1c',

  // Formulários & Inputs
  inputBg: '#ffffff',
  inputBorder: '#cbd5e1',
  inputFocusBorder: '#2563eb',
  focusRing: 'rgba(37, 99, 235, 0.16)',

  // Sombras & Elevação
  cardShadow: '0 1px 3px rgba(15, 23, 42, 0.04), 0 10px 25px -5px rgba(15, 23, 42, 0.08)',
  cardBorder: '1px solid #e2e8f0',

  // Botões Desabilitados
  buttonDisabledBg: '#f1f5f9',
  buttonDisabledText: '#94a3b8',
  buttonDisabledBorder: '#e2e8f0'
};

/**
 * Tema escuro - Paleta refinada em tons slate/obsidian com alto contraste e legibilidade.
 */
export const darkTheme = {
  title: 'dark',
  // Backgrounds & Superfícies
  background: '#090d16',
  surface: '#111726',
  surfaceHover: '#182032',
  surfaceActive: '#1f293d',
  surfaceRecessed: '#0d1320',

  // Bordas
  border: '#1e293b',
  borderHover: '#334155',
  borderSubtle: 'rgba(255, 255, 255, 0.05)',

  // Textos & Conteúdo
  primary: '#f8fafc',
  secondary: '#94a3b8',
  muted: '#64748b',
  inverse: '#0f172a',

  // Marca & Ação Primária
  brand: '#3b82f6',
  brandHover: '#2563eb',
  brandActive: '#1d4ed8',
  brandText: '#ffffff',
  brandSubtle: 'rgba(59, 130, 246, 0.12)',
  brandBorder: 'rgba(59, 130, 246, 0.25)',

  // Estados & Feedback
  error: '#f87171',
  errorBg: 'rgba(239, 68, 68, 0.1)',
  errorBorder: 'rgba(239, 68, 68, 0.25)',
  errorText: '#fca5a5',

  // Formulários & Inputs
  inputBg: '#0d1320',
  inputBorder: '#1e293b',
  inputFocusBorder: '#3b82f6',
  focusRing: 'rgba(59, 130, 246, 0.25)',

  // Sombras & Elevação
  cardShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  cardBorder: '1px solid rgba(255, 255, 255, 0.08)',

  // Botões Desabilitados
  buttonDisabledBg: '#1e293b',
  buttonDisabledText: '#64748b',
  buttonDisabledBorder: '#1e293b'
};

/**
 * Tipo que define a estrutura de um tema.
 */
export type ThemeType = typeof darkTheme;

/**
 * @fileoverview Define os temas claro e escuro da aplicação.
 * Exporta configurações de cores para cada modo de tema.
 */

/**
 * Tema claro com cores em tons claros.
 * @type {Object}
 * @property {string} title - Identificador do tema ('light')
 * @property {string} background - Cor de fundo (#f1f6fc - azul muito claro)
 * @property {string} primary - Cor de texto principal (#0d1017 - azul/preto)
 * @property {string} secondary - Cor secundária (#f1f6fc - igual ao background)
 */
export const lightTheme = {
  title: 'light',
  background: '#f1f6fc',
  primary: '#0d1017',
  secondary: '#f1f6fc'
};

/**
 * Tema escuro com cores em tons escuros.
 * @type {Object}
 * @property {string} title - Identificador do tema ('dark')
 * @property {string} background - Cor de fundo (#0d1017 - azul/preto escuro)
 * @property {string} primary - Cor de texto principal (#f1f6fc - branco claro)
 * @property {string} secondary - Cor secundária (#0d1017 - igual ao background)
 */
export const darkTheme = {
  title: 'dark',
  background: '#0d1017',
  primary: '#f1f6fc',
  secondary: '#0d1017'
};

/**
 * Tipo que define a estrutura de um tema.
 * Garante que novos temas possuam as mesmas propriedades do darkTheme.
 * @typedef {typeof darkTheme} ThemeType
 */
export type ThemeType = typeof darkTheme;

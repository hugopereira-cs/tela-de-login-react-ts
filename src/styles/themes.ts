export const lightTheme = {
  title: 'light',
  background: '#f1f6fc',
  primary: '#0d1017',
  secondary: '#f1f6fc'
};

export const darkTheme = {
  title: 'dark',
  background: '#0d1017',
  primary: '#f1f6fc',
  secondary: '#0d1017'
};

// Faz com que o tema padrão (DefaultTheme) tenha as mesmas propriedades do darkTheme
export type ThemeType = typeof darkTheme;

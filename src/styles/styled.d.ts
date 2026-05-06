import 'styled-components';
import { lightTheme } from './themes';


type Theme = typeof lightTheme;

declare module 'styled-components' {
  // Sobrescreve a interface DefaultTheme para incluir as propriedades do Theme
  export interface DefaultTheme extends Theme {}
}
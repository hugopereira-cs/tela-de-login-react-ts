import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default tseslint.config(
  // 1. Ignorar pastas desnecessárias
  { ignores: ["dist", "node_modules"] },
  
  // 2. Configurações recomendadas de JS e TS
  js.configs.recommended,
  ...tseslint.configs.recommended,
  
  // 3. Configuração do React
  {
    ...pluginReact.configs.flat.recommended,
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    settings: {
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Necessário para React 17+
      "prettier/prettier": "error",      // Mostra erros do Prettier no ESLint
    },
  },
  
  // 4. DESATIVAR REGRAS CONFLITANTES (Sempre por último)
  configPrettier
);
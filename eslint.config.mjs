import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier'; // Import Prettier plugin
import configPrettier from 'eslint-config-prettier'; // Import Prettier config

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs}'], // File patterns
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add Node.js global variables
      },
      ecmaVersion: 'latest', // Use the latest ECMAScript version
    },
    plugins: {
      prettier: pluginPrettier, // Add Prettier plugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // ESLint recommended rules
      'prettier/prettier': 'error', // Integrate Prettier rules as ESLint errors
    },
  },
  configPrettier, // Disable ESLint rules that conflict with Prettier
];

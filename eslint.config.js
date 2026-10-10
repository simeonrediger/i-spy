import js from '@eslint/js';
import json from '@eslint/json';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['package-lock.json']),

  {
    files: ['**/*.js'],
    extends: [js.configs.recommended],
  },

  {
    files: ['**/*.json', '.prettierrc'],
    language: 'json/json',
    extends: [json.configs.recommended],
  },
]);

import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: [
      'dist/**',
      'dist-ssr/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      'build/**',
      'public/**',
      'stats.html',
    ],
  },
  // Vue 文件配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      prettier,
    },
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['index', '401', '404', 'Logo'],
        },
      ],
      'vue/no-unused-vars': 'warn',
      'vue/valid-template-root': 'off',
      'vue/no-multiple-template-root': 'off',
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
  // TypeScript 和 JavaScript 文件配置
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
]

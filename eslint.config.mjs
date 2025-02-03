// Імпортуємо глобальні змінні для браузера та Node.js
import globals from "globals";
// Імпортуємо рекомендовані конфігурації з пакету @eslint/js
import pluginJs from "@eslint/js";

/**
 * Типізація конфігурації ESLint для покращеної підтримки Flat Config
 * @type {import('eslint').FlatConfig[]}
 */
export default [
  {
    // Основна конфігурація для всіх файлів
    files: ["**/*.{js,jsx,ts,tsx}"], // Шаблон для всіх основних файлів
    languageOptions: {
      ecmaVersion: 2023, // Вказує версію ECMAScript
      sourceType: "module", // Використання модулів (import/export)
      globals: {
        ...globals.browser, // Глобальні змінні браузера
        ...globals.node,    // Глобальні змінні Node.js
      },
    },
    rules: {
      // Відступи
      "indent": ["error", 2, { // Використання відступу у 2 пробіли
        "SwitchCase": 1, // Відступ для `case` в `switch`
        "VariableDeclarator": "first", // Перша змінна на одному рівні
        "outerIIFEBody": 1, // Відступ для IIFE
        "MemberExpression": 1, // Відступ для багаторядкових доступів до об'єктів
        "FunctionDeclaration": {
          "parameters": "first",
          "body": 1,
        },
        "FunctionExpression": {
          "parameters": "first",
          "body": 1,
        },
        "CallExpression": {
          "arguments": "first",
        },
        "ArrayExpression": "first",
        "ObjectExpression": "first",
        "ImportDeclaration": 1,
      }],

      // Пробіли між логічними блоками
      "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": "return" },
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
      ],

      // Заборона порожніх рядків у блоках
      "padded-blocks": ["error", "never"],

      // Дужки в єгипетському стилі
      "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

      // Пробіли перед блоками
      "space-before-blocks": ["error", "always"],

      // Пробіли після ключових слів
      "keyword-spacing": ["error", { "before": true, "after": true }],

      // Пробіли у шаблонних рядках
      "template-curly-spacing": ["error", "never"],

      // Крапки з комою
      "semi": ["error", "always"],

      // Одинарні лапки
      "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],

      // Заборона невикористаних змінних
      "no-unused-vars": ["error", { "args": "none", "ignoreRestSiblings": true }],

      // Консоль: попередження
      "no-console": "warn",

      // Лімітуємо максимальну довжину рядка
      "max-len": ["error", { "code": 120, "tabWidth": 2, "ignoreUrls": true }],

      // Уникнення занадто глибокого вкладення
      "max-depth": ["warn", 4],

      // Уникнення магічних чисел
      "no-magic-numbers": ["warn", { "ignore": [0, 1, -1] }],

      // Максимальна кількість рядків у функції
      "max-lines-per-function": ["warn", 50],

      // Уникнення зайвих порожніх рядків
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],

      // Уникнення використання var
      "no-var": "error",
    },
  },
  {
    // Окрема конфігурація для тестових файлів
    files: ["**/*.test.js", "**/*.spec.js"], // Шаблон для тестових файлів
    languageOptions: {
      globals: {
        jest: true, // Глобальні змінні Jest
      },
    },
    rules: {
      // Дозволити console.log у тестах
      "no-console": "off",
    },
  },
  // Використовуємо рекомендовані налаштування з пакету @eslint/js
  pluginJs.configs.recommended,
];

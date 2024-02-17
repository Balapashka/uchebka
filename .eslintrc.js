module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    // Основной набор правил ESLint
    "eslint:recommended",
    // Правила ESLint специфичные для Vue.js
    "plugin:vue/vue3-essential", // Или 'plugin:vue/vue3-strongly-recommended' или 'plugin:vue/vue3-recommended'
    // Правила для поддержки синтаксиса ES6+
    "@vue/eslint-config-typescript/recommended",
    // Добавьте это, если используете Prettier для форматирования кода
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: "@typescript-eslint/parser", // Используйте, если ваш проект на TypeScript
  },
  rules: {
    // Здесь вы можете переопределить или добавить свои правила
    // Например, отключить правило, которое не позволяет использовать console.log
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};

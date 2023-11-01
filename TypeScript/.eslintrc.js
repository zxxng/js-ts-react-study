module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // 추천 규칙 : 상황에 따라 커스텀 할 수 있다!
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-var': 'off',
    'prefer-const': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    // 함수의 리턴값을 꼭 지정해줘야 하는 옵션
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': 'warn',
    // any 사용 x
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};

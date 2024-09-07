module.exports = {
  // Type check
  '**/*.ts': [() => 'tsc -p tsconfig.json --skipLibCheck --noEmit'],

  // Lint
  '**/*.{ts,js}': 'eslint --fix',

  // Format
  '**/*.{ts,js,md,json,html,css}': 'prettier --write',
};

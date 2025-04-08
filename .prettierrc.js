module.exports = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-sort-json',
  ],
  printWidth: 100,
  singleQuote: true,
  bracketSpacing: false,
  bracketSameLine: true,
  htmlWhitespaceSensitivity: 'ignore',
  jsonRecursiveSort: true,
};

export default {
  // Run prettier on all supported files
  "*.{js,jsx,ts,tsx,json,css,md}": ["prettier --write"],
  // Run eslint on JavaScript/TypeScript files
  "*.{js,jsx,ts,tsx}": ["eslint --fix"],
}

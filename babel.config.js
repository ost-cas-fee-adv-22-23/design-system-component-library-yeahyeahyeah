module.exports = {
  presets: ['next/babel', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['babel-plugin-twin', 'babel-plugin-macros', ['babel-plugin-styled-components', { ssr: true }]],
};

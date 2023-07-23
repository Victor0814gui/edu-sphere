module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    // ... other configs, if any
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@modules': './src/modules',
          '@shared': './src/shared',
          '@types': './src/types',
        },
      },
    ],
  ],
};

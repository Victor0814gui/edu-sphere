module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './',
          tests: ['./tests/'],
          '@customer': './src/modules/customer',
          '@session': './src/modules/session',
          '@rooms': './src/modules/rooms',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};

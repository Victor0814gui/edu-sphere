module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}],'module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './components',
          _main: './components/_main',
          screens: './screens',
          config: './config',
          navigations: './navigations',
          utils: './utils',
          actions: './state/actions',
          constants: './state/constants',
          contexts: './state/contexts',
          reducers: './state/reducers',
          assets: './assets/',
          hooks: './hooks',
          data: './data',
        },
      },
    ],
  ],
};

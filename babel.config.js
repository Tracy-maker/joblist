module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@styles': './src/styles'
        }
      }]
    ]
  };
};

module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: {
        grid: true,
      },
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'color-mod-function': true,
      },
    }),
  ],
};

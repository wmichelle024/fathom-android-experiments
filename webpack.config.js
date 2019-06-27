const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: '/Users/severinrudie/Desktop/moz-code/other/fathom-android-experiments/app/src/main/res/raw',
      filename: 'extract.js'
    }
};

const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: __dirname + '/app/src/main/res/raw',
      filename: 'extract.js'
    }
};

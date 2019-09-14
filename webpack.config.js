const path = require('path')

module.exports = {

        mode: 'development',
        entry: path.resolve(__dirname, 'src/index.js'),
        output:{
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        devtool: 'source-map',
        devServer:{
            contentBase: path.join(__dirname, '/public/'),
            compress: true,
            port: 9000
        },
        module:{
            rules:[
                  {
                      exclude: /(node_modules)/,
                      test: /\.(js|jsx)$/,
                      use:{
                          loader: 'babel-loader',
                          options:{
                              presets: ['@babel/preset-env', '@babel/preset-react'],
                              plugins: ['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
                          }
                      }  
                  }  

            ]
        }

}    
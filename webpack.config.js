const packageJson = require('./package.json')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const env = process.env.NODE_ENV

const version = (env === 'production') ? `${packageJson.version}-min` : `${packageJson.version}`
const name = `${packageJson.name}-${version}`

const extractSass = new ExtractTextPlugin({
  filename: `${name}.css`,
  // disable: env === "development"
  disable: false
});

const commonConfig = {
  entry: {
    dist: ['./src/index.js']
  },
  resolve: {
    mainFiles: ['index'],
    extensions: ['.js', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["@babel/preset-env", {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7", "ie >= 9"]
                }
              }]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')({
                    browsers: [
                      "defaults",
                      "not ie < 8",
                      "last 2 versions",
                      "> 1%",
                      "iOS 7",
                      "last 3 iOS versions"
                    ]
                  }),
                ]
              }
            },
            {
              loader: "sass-loader",
              options: {
                outputStyle: 'expanded',
                includePaths: ['theme/index.scss']
              }
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
      }
    ]
  },
  plugins: [
    extractSass
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  }
}

const distConfig = Object.assign({}, commonConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${name}.js`
  }
})
const siteConfig = Object.assign({}, commonConfig, {
  output: {
    path: path.resolve(__dirname, 'site/ppmui'),
    filename: `${name}.js`
  }
})
const zuoyeben = Object.assign({}, commonConfig, {
  output: {
    path: path.resolve(__dirname, '/Users/jun/Documents/work/06凤凰传媒/07作业本/作业本二期/plugins/ppmui'),
    filename: `${name}.js`
  }
})

module.exports = [distConfig, siteConfig, zuoyeben];
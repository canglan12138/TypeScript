const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    //告诉webpack不要使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test:/\.ts$/,
        use: [
            //配置babel
          {
            //指定加载器
            loader: 'babel-loader',
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                  [
                      //指定环境的插件
                      '@babel/preset-env',
                      //配置信息
                    {
                      targets: {
                        'chrome': '88'
                      },
                      'corejs': '3',
                      //使用corejs的方式按需加载
                      'useBuiltIns': 'usage'
                    }
                  ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
      new CleanWebpackPlugin()
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  },
  mode: 'development',
}

const [, themeName] = __dirname.match(/\/wp-content\/themes\/([^/]+)\/webpack\/loaders$/)
module.exports = {
  test: /\.(png|svg|jpg|gif|jpeg)$/,
  use: [
    {
      loader: 'file-loader?name=app/images/[name].[ext]',
      options: {
        name: `/wp-content/themes/${themeName}/dist/img/[name].[ext]`,
        // publicPath: `/wp-content/themes/${themeName}/dist`
      }
    }
  ]
}

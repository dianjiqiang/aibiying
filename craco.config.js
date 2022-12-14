const CracoLessPlugin = require('craco-less')
const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  //别名
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}

const withTM = require('next-transpile-modules')(['@47ng/chakra-next'])
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(
  withTM({
    experimental: {
      reactRefresh: true
    }
  })
)

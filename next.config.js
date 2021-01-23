const withSass = require('@zeit/next-sass')
module.exports = withSass({webpack: (config, {dir, dev, isServer, buildId, defaultLoaders}) => {
    return config
}})
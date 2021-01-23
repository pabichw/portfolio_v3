const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
    webpack: (config, {dir, dev, isServer, buildId, defaultLoaders}) => {
        config.resolve.modules.push(path.resolve('./src'))
        config.resolve.alias['@'] = path.join(__dirname, 'src')
        return config
    }
})
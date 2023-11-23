function initSvgr(config) {
    config.module.rules.push({
        test: /\.svg$/i,
        use: ['@svgr/webpack']
    });
}

module.exports = { initSvgr };
